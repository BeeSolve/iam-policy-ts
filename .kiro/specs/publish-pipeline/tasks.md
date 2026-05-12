# Implementation Plan: Catalog Publisher

## Overview

Create two GitHub Actions workflow YAML files that automate daily catalog updates and npm publishing. The update-catalog workflow fetches the upstream AWS IAM catalog, detects changes, commits to main, and triggers the publish workflow. The publish workflow runs tests, builds, sets a date-based version, and publishes with npm trusted publishing (OIDC + provenance).

## Tasks

- [x] 1. Create the Update Catalog workflow
  - [x] 1.1 Create `.github/workflows/update-catalog.yml` with triggers, permissions, and all steps
    - Define `schedule` trigger with cron `0 0 * * *` and `workflow_dispatch` trigger
    - Set `permissions: contents: write`
    - Single job `update` on `ubuntu-latest`
    - Steps: checkout (`actions/checkout@v4`), setup Node.js 24 (`actions/setup-node@v4`), `npm ci`, `npm run generate`
    - Change detection step using `git diff --exit-code src/catalog.ts` with step output variable (`changed=true`/`changed=false`)
    - Conditional steps (only when changes detected): configure git user (`github-actions[bot]` / `41898282+github-actions[bot]@users.noreply.github.com`), `git add src/catalog.ts`, `git commit -m "chore: update catalog"`, `git push`
    - Conditional step: trigger publish via `gh workflow run publish.yml` with `GH_TOKEN` env var set to `${{ github.token }}`
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 2.1, 2.2, 3.1, 3.2, 3.3, 3.4, 4.1, 4.2, 4.3, 4.4, 5.1, 5.2, 5.3, 5.4, 5.5, 6.1, 6.2, 6.3, 13.1, 13.3_

- [x] 2. Create the Publish workflow
  - [x] 2.1 Create `.github/workflows/publish.yml` with triggers, permissions, trusted publishing comments, and all steps
    - Define `workflow_dispatch` as the only trigger
    - Set `permissions: id-token: write` and `contents: read`
    - Add comments documenting trusted publishing configuration: package `@beesolve/iam-policy-ts` must trust repository `beesolve/iam-policy-ts`, workflow `publish.yml`, no environment required
    - Single job `publish` on `ubuntu-latest`
    - Steps: checkout (`actions/checkout@v4`), setup Node.js 24 with `registry-url: https://registry.npmjs.org` (`actions/setup-node@v4`), `npm ci`
    - Step: `npm test` (failure stops workflow)
    - Step: `npm run build` (failure stops workflow)
    - Step: set version with `npm version "$(date -u +'%-y.%-m.%-d')" --no-git-tag-version`
    - Step: `npm publish --provenance --access public`
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 8.1, 8.2, 8.3, 9.1, 9.2, 9.3, 9.4, 10.1, 10.2, 11.1, 11.2, 11.3, 12.1, 12.2, 12.3, 12.4, 13.2, 13.4, 14.1, 14.2, 14.3_

- [x] 3. Final checkpoint
  - Verify both YAML files are syntactically valid. Ensure all tests pass, ask the user if questions arise.

## Notes

- No property-based tests are applicable — deliverables are declarative YAML configuration with no runtime code
- Both workflow files are independent and can be created in parallel
- The version format uses `YY.M.D` (e.g., `25.7.14`) which is valid semver, as specified in the design
- Trusted publishing requires one-time manual setup on npmjs.com (not a coding task)
- No changes to existing package source code are required

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "2.1"] }
  ]
}
```
