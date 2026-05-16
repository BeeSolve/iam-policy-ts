# Implementation Plan: Tree-Shakeable Catalog

## Overview

Restructure the monolithic `src/catalog.ts` into ~460 per-service files under `src/catalog/`, rewrite the generator script to produce the new structure, update `render.ts` to use per-service function calls, remove the `iam` helper object and `iamAction` function, and update `package.json` exports for subpath imports.

## Tasks

- [ ] 1. Create naming utilities and service file renderer
  - [ ] 1.1 Create `scripts/naming.ts` with `prefixToCamelCase` and `prefixToPascalCase` functions
    - Implement `prefixToCamelCase`: converts hyphenated prefix to camelCase (e.g., "access-analyzer" → "accessAnalyzer")
    - Implement `prefixToPascalCase`: converts hyphenated prefix to PascalCase (e.g., "access-analyzer" → "AccessAnalyzer")
    - _Requirements: 1.5_

  - [ ] 1.2 Create `scripts/render-service-file.ts` with the service file renderer
    - Implement `renderServiceFile({ prefix, actions })` that produces a TypeScript module exporting an Action_Tuple const, an Action_Union type, and a Service_Function
    - The generated function must return a template literal type `\`{prefix}:{ActionUnion | "*"}\``
    - All import/export specifiers must end with `.js`
    - _Requirements: 1.2, 1.3, 1.4, 1.5, 7.4, 7.5_

  - [ ] 1.3 Create `scripts/render-meta-file.ts` with the metadata file renderer
    - Implement `renderMetaFile(catalog)` that produces `_meta.ts` exporting `iamActionCatalog`, `iamActionCatalogSourceUrl`, `iamActionCatalogSourceSha256`, `iamActionCatalogActionCount`
    - _Requirements: 3.1, 3.2_

  - [ ] 1.4 Create `scripts/render-barrel-file.ts` with the barrel file renderer
    - Implement `renderBarrelFile(prefixes)` that produces `index.ts` with `export * from "./_meta.js"` and one `export * from "./{prefix}.js"` per service
    - No runtime logic beyond re-export statements
    - _Requirements: 2.1, 2.3, 7.5_

  - [ ]* 1.5 Write unit tests for naming utilities
    - Test `prefixToCamelCase` with: simple ("s3" → "s3"), single-hyphen ("access-analyzer" → "accessAnalyzer"), multi-hyphen ("acm-pca" → "acmPca"), numeric ("s3" → "s3")
    - Test `prefixToPascalCase` with same cases
    - _Requirements: 1.5_

- [ ] 2. Rewrite the generator script
  - [ ] 2.1 Rewrite `scripts/generate-catalog.ts` to produce per-service file structure
    - Keep existing `fetchPoliciesJs`, `normalizeCatalog`, and parsing logic
    - Replace `renderCatalogModule` with calls to the new renderers from task 1
    - Add `writeIfChanged` helper to skip writes when content is unchanged
    - Generate per-service files, `_meta.ts`, and barrel `index.ts` under `src/catalog/`
    - _Requirements: 1.1, 7.1, 7.2_

  - [ ] 2.2 Implement stale file removal in the generator
    - After generating new files, scan `src/catalog/` for `.ts` files not in the current catalog (excluding `_meta.ts` and `index.ts`)
    - Remove stale files and log which files were removed
    - _Requirements: 7.3_

  - [ ] 2.3 Implement `package.json` exports map update in the generator
    - Add/update `"exports"` map with `"."` entry, `"./_meta"` entry, and one `"./{prefix}"` entry per service
    - Each entry has `"import"` and `"types"` fields pointing to compiled output under `dist/`
    - Add `"sideEffects": false` to `package.json`
    - _Requirements: 4.1, 4.2, 4.3, 5.1_

  - [ ]* 2.4 Write property test for service function identity (Property 1)
    - **Property 1: Service function identity**
    - For random prefix/action pairs, verify the generated function returns `prefix:action`
    - **Validates: Requirements 1.4**

  - [ ]* 2.5 Write property test for file structure and naming (Property 2)
    - **Property 2: Service file structure and naming**
    - For random prefixes (including hyphenated), verify generated file exports correct const name, type name, and function name
    - **Validates: Requirements 1.2, 1.3, 1.5**

  - [ ]* 2.6 Write property test for one-to-one file mapping (Property 3)
    - **Property 3: One-to-one file mapping**
    - For random catalogs with N services, verify exactly N `.ts` files are produced (excluding `_meta.ts` and `index.ts`)
    - **Validates: Requirements 1.1**

