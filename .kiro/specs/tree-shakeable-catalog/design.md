# Design Document

## Overview

Restructure the monolithic `src/catalog.ts` (~21K lines) into ~460 individual per-service files under `src/catalog/`, enabling bundler tree-shaking. The generator script is rewritten to produce per-service files, a barrel, a metadata file, and update `package.json` exports. The `iam` helper object and `iamAction` function are removed; `render.ts` is updated to import from `_meta.ts` instead.

## Architecture

### File Structure

```
src/
├── catalog/
│   ├── _meta.ts          # iamActionCatalog + metadata exports
│   ├── index.ts          # barrel re-exporting all service files + _meta
│   ├── s3.ts             # per-service file
│   ├── ec2.ts
│   ├── access-analyzer.ts  # hyphenated file name
│   ├── acm-pca.ts
│   └── ...               # ~460 service files
├── index.ts              # package entry, re-exports catalog/index + schema + render
├── render.ts             # updated import: iamActionCatalog from ./catalog/_meta.js
├── render.test.ts
├── schema.ts
└── schema.test.ts
```

### Component Interactions

```
┌─────────────────────────────────────────────────────────────┐
│  scripts/generate-catalog.ts                                │
│  Fetches AWS data → produces src/catalog/* + updates pkg    │
└────────────┬────────────────────────────────────────────────┘
             │ writes
             ▼
┌─────────────────────────────────────────────────────────────┐
│  src/catalog/                                               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌───────────┐  │
│  │ _meta.ts │  │  s3.ts   │  │  ec2.ts  │  │ index.ts  │  │
│  └──────────┘  └──────────┘  └──────────┘  └───────────┘  │
└────────────┬────────────────────────────────────────────────┘
             │ re-exported by
             ▼
┌─────────────────────────────────────────────────────────────┐
│  src/index.ts                                               │
│  export * from "./catalog/index.js"                         │
│  export * from "./schema.js"                                │
│  export { policyToTypescript } from "./render.js"           │
└─────────────────────────────────────────────────────────────┘
             │ consumed by
             ▼
┌─────────────────────────────────────────────────────────────┐
│  src/render.ts                                              │
│  import { iamActionCatalog } from "./catalog/_meta.js"      │
└─────────────────────────────────────────────────────────────┘
```

## Components and Interfaces

### 1. Per-Service File (`src/catalog/{prefix}.ts`)

Each generated service file is a self-contained module exporting three things:

```typescript
// src/catalog/s3.ts
export const s3Actions = [
  "AbortMultipartUpload",
  "CreateBucket",
  // ...
] as const;

export type S3Action = (typeof s3Actions)[number];

export function s3(action: S3Action | "*"): `s3:${S3Action | "*"}` {
  return `s3:${action}` as `s3:${S3Action | "*"}`;
}
```

For hyphenated prefixes, the file name keeps hyphens but identifiers use camelCase/PascalCase:

```typescript
// src/catalog/access-analyzer.ts
export const accessAnalyzerActions = [
  "ApplyArchiveRule",
  "CancelPolicyGeneration",
  // ...
] as const;

export type AccessAnalyzerAction = (typeof accessAnalyzerActions)[number];

export function accessAnalyzer(action: AccessAnalyzerAction | "*"): `access-analyzer:${AccessAnalyzerAction | "*"}` {
  return `access-analyzer:${action}` as `access-analyzer:${AccessAnalyzerAction | "*"}`;
}
```

### 2. Metadata File (`src/catalog/_meta.ts`)

Preserves the raw catalog data for consumers that need the full dataset (including `render.ts`):

```typescript
// src/catalog/_meta.ts
export const iamActionCatalog = {
  "a2c": ["GetContainerizationJobDetails", ...],
  "s3": ["AbortMultipartUpload", ...],
  // ...
} as const;

export const iamActionCatalogSourceUrl = "https://awspolicygen.s3.amazonaws.com/js/policies.js";
export const iamActionCatalogSourceSha256 = "ec6c12c961fa3d5e...";
export const iamActionCatalogActionCount = 18742;
```

### 3. Barrel File (`src/catalog/index.ts`)

Pure re-exports, no runtime logic:

```typescript
// src/catalog/index.ts
export * from "./_meta.js";
export * from "./s3.js";
export * from "./ec2.js";
export * from "./access-analyzer.js";
// ... one line per service
```

### 4. Package Entry (`src/index.ts`)

Updated to remove `iam`, `iamAction`, `IamHelperObject` and re-export from the new barrel:

