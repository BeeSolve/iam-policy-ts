# @beesolve/iam-policy-ts

Tree-shakeable, type-safe IAM policy helpers with an auto-generated action catalog from AWS.

Each of the ~450 AWS services lives in its own module. Import only what you use — your bundler drops the rest. Full autocomplete for all AWS IAM actions when writing inline policies in TypeScript.

## Installation

```bash
npm install @beesolve/iam-policy-ts
```

## Usage

### IAM Action Helpers

Each AWS service is exported as a standalone function with full type safety and autocomplete:

```typescript
import { s3, ec2, organizations } from "@beesolve/iam-policy-ts";

s3("GetObject");              // "s3:GetObject"
ec2("RunInstances");          // "ec2:RunInstances"
organizations("ListAccounts"); // "organizations:ListAccounts"
s3("*");                      // "s3:*"
```

Hyphenated service prefixes use camelCase function names:

```typescript
import { accessAnalyzer, ssoDirectory } from "@beesolve/iam-policy-ts";

accessAnalyzer("ListAnalyzers");  // "access-analyzer:ListAnalyzers"
ssoDirectory("SearchUsers");      // "sso-directory:SearchUsers"
```

### Namespace Import

If you prefer a single namespace (similar to the old `iam` object), you can use a namespace import:

```typescript
import * as iam from "@beesolve/iam-policy-ts";

iam.s3("GetObject");              // "s3:GetObject"
iam.accessAnalyzer("ListAnalyzers"); // "access-analyzer:ListAnalyzers"
```

