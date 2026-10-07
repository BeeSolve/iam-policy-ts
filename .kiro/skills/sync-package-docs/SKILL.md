---
name: sync-package-docs
description: Keep this package's agentic documentation (DOCS.md + docs/how-to/ guides) in sync with the code. Use when the public API changes (exports, schemas, validation helpers, render output), when a how-to guide is added or renamed, or before publishing. Internal to the @beesolve/iam-policy-ts repo.
---

## Overview

This is the `@beesolve/iam-policy-ts` binding for the generic `agentic-package-docs` skill. The method, the non-negotiable rules, the DOCS.md / how-to templates, and the sync procedure all live in that user-level skill - **read and follow it.** This file only supplies the concrete values for THIS repo. Where the two overlap, these repo-specific values win.

## Repo-Specific Bindings

Substitute these into the generic skill's placeholders:

- **Scope / package name:** `@beesolve/iam-policy-ts` (the npm name equals the scope - there is no separate directory name).
- **Repo URL / branch:** `https://github.com/BeeSolve/iam-policy-ts`, branch `main`. Mind the org casing: `BeeSolve`.
- **Install command:** `npm install` (this repo uses npm; the lockfile is `package-lock.json`).
- **Layout:** single published package. Docs live at the repo ROOT (`DOCS.md`, `docs/how-to/`), not under a `packages/*` subdirectory. Links use `https://github.com/BeeSolve/iam-policy-ts/tree/main`.
- **No examples directory.** There is no sample package to link, so OMIT the Working Examples table from DOCS.md. Do not fabricate one.
- **No ADRs / design docs.** There is no `docs/adr-*` or design-doc folder, so omit any ADR link in Further Reading.
- **No CHANGELOG file in the repo.** Link GitHub Releases (`https://github.com/BeeSolve/iam-policy-ts/releases`) in Further Reading instead of a `./CHANGELOG.md`.

## Public API Surface (verify against source before editing docs)

Read these for the real exported names - source is truth over any stale doc:

- `src/index.ts` - the barrel: re-exports the full action catalog plus the schema and render exports below.
- `src/schema.ts` - schemas `iamPolicyDocumentSchema`, `iamPolicyStatementSchema`, `iamPolicyDocumentStrictSchema`, `iamPolicyStatementStrictSchema`; guards `isIamPolicyDocument` / `isIamPolicyStatement` / strict variants; asserts `assertIamPolicyDocument` / `assertIamPolicyStatement` / strict variants; and the `IamPolicy*` types.
- `src/render.ts` - `policyToTypescript`.
- `src/catalog/` - the AUTO-GENERATED action catalog (per-service functions like `s3`, subpath exports like `@beesolve/iam-policy-ts/s3`, and `_meta`). Describe the pattern; never enumerate the ~450 services, and never hand-edit these files.

## Publish Mechanism (this repo)

Packaging is controlled by the `files` array in `package.json` (no `.npmignore`). It must include:

```json
"files": ["dist", "!dist/**/*.js.map", "DOCS.md", "docs/how-to"]
```

Ship `DOCS.md` and `docs/how-to` only. Never add the whole `docs` folder. There are no internal design docs to keep out today - if ADRs or bug notes are added later, keep them out of `files`.

## Verification Gates (this repo)

Run after any docs or packaging change:

```bash
npm run typecheck
npm test
npm pack --dry-run
```

There is NO lint or format tooling in this repo (no oxfmt/oxlint/biome, no `check` script) - do not invent one.

The pack output must include `DOCS.md` and `docs/how-to/*.md`, and must NOT include any internal design docs (there are none at present).

## Interaction With Other Repo Workflows

- **No changesets.** This repo has no changeset workflow; `prepack` runs `npm run generate && npm run build`. Do NOT create a changeset for a docs change.
- **Catalog regeneration** (`npm run generate`) rewrites `src/catalog/`. Docs describe that catalog as a generated pattern, so routine regeneration does not require doc edits unless the authored API in `index.ts` / `schema.ts` / `render.ts` changes.

## Repo Audit

```bash
grep -L "Keywords:" DOCS.md                      # expect nothing
grep -L "matches the installed version" DOCS.md  # expect nothing
grep -l "Coming soon" DOCS.md                    # expect nothing
```

## Scope Note

Internal tooling for `@beesolve/iam-policy-ts`. Not published to npm, not referenced from the package README.