```typescript
// src/index.ts
export * from "./catalog/index.js";

export {
  iamPolicyDocumentSchema,
  iamPolicyStatementSchema,
  iamPolicyDocumentStrictSchema,
  iamPolicyStatementStrictSchema,
  isIamPolicyDocument,
  isIamPolicyStatement,
  isIamPolicyDocumentStrict,
  isIamPolicyStatementStrict,
  assertIamPolicyDocument,
  assertIamPolicyStatement,
  assertIamPolicyDocumentStrict,
  type IamPolicyVersion,
  type IamPolicyScalar,
  type IamPolicyScalarList,
  type IamPolicyStringList,
  type IamPolicyPrincipalMap,
  type IamPolicyPrincipal,
  type IamPolicyConditionBlock,
  type IamPolicyStatement,
  type IamPolicyDocument,
  type IamPolicyStatementStrict,
  type IamPolicyDocumentStrict,
} from "./schema.js";

export { policyToTypescript } from "./render.js";
```

### 5. Updated `render.ts`

Currently imports `iamActionCatalog` from `./catalog.js`. After migration, imports from `./catalog/_meta.js`:

```typescript
// src/render.ts (only the import changes)
import { iamActionCatalog } from "./catalog/_meta.js";
import type { IamPolicyDocument } from "./schema.js";
```

The render output changes from `iam.s3("GetObject")` to `s3("GetObject")` and from `iam["access-analyzer"]("ListAnalyzers")` to `accessAnalyzer("ListAnalyzers")`. The `renderActionString` function is updated to emit per-service function calls instead of `iam.*` property accesses:

```typescript
function renderActionString(value: string): string {
  const parts = parseActionParts(value);
  if (parts == null) return JSON.stringify(value);

  const isWildcard = parts.actionName === "*";
  if (!isWildcard) {
    const canonicalAction = findCanonicalAction(parts.servicePrefix, parts.actionName);
    if (canonicalAction == null) return JSON.stringify(value);
    const fnName = prefixToCamelCase(parts.servicePrefix);
    return `${fnName}(${JSON.stringify(canonicalAction)})`;
  }

  if (!isKnownServicePrefix(parts.servicePrefix)) return JSON.stringify(value);
  const fnName = prefixToCamelCase(parts.servicePrefix);
  return `${fnName}("*")`;
}
```

### 6. Generator Script (`scripts/generate-catalog.ts`)

Rewritten to produce the new file structure:

```typescript
async function main(): Promise<void> {
  const rawSource = await fetchPoliciesJs();
  const catalog = normalizeCatalog({ rawSource, sourceUrl });
  const catalogDir = resolve("src/catalog");

  // Generate per-service files
  for (const [prefix, actions] of Object.entries(catalog.services)) {
    const content = renderServiceFile({ prefix, actions });
    await writeIfChanged(resolve(catalogDir, `${prefix}.ts`), content);
  }

  // Generate _meta.ts
  const metaContent = renderMetaFile(catalog);
  await writeIfChanged(resolve(catalogDir, "_meta.ts"), metaContent);

  // Generate barrel index.ts
  const barrelContent = renderBarrelFile(Object.keys(catalog.services));
  await writeIfChanged(resolve(catalogDir, "index.ts"), barrelContent);

  // Remove stale service files
  await removeStaleFiles(catalogDir, catalog.services);

  // Update package.json exports
  await updatePackageJsonExports(catalog.services);
}
```

### 7. Naming Convention Functions

The generator uses two pure functions to derive identifiers from service prefixes:

```typescript
/**
 * Converts a hyphenated service prefix to a camelCase identifier.
 * Used for function names and action tuple const names.
 * Examples: "s3" → "s3", "access-analyzer" → "accessAnalyzer", "acm-pca" → "acmPca"
 */
function prefixToCamelCase(prefix: string): string {
  return prefix.replace(/-([a-z0-9])/g, (_, char) => char.toUpperCase());
}

/**
 * Converts a hyphenated service prefix to a PascalCase identifier.
 * Used for type names.
 * Examples: "s3" → "S3", "access-analyzer" → "AccessAnalyzer", "acm-pca" → "AcmPca"
 */
function prefixToPascalCase(prefix: string): string {
  const camel = prefixToCamelCase(prefix);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}
```

### 8. Service File Renderer Interface

```typescript
interface RenderServiceFileProps {
  prefix: string;    // e.g. "access-analyzer"
  actions: string[]; // sorted action names
}

function renderServiceFile(props: RenderServiceFileProps): string;
```

### 9. Package.json Exports Map Structure

```json
{
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./_meta": {
      "import": "./dist/catalog/_meta.js",
      "types": "./dist/catalog/_meta.d.ts"
    },
    "./s3": {
      "import": "./dist/catalog/s3.js",
      "types": "./dist/catalog/s3.d.ts"
    },
    "./access-analyzer": {
      "import": "./dist/catalog/access-analyzer.js",
      "types": "./dist/catalog/access-analyzer.d.ts"
    }
  }
}
```