Tree-shaking works with namespace imports in modern bundlers (esbuild, Rollup, Vite, webpack 5). They statically analyze which properties you access on the namespace and drop the rest. This is the same pattern used by [Valibot](https://valibot.dev/guides/installation/) (`import * as v from 'valibot'`).

### Subpath Imports (Tree-Shaking)

For optimal bundle size, import only the services you need via subpath exports:

```typescript
// Import only what you need — optimal for tree-shaking
import { s3 } from "@beesolve/iam-policy-ts/s3";
import { accessAnalyzer } from "@beesolve/iam-policy-ts/access-analyzer";

s3("GetObject");                  // "s3:GetObject"
accessAnalyzer("ListAnalyzers");  // "access-analyzer:ListAnalyzers"
```

Each service has its own subpath matching the AWS service prefix (with hyphens preserved).

### Policy Validation

Two validation modes are available:

**Permissive (default)** — validates structural shape only (field types, allowed keys). Matches what AWS accepts at the JSON level without enforcing grammar rules like Action/NotAction exclusivity.

```typescript
import {
  isIamPolicyDocument,
  assertIamPolicyDocument,
  iamPolicyDocumentSchema,
} from "@beesolve/iam-policy-ts";

// Type guard
if (isIamPolicyDocument(unknownValue)) {
  // unknownValue is typed as IamPolicyDocument
}

// Assertion (throws on invalid input)
const policy = assertIamPolicyDocument(jsonInput);
```

**Strict** — additionally enforces IAM grammar rules:
- Must have exactly one of `Action` or `NotAction`
- Cannot have both `Resource` and `NotResource`

```typescript
import {
  isIamPolicyDocumentStrict,
  assertIamPolicyDocumentStrict,
  iamPolicyDocumentStrictSchema,
} from "@beesolve/iam-policy-ts";

// Rejects policies with both Action and NotAction, etc.
if (isIamPolicyDocumentStrict(unknownValue)) {
  // Passes strict grammar checks
}
```

### Render Policy as TypeScript

```typescript
import { policyToTypescript } from "@beesolve/iam-policy-ts";

const ts = policyToTypescript({
  Version: "2012-10-17",
  Statement: [{
    Effect: "Allow",
    Action: ["s3:GetObject", "s3:ListBucket"],
    Resource: "*",
  }],
});

// Output uses per-service functions for known actions:
// {
//   Version: "2012-10-17",
//   Statement: [
//     {
//       Effect: "Allow",
//       Action: [
//         s3("GetObject"),
//         s3("ListBucket")
//       ],
//       Resource: "*"
//     }
//   ]
// }
```

### Access the Raw Catalog

The full action catalog is available from the main entry or via a dedicated subpath:

```typescript
// From main entry
import {
  iamActionCatalog,
  iamActionCatalogSourceSha256,
  iamActionCatalogActionCount,
} from "@beesolve/iam-policy-ts";

// Or via dedicated subpath (avoids pulling in all service functions)
import {
  iamActionCatalog,
  iamActionCatalogSourceSha256,
  iamActionCatalogActionCount,
} from "@beesolve/iam-policy-ts/_meta";

// iamActionCatalog is a typed const object:
// { s3: ["AbortMultipartUpload", ...], kms: ["CancelKeyDeletion", ...], ... }

console.log(`${iamActionCatalogActionCount} actions across ${Object.keys(iamActionCatalog).length} services`);
```

## Migration Guide (from v25 / v26)

This version introduces a breaking change: the monolithic `iam` helper object and `iamAction()` function have been removed in favor of per-service function imports that enable tree-shaking.

### Removed Exports

| Removed Export | Replacement |
|---|---|
| `iam` (runtime object) | Per-service functions (e.g., `s3`, `ec2`, `accessAnalyzer`) |
| `iamAction(prefix, action)` | Per-service functions (e.g., `s3("GetObject")`) |
| `IamHelperObject` (type) | Removed — no replacement needed |

### Migration Examples

**Before:**
```typescript
import { iam, iamAction } from "@beesolve/iam-policy-ts";

iam.s3("GetObject");                        // "s3:GetObject"
iam["access-analyzer"]("ListAnalyzers");    // "access-analyzer:ListAnalyzers"
iamAction("s3", "GetObject");               // "s3:GetObject"
```

**After:**
```typescript
import { s3, accessAnalyzer } from "@beesolve/iam-policy-ts";

s3("GetObject");                  // "s3:GetObject"
accessAnalyzer("ListAnalyzers");  // "access-analyzer:ListAnalyzers"
```

### Quick Reference

| Old Pattern | New Pattern |
|---|---|
| `iam.s3("GetObject")` | `s3("GetObject")` |
| `iam.ec2("RunInstances")` | `ec2("RunInstances")` |
| `iam["access-analyzer"]("ListAnalyzers")` | `accessAnalyzer("ListAnalyzers")` |
| `iam["acm-pca"]("IssueCertificate")` | `acmPca("IssueCertificate")` |
| `iamAction("s3", "GetObject")` | `s3("GetObject")` |

### Render Output Changes

The `policyToTypescript` function now emits per-service function calls instead of `iam.*` property accesses:

| Before | After |
|---|---|
| `iam.s3("GetObject")` | `s3("GetObject")` |
| `iam["access-analyzer"]("ListAnalyzers")` | `accessAnalyzer("ListAnalyzers")` |

## Updating the Catalog

The catalog is updated automatically by a daily GitHub Actions workflow that runs at 02:00 UTC. It fetches the latest IAM action data from AWS, and if changes are detected, commits the update and publishes a new version to npm.

You can also run `npm run generate` locally to regenerate the catalog under `src/catalog/`.

Source: https://awspolicygen.s3.amazonaws.com/js/policies.js

## Versioning

This package uses date-based versions in `YY.M.D` format (e.g., `25.7.14`). A new version is published automatically only when the upstream AWS IAM action catalog changes. The version reflects the UTC date the catalog was captured.

## Types

All IAM policy types are exported:

- `IamPolicyDocument` / `IamPolicyDocumentStrict`
- `IamPolicyStatement` / `IamPolicyStatementStrict`
- `IamPolicyPrincipal`
- `IamPolicyPrincipalMap`
- `IamPolicyConditionBlock`
- `IamPolicyStringList`
- `IamPolicyScalar`
- `IamPolicyScalarList`
- `IamPolicyVersion`

Per-service types are also available:

- `S3Action`, `Ec2Action`, `AccessAnalyzerAction`, etc. — union types of valid actions per service
- `s3Actions`, `ec2Actions`, `accessAnalyzerActions`, etc. — const tuples of action names

## FAQ

### Does this validate that IAM actions actually exist in AWS?

No. The schema validation (`isIamPolicyDocument`, `assertIamPolicyDocument`, etc.) checks structural shape only — correct field types, allowed keys, non-empty strings. It does not verify that an action string like `"s3:GetObject"` corresponds to a real AWS action. The per-service functions provide compile-time autocomplete from the catalog, but the schema layer is intentionally decoupled from it.

### What's the difference between permissive and strict validation?

Permissive (default) validates JSON structure: correct types, no unknown keys, non-empty values. It mirrors what AWS accepts at the API level.

Strict additionally enforces IAM grammar rules: a statement must have exactly one of `Action` or `NotAction`, and cannot have both `Resource` and `NotResource`. Use strict mode when you want to catch logical errors before deployment.

### Can I use wildcard actions like `s3:*`?

Yes. The per-service functions accept `"*"` as a valid action name:

```ts
s3("*")  // "s3:*"
```

The schema layer also accepts any non-empty string in `Action`/`NotAction`, so wildcards like `"s3:Get*"` pass validation.

### How often is the action catalog updated?

A daily GitHub Actions workflow runs at 02:00 UTC. It fetches the latest data from the [AWS policy generator](https://awspolicygen.s3.amazonaws.com/js/policies.js), and if the catalog has changed, commits the update and publishes a new version to npm. No release is created when nothing changes.

### What's the source of the action catalog?

The catalog is derived from `https://awspolicygen.s3.amazonaws.com/js/policies.js` — the same source that powers the AWS Policy Generator console. The SHA-256 hash of the source file is recorded in `iamActionCatalogSourceSha256` for reproducibility.

### Does this package make network calls at runtime?

No. The catalog is generated at build time and shipped as static TypeScript const objects. There are zero runtime network calls.

### Does this work with CDK / Pulumi / SST / Terraform CDK?

Yes. The helpers produce plain strings (`"s3:GetObject"`) and the schema functions accept/return plain objects. They integrate anywhere you construct IAM policy JSON in TypeScript — CDK inline policies, Pulumi policy documents, SST permissions, or Terraform CDK constructs.

### What Node.js and TypeScript versions are supported?

Node.js 24+ and TypeScript 6+. The package is ESM-only (`"type": "module"`).

### Is the catalog tree-shakeable?

Yes. Each AWS service is in its own module (~450 files). The package declares `"sideEffects": false` and provides per-service subpath exports.

**Pros:**
- Import 2-3 services and your bundle includes only those — not the full ~18K-action catalog
- Subpath imports give bundlers the strongest possible signal (no barrel analysis needed)
- Works with esbuild, Rollup, webpack, Vite, and any bundler that supports `package.json` `"exports"`
- Zero runtime overhead — each service function is a one-liner that returns a template literal

**Cons / Limitations:**
- ~450 source files in the package (larger install size on disk, though npm compresses well)
- TypeScript language server may be slower to index on first open due to file count
- The barrel import (`import { s3 } from "@beesolve/iam-policy-ts"`) re-exports all services — tree-shaking depends on your bundler's ability to prune unused re-exports

**When tree-shaking works:**
- esbuild, Rollup, Vite — these handle barrel re-exports and namespace imports well; they'll drop unused services even from `import * as iam`
- `import * as iam from "@beesolve/iam-policy-ts"` — modern bundlers statically analyze property accesses (`iam.s3`, `iam.ec2`) and include only those
- Subpath imports (`@beesolve/iam-policy-ts/s3`) — guaranteed to work with any bundler since only one module is loaded
- Any environment where `"sideEffects": false` is respected

**When tree-shaking may not work:**
- Node.js without a bundler — all modules are available but there's no dead-code elimination at runtime (not a problem since this is a dev-time/build-time concern)
- Older webpack versions (< 5) with barrel imports — may pull in the entire barrel. Use subpath imports as a workaround.
- If you import `iamActionCatalog` from the main entry — the full catalog object (~18K actions) is included. Use `@beesolve/iam-policy-ts/_meta` to isolate it.
- Dynamic access patterns like `const fn = services[prefix]` defeat static analysis — stick to named imports or static `iam.s3(...)` property accesses
- Passing the namespace object around (`doSomething(iam)`) — the bundler can't trace which properties are accessed inside the callee

For maximum tree-shaking, use subpath imports:

```ts
import { s3 } from "@beesolve/iam-policy-ts/s3";
```

### How do I regenerate the catalog locally?

```bash
npm run generate
```

This runs `scripts/generate-catalog.ts`, fetches the latest AWS source, and produces per-service files under `src/catalog/`.

### Should I use the main entry or subpath imports?

It depends on your setup:

| Scenario | Recommendation |
|---|---|
| esbuild / Vite / Rollup | Main entry is fine — these tree-shake barrel re-exports |
| webpack 5 | Main entry usually works, but subpath is safer |
| webpack 4 or older | Use subpath imports |
| Node.js (no bundler) | Doesn't matter — no dead-code elimination either way |
| Lambda / edge functions (size-sensitive) | Subpath imports for guaranteed minimal size |

If in doubt, subpath imports are always the safest choice. They bypass barrel analysis entirely.

## License

MIT