- [ ] 3. Checkpoint - Generator produces valid output
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 4. Update package entry and remove legacy modules
  - [ ] 4.1 Update `src/index.ts` to use new catalog barrel
    - Replace current exports with `export * from "./catalog/index.js"`
    - Keep schema and render exports unchanged
    - Remove imports of `iam`, `iamAction`, `IamHelperObject`, `IamActionCatalog`, `IamPolicyServicePrefix`, `IamPolicyActionNameByService`, `IamPolicyActionForService`
    - _Requirements: 2.2, 6.1, 6.2, 6.4, 9.1, 9.2_

  - [ ] 4.2 Delete `src/helpers.ts` and `src/helpers.test.ts`
    - Remove the legacy helper module entirely
    - _Requirements: 6.3_

  - [ ] 4.3 Delete `src/catalog.ts`
    - Remove the monolithic catalog file (replaced by `src/catalog/` directory)
    - _Requirements: 1.1_

  - [ ]* 4.4 Write property test for barrel purity and completeness (Property 4)
    - **Property 4: Barrel purity and completeness**
    - For random sets of service files, verify barrel contains exactly one re-export per service plus `_meta`, and no other runtime statements
    - **Validates: Requirements 2.1, 2.3, 3.3**

  - [ ]* 4.5 Write property test for exports map completeness (Property 5)
    - **Property 5: Exports map completeness**
    - For random sets of service prefixes, verify `package.json` exports map has correct subpath entries
    - **Validates: Requirements 4.1**

- [ ] 5. Update render.ts to use per-service functions
  - [ ] 5.1 Update `src/render.ts` import and `renderActionString` function
    - Change import from `./catalog.js` to `./catalog/_meta.js`
    - Add `prefixToCamelCase` helper (inline or imported)
    - Update `renderActionString` to emit `fnName(action)` instead of `iam.prefix(action)` / `iam["prefix"](action)`
    - _Requirements: 9.2_

  - [ ] 5.2 Update `src/render.test.ts` to expect new output format
    - Update test assertions from `iam.s3("GetObject")` to `s3("GetObject")`
    - Update test assertions from `iam["access-analyzer"]("ListAnalyzers")` to `accessAnalyzer("ListAnalyzers")`
    - _Requirements: 9.2_

  - [ ]* 5.3 Write property test for stale file removal (Property 6)
    - **Property 6: Stale file removal**
    - For random catalog transitions where second catalog is a subset, verify removed prefixes have their files deleted
    - **Validates: Requirements 7.3**

  - [ ]* 5.4 Write property test for ESM specifier compliance (Property 7)
    - **Property 7: ESM specifier compliance**
    - For any generated file, verify all import/export specifiers end with `.js`
    - **Validates: Requirements 7.5**

- [ ] 6. Checkpoint - Build and tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 7. Run generator and verify build
  - [ ] 7.1 Run `npm run generate` to produce the new catalog structure
    - Execute the rewritten generator against live AWS data
    - Verify `src/catalog/` directory is populated with per-service files, `_meta.ts`, and `index.ts`
    - Verify `package.json` exports map is updated
    - _Requirements: 7.1, 7.2_

  - [ ] 7.2 Run `npm run build` and verify zero TypeScript errors
    - Compile with `tsc -p tsconfig.build.json`
    - Verify all generated files compile under `verbatimModuleSyntax: true` with `module: "NodeNext"`
    - _Requirements: 7.4, 8.1, 8.3, 8.4_

  - [ ] 7.3 Run `npm test` and verify all tests pass
    - Execute the Node.js built-in test runner
    - Verify render tests pass with new output format
    - _Requirements: 8.2_

- [ ] 8. Update README documentation
  - [ ] 8.1 Update `README.md` with new import patterns and migration guide
    - Document per-service import: `import { s3 } from "@beesolve/iam-policy-ts"`
    - Document subpath import: `import { s3 } from "@beesolve/iam-policy-ts/s3"`
    - Document `iamActionCatalog` availability via main entry or `@beesolve/iam-policy-ts/_meta`
    - Add migration guide listing removed exports: `iam`, `iamAction`, `IamHelperObject`
    - _Requirements: 10.1, 10.2, 10.3, 10.4_

- [ ] 9. Final checkpoint - Full verification
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- The project uses TypeScript 6+, Node.js 24+, ESM-only, and the Node.js built-in test runner
- The generator script runs with `node --experimental-strip-types` (implied by Node 24+)

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["1.2", "1.3", "1.4", "1.5"] },
    { "id": 2, "tasks": ["2.1"] },
    { "id": 3, "tasks": ["2.2", "2.3", "2.4", "2.5", "2.6"] },
    { "id": 4, "tasks": ["4.1", "4.2", "4.3", "5.1"] },
    { "id": 5, "tasks": ["4.4", "4.5", "5.2", "5.3", "5.4"] },
    { "id": 6, "tasks": ["7.1"] },
    { "id": 7, "tasks": ["7.2"] },
    { "id": 8, "tasks": ["7.3"] },
    { "id": 9, "tasks": ["8.1"] }
  ]
}
```