Each subpath key matches the service prefix (with hyphens preserved). The `"import"` field points to the compiled `.js` file and `"types"` to the `.d.ts` declaration.

## Data Models

### NormalizedCatalog (unchanged from current)

```typescript
type NormalizedCatalog = {
  sourceUrl: string;
  sourceSha256: string;
  actionCount: number;
  services: Record<string, string[]>; // prefix → sorted action names
};
```

### Generated Service File Shape

Each service file produces these exports at the type level:

```typescript
// For prefix P with actions [A1, A2, ...]
export const {camelCase(P)}Actions: readonly [A1, A2, ...];
export type {PascalCase(P)}Action = A1 | A2 | ...;
export function {camelCase(P)}(action: {PascalCase(P)}Action | "*"): `{P}:${{PascalCase(P)}Action | "*"}`;
```

## Error Handling

### Generator Errors

| Scenario | Behavior |
|----------|----------|
| Network failure fetching AWS source | Throw with descriptive message, non-zero exit |
| Malformed AWS source payload | Throw with parse error details |
| File system write failure | Throw, letting Node propagate the error |
| No changes detected | Log "catalog is up to date", exit 0 |
| Stale file removal failure | Log warning, continue with remaining files |

### Runtime Errors

The per-service functions are pure and infallible — they accept a constrained union type and return a template literal. No runtime errors are possible for valid inputs. TypeScript's type system prevents invalid inputs at compile time.

## Testing Strategy

### Unit Tests

- **Naming conventions**: Verify `prefixToCamelCase` and `prefixToPascalCase` with specific examples (simple prefixes, single-hyphen, multi-hyphen, numeric segments)
- **render.ts output format**: Verify `policyToTypescript` emits `s3("GetObject")` instead of `iam.s3("GetObject")` and `accessAnalyzer("ListAnalyzers")` instead of `iam["access-analyzer"]("ListAnalyzers")`
- **Removal verification**: Confirm `iam`, `iamAction`, and `IamHelperObject` are not exported from the package entry

### Property Tests

- **Service function identity**: For random prefix/action pairs, verify the function returns the correct `prefix:action` string
- **File structure correctness**: For random catalogs, verify generated files have correct naming and exports
- **Barrel completeness**: For random service sets, verify the barrel has exactly the right re-exports
- **Exports map**: For random service sets, verify package.json exports map is correct
- **Stale cleanup**: For random catalog transitions, verify removed services have their files deleted
- **ESM compliance**: For any generated file, verify all specifiers end in `.js`

### Integration Tests

- **Full build**: Run `tsc -p tsconfig.build.json` after generation and verify zero errors
- **Idempotency**: Run generator twice with same input, verify no writes on second run
- **End-to-end**: Generate from mock AWS data, build, and import a service function to verify it works

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Service function identity

*For any* service prefix P and any action A in that service's action list (or "*"), calling the generated service function with A SHALL return the string `P:A`.

**Validates: Requirements 1.4**

### Property 2: Service file structure and naming

*For any* service prefix P (including those with hyphens), the generated service file SHALL export: a const named `{camelCase(P)}Actions` containing all actions as a readonly tuple, a type named `{PascalCase(P)}Action`, and a function named `{camelCase(P)}`.

**Validates: Requirements 1.2, 1.3, 1.5**

### Property 3: One-to-one file mapping

*For any* normalized catalog containing N service prefixes, the generator SHALL produce exactly N `.ts` files in `src/catalog/` (excluding `_meta.ts` and `index.ts`), where each file name matches its corresponding service prefix.

**Validates: Requirements 1.1**

### Property 4: Barrel purity and completeness

*For any* set of generated service files, the barrel `src/catalog/index.ts` SHALL contain exactly one `export * from "./{file}.js"` statement per service file plus one for `_meta.ts`, and SHALL contain no other runtime statements.

**Validates: Requirements 2.1, 2.3, 3.3**

### Property 5: Exports map completeness

*For any* set of service prefixes in the catalog, the `package.json` `"exports"` map SHALL contain a subpath entry `"./{prefix}"` with `"import"` pointing to `"./dist/catalog/{prefix}.js"` and `"types"` pointing to `"./dist/catalog/{prefix}.d.ts"` for each prefix.

**Validates: Requirements 4.1**

### Property 6: Stale file removal

*For any* pair of consecutive generator runs where the second run's catalog is a strict subset of the first, all service files corresponding to prefixes present in the first run but absent in the second SHALL be deleted from `src/catalog/`.

**Validates: Requirements 7.3**

### Property 7: ESM specifier compliance

*For any* generated TypeScript file (service file, barrel, or meta file), all `import` and `export` specifiers SHALL end with the `.js` extension.

**Validates: Requirements 7.5**
