# Requirements Document

## Introduction

Restructure the `@beesolve/iam-policy-ts` package from a monolithic `src/catalog.ts` (~21K lines) into ~460 individual per-service files under `src/catalog/`. The goal is to enable bundler tree-shaking so consumers only pay for the services they import. This is a breaking change that removes the `iam` runtime helper object and the `iamAction()` function in favor of direct per-service function imports.

## Glossary

- **Package**: The `@beesolve/iam-policy-ts` npm package
- **Generator**: The `scripts/generate-catalog.ts` script that fetches AWS policy data and produces source files
- **Service_File**: A TypeScript source file under `src/catalog/` representing a single AWS service (e.g., `src/catalog/s3.ts`)
- **Barrel**: The `src/catalog/index.ts` file that re-exports all Service_Files
- **Meta_File**: The `src/catalog/_meta.ts` file that exports the raw `iamActionCatalog` data
- **Action_Tuple**: A const tuple of action name string literals exported from a Service_File
- **Action_Union**: A TypeScript union type derived from an Action_Tuple representing all valid actions for a service
- **Service_Function**: A pure function exported from a Service_File that accepts an action name and returns a template literal type `prefix:action`
- **Subpath_Export**: An entry in `package.json` `"exports"` map pointing to a specific Service_File's compiled output
- **AWS_Source**: The remote URL `https://awspolicygen.s3.amazonaws.com/js/policies.js` from which the catalog is generated

## Requirements

### Requirement 1: Per-Service File Generation

**User Story:** As a library consumer, I want each AWS service to live in its own file, so that my bundler can tree-shake unused services out of my bundle.

#### Acceptance Criteria

1. WHEN the Generator executes, THE Generator SHALL produce one Service_File per AWS service prefix under `src/catalog/`.
2. THE Service_File SHALL export an Action_Tuple as a named const (e.g., `s3Actions`).
3. THE Service_File SHALL export an Action_Union type derived from the Action_Tuple (e.g., `S3Action`).
4. THE Service_File SHALL export a Service_Function that accepts a parameter of type `Action_Union | "*"` and returns a template literal type `\`{prefix}:{Action_Union | "*"}\`` (e.g., `export function s3(action: S3Action | "*"): \`s3:${S3Action | "*"}\``).
5. WHEN a service prefix contains characters invalid for a TypeScript identifier (e.g., hyphens), THE Generator SHALL produce a file name matching the prefix (e.g., `access-analyzer.ts`) and use a valid identifier for the function name by converting hyphens to camelCase.

### Requirement 2: Barrel Re-export

**User Story:** As a library consumer, I want a single import path that gives me access to all services, so that I can use the package without knowing individual file paths.

#### Acceptance Criteria

1. THE Generator SHALL produce a Barrel file at `src/catalog/index.ts` that re-exports all Service_Files.
2. THE Package main entry `src/index.ts` SHALL use `export * from "./catalog/index.js"` to expose all service exports at the top level.
3. THE Barrel SHALL NOT contain any runtime logic beyond re-export statements.

### Requirement 3: Metadata File

**User Story:** As a library consumer who needs the raw action catalog data, I want `iamActionCatalog` to remain available as a separate export, so that I can access the full dataset when needed.

#### Acceptance Criteria

1. THE Generator SHALL produce a Meta_File at `src/catalog/_meta.ts`.
2. THE Meta_File SHALL export `iamActionCatalog`, `iamActionCatalogSourceUrl`, `iamActionCatalogSourceSha256`, and `iamActionCatalogActionCount`.
3. THE Barrel SHALL re-export all exports from the Meta_File.

### Requirement 4: Subpath Exports in package.json

**User Story:** As a consumer using esbuild or another bundler that benefits from subpath exports, I want per-service entry points in `package.json`, so that I can import only the service I need without relying on tree-shaking.

#### Acceptance Criteria

1. WHEN the Generator executes, THE Generator SHALL update `package.json` `"exports"` to include a Subpath_Export for each service prefix (e.g., `"./s3": { "import": "./dist/catalog/s3.js", "types": "./dist/catalog/s3.d.ts" }`).
2. THE Package `"exports"` map SHALL retain the `"."` entry pointing to `./dist/index.js`.
3. THE Generator SHALL add a Subpath_Export `"./_meta"` pointing to the compiled Meta_File.

### Requirement 5: Side-Effects Declaration

**User Story:** As a library consumer, I want the package to declare itself side-effect-free, so that bundlers can safely eliminate unused modules.

#### Acceptance Criteria

1. THE Package `package.json` SHALL include `"sideEffects": false`.

### Requirement 6: Removal of iam Helper Object

**User Story:** As a library maintainer, I want to remove the monolithic `iam` runtime object, so that consumers are guided toward tree-shakeable per-service imports.

#### Acceptance Criteria

1. THE Package SHALL NOT export a runtime object named `iam`.
2. THE Package SHALL NOT export the `IamHelperObject` type.
3. THE Package SHALL NOT contain the `src/helpers.ts` module after migration.
4. THE Package SHALL NOT export the `iamAction` function.

### Requirement 7: Generator Script Update

**User Story:** As a library maintainer, I want the generate script to produce the new per-file structure, so that the daily CI workflow continues to keep the catalog up to date.

#### Acceptance Criteria

1. WHEN the Generator fetches data from AWS_Source, THE Generator SHALL produce the per-service file structure described in Requirement 1.
2. WHEN the Generator detects no changes between the fetched data and existing generated files, THE Generator SHALL skip writing and log a message indicating the catalog is up to date.
3. THE Generator SHALL remove stale Service_Files that no longer correspond to a service prefix in the fetched data.
4. THE Generator SHALL produce valid TypeScript that compiles under `verbatimModuleSyntax: true` with `module: "NodeNext"`.
5. THE Generator SHALL use `.js` extensions in all import/export specifiers to comply with ESM resolution.

### Requirement 8: Build and Test Compatibility

**User Story:** As a library maintainer, I want the restructured package to build and pass tests with the existing toolchain, so that the CI pipeline remains functional.

#### Acceptance Criteria

1. THE Package SHALL compile without errors using `tsc -p tsconfig.build.json`.
2. THE Package SHALL pass all tests using the Node.js built-in test runner.
3. THE Package SHALL target Node.js 24+ and TypeScript 6+ as specified in `engines` and `devDependencies`.
4. THE Package SHALL remain ESM-only with `"type": "module"` in `package.json`.

### Requirement 9: Preserve Unrelated Modules

**User Story:** As a library consumer using schema validation or rendering utilities, I want those modules to remain unchanged, so that my existing code continues to work.

#### Acceptance Criteria

1. THE Package SHALL continue to export all symbols from `src/schema.ts` without modification.
2. THE Package SHALL continue to export `policyToTypescript` from `src/render.ts` without modification.

### Requirement 10: Documentation Update

**User Story:** As a library consumer, I want the README to reflect the new import patterns and breaking changes, so that I can migrate my code.

#### Acceptance Criteria

1. THE Package README SHALL document the per-service import pattern (e.g., `import { s3 } from "@beesolve/iam-policy-ts"`).
2. THE Package README SHALL document the subpath import pattern (e.g., `import { s3 } from "@beesolve/iam-policy-ts/s3"`).
3. THE Package README SHALL include a migration guide listing removed exports (`iam`, `iamAction`, `IamHelperObject`).
4. THE Package README SHALL document that `iamActionCatalog` is available via the main entry or `@beesolve/iam-policy-ts/_meta`.
