# Requirements Document

## Introduction

The Catalog Publisher is an automated daily publishing pipeline for the `@beesolve/iam-policy-ts` npm package. It uses two GitHub Actions workflows: the Update_Catalog_Workflow fetches the upstream AWS IAM policy catalog daily, detects changes via `git diff`, and commits updated source to main; the Publish_Workflow is then triggered to test, build, and publish the package using npm trusted publishing (OIDC provenance). No AWS infrastructure or stored npm tokens are required.

## Glossary

- **Update_Catalog_Workflow**: The GitHub Actions workflow file (`.github/workflows/update-catalog.yml`) responsible for fetching the catalog, detecting changes, committing to main, and triggering the Publish_Workflow.
- **Publish_Workflow**: The GitHub Actions workflow file (`.github/workflows/publish.yml`) responsible for testing, building, versioning, and publishing the package to npm.
- **Catalog_Source**: The upstream AWS IAM policy catalog hosted at `https://awspolicygen.s3.amazonaws.com/js/policies.js`.
- **Normalized_Catalog**: The structured representation of the IAM catalog after parsing `app.PolicyEditorConfig`, extracting service prefixes and actions, deduplicating, and sorting — produced by `npm run generate` and written to `src/catalog.ts`.
- **Trusted_Publishing**: npm's OIDC-based authentication mechanism where GitHub Actions receives a short-lived publish token automatically, configured by linking the GitHub repository to the npm package on npmjs.com. No npm tokens are stored or rotated.
- **Date_Version**: A version string in `YYYY-MM-DD` format representing the UTC date of publication (e.g., `2025-07-14`).
- **Provenance**: npm supply-chain attestation enabled via the `--provenance` flag, linking the published package to its source commit and build workflow.
- **GitHub_CLI**: The `gh` command-line tool, pre-installed on GitHub Actions runners, used to trigger workflow_dispatch events on other workflows.

## Requirements

### Requirement 1: Update Catalog Workflow Trigger

**User Story:** As a package maintainer, I want the catalog update workflow to run automatically every day at midnight UTC, so that the package stays current with upstream AWS catalog changes without manual intervention.

#### Acceptance Criteria

1. THE Update_Catalog_Workflow SHALL define a `schedule` trigger with a cron expression that runs once daily at 00:00 UTC (cron: `0 0 * * *`).
2. THE Update_Catalog_Workflow SHALL define a `workflow_dispatch` trigger so that maintainers can invoke the workflow manually from the GitHub Actions UI.
3. THE Update_Catalog_Workflow SHALL run on the `ubuntu-latest` runner image.
4. THE Update_Catalog_Workflow SHALL use Node.js version 24 consistent with the `engines` field in `package.json`.

### Requirement 2: Update Catalog Workflow Permissions

**User Story:** As a package maintainer, I want the update catalog workflow to have write access to repository contents, so that it can commit catalog changes and push to main.

#### Acceptance Criteria

1. THE Update_Catalog_Workflow SHALL declare a top-level `permissions` block that includes `contents: write` to allow pushing commits to the main branch.
2. THE Update_Catalog_Workflow SHALL NOT declare any permissions beyond `contents: write` in the `permissions` block.

### Requirement 3: Catalog Fetching and Normalization

**User Story:** As a package maintainer, I want the update workflow to fetch and normalize the latest IAM policy catalog using the existing generate script, so that the same proven logic is reused without duplication.

#### Acceptance Criteria

1. WHEN the Update_Catalog_Workflow executes, THE Update_Catalog_Workflow SHALL check out the repository source code.
2. WHEN the Update_Catalog_Workflow executes, THE Update_Catalog_Workflow SHALL perform a clean install of npm dependencies from the lockfile to ensure reproducible builds.
3. WHEN the Update_Catalog_Workflow executes, THE Update_Catalog_Workflow SHALL run `npm run generate` to fetch the Catalog_Source and produce the Normalized_Catalog in `src/catalog.ts`.
4. IF `npm run generate` exits with a non-zero exit code, THEN THE Update_Catalog_Workflow SHALL fail the workflow run.

### Requirement 4: Change Detection via Git Diff

**User Story:** As a package maintainer, I want the workflow to detect catalog changes by checking if `src/catalog.ts` was modified, so that unnecessary commits and publishes are avoided.

#### Acceptance Criteria

1. WHEN `npm run generate` completes successfully, THE Update_Catalog_Workflow SHALL run `git diff --exit-code src/catalog.ts` to determine whether the file content changed.
2. WHEN `git diff --exit-code src/catalog.ts` exits with code 0 (no changes), THE Update_Catalog_Workflow SHALL skip the commit and publish trigger steps and exit the workflow successfully.
3. WHEN `git diff --exit-code src/catalog.ts` exits with code 1 (changes detected), THE Update_Catalog_Workflow SHALL proceed to the commit and publish trigger steps.
4. IF `git diff` exits with a code other than 0 or 1 (e.g., 128 for fatal git errors), THEN THE Update_Catalog_Workflow SHALL fail the workflow run.

### Requirement 5: Commit and Push Catalog Changes

**User Story:** As a package maintainer, I want catalog changes committed and pushed to main automatically, so that the repository always reflects the latest published catalog state.

#### Acceptance Criteria

1. WHEN changes to `src/catalog.ts` are detected, THE Update_Catalog_Workflow SHALL configure git with a bot user identity using `github-actions[bot]` as the committer name and `41898282+github-actions[bot]@users.noreply.github.com` as the committer email.
2. WHEN changes to `src/catalog.ts` are detected, THE Update_Catalog_Workflow SHALL stage only `src/catalog.ts` for commit.
3. WHEN changes to `src/catalog.ts` are detected, THE Update_Catalog_Workflow SHALL create a commit with the message `chore: update catalog`.
4. WHEN changes to `src/catalog.ts` are detected, THE Update_Catalog_Workflow SHALL push the commit to the main branch.
5. IF the git push to the main branch exits with a non-zero exit code, THEN THE Update_Catalog_Workflow SHALL fail the workflow run.

### Requirement 6: Trigger Publish Workflow

**User Story:** As a package maintainer, I want the update catalog workflow to trigger the publish workflow after pushing changes, so that the new catalog is automatically published without relying on push-triggered workflows.

#### Acceptance Criteria

1. WHEN the commit is pushed to main, THE Update_Catalog_Workflow SHALL trigger the Publish_Workflow via `workflow_dispatch` using the GitHub_CLI command `gh workflow run publish.yml`.
2. THE Update_Catalog_Workflow SHALL authenticate the GitHub_CLI using the default `GITHUB_TOKEN` provided by the GitHub Actions runtime (via the `GH_TOKEN` environment variable) so that no additional secrets or personal access tokens are required.
3. IF the GitHub_CLI command to trigger the Publish_Workflow exits with a non-zero exit code, THEN THE Update_Catalog_Workflow SHALL fail the workflow run.

### Requirement 7: Publish Workflow Trigger

**User Story:** As a package maintainer, I want the publish workflow triggered only via workflow_dispatch, so that it runs after catalog updates and can also be triggered manually for republishing after code fixes.

#### Acceptance Criteria

1. THE Publish_Workflow SHALL define a `workflow_dispatch` trigger as its only trigger mechanism.
2. THE Publish_Workflow SHALL be manually triggerable from the GitHub Actions UI for cases where republishing is needed (e.g., after fixing `helpers.ts` or `schema.ts`).
3. THE Publish_Workflow SHALL run on the `ubuntu-latest` runner image.
4. THE Publish_Workflow SHALL use Node.js version 24 consistent with the `engines` field in `package.json`.

### Requirement 8: Publish Workflow Permissions

**User Story:** As a package maintainer, I want the publish workflow to request only the minimum permissions needed for OIDC publishing, so that the principle of least privilege is maintained.

#### Acceptance Criteria

1. THE Publish_Workflow SHALL declare a top-level `permissions` block that includes `id-token: write` to enable OIDC token exchange with npm.
2. THE Publish_Workflow SHALL declare `contents: read` in the `permissions` block to allow repository checkout.
3. THE Publish_Workflow SHALL NOT declare any permissions beyond `id-token: write` and `contents: read` in the `permissions` block.

### Requirement 9: Test Execution

**User Story:** As a package maintainer, I want the publish workflow to run the test suite before publishing, so that broken code is never published to npm.

#### Acceptance Criteria

1. WHEN the Publish_Workflow executes, THE Publish_Workflow SHALL check out the repository source code.
2. WHEN the Publish_Workflow executes, THE Publish_Workflow SHALL perform a clean install of npm dependencies from the lockfile.
3. WHEN the Publish_Workflow executes, THE Publish_Workflow SHALL run `npm test`.
4. IF `npm test` exits with a non-zero exit code, THEN THE Publish_Workflow SHALL fail the workflow run and skip all subsequent steps including publishing.

### Requirement 10: Package Build

**User Story:** As a package maintainer, I want the publish workflow to compile the TypeScript source into distributable JavaScript and type declarations, so that the published package is ready for consumption.

#### Acceptance Criteria

1. WHEN tests pass, THE Publish_Workflow SHALL run `npm run build` to compile the TypeScript source into JavaScript files and type declaration files in the `dist/` directory.
2. IF `npm run build` exits with a non-zero exit code, THEN THE Publish_Workflow SHALL fail the workflow run and skip publishing.

### Requirement 11: Date-Based Versioning

**User Story:** As a package maintainer, I want the package version set to the current UTC date before publishing, so that consumers can identify when the catalog data was captured.

#### Acceptance Criteria

1. WHEN the build completes successfully, THE Publish_Workflow SHALL set the `version` field in `package.json` to the current UTC date in `YYYY-MM-DD` format (e.g., `2025-07-14`).
2. THE Publish_Workflow SHALL use a command equivalent to `npm version <date> --no-git-tag-version` to update the version without creating a git tag or commit.
3. IF the version command exits with a non-zero exit code, THEN THE Publish_Workflow SHALL fail the workflow run and skip publishing.

### Requirement 12: npm Publish with Trusted Publishing

**User Story:** As a package maintainer, I want the package published using npm trusted publishing with OIDC provenance, so that no long-lived npm tokens need to be stored, rotated, or managed.

#### Acceptance Criteria

1. WHEN the version is set, THE Publish_Workflow SHALL configure the npm registry URL to `https://registry.npmjs.org/`.
2. WHEN the registry URL is configured, THE Publish_Workflow SHALL run `npm publish --provenance --access public` to publish the package with supply-chain attestation.
3. THE Publish_Workflow SHALL NOT use any stored npm token secret — authentication is handled entirely via the OIDC token provided by the GitHub Actions runtime to npm.
4. IF `npm publish` exits with a non-zero exit code, THEN THE Publish_Workflow SHALL fail the workflow run and report the exit code in the workflow log.

### Requirement 13: Workflow File Locations

**User Story:** As a package maintainer, I want the workflows defined as standard GitHub Actions YAML files in the repository, so that they are version-controlled and follow GitHub conventions.

#### Acceptance Criteria

1. THE Update_Catalog_Workflow SHALL be defined in a file at `.github/workflows/update-catalog.yml` in the repository root.
2. THE Publish_Workflow SHALL be defined in a file at `.github/workflows/publish.yml` in the repository root.
3. THE Update_Catalog_Workflow SHALL define a single job that executes all steps sequentially: checkout, setup Node.js, install dependencies, generate catalog, detect changes, commit, push, and trigger publish.
4. THE Publish_Workflow SHALL define a single job that executes all steps sequentially: checkout, setup Node.js, install dependencies, run tests, build, set version, and publish.

### Requirement 14: npm Trusted Publishing Configuration

**User Story:** As a package maintainer, I want clear documentation of the npmjs.com trusted publishing configuration required for this workflow, so that the OIDC trust relationship can be established correctly.

#### Acceptance Criteria

1. THE Publish_Workflow file SHALL include a comment documenting that the npm package `@beesolve/iam-policy-ts` must be configured on npmjs.com to trust the GitHub repository `beesolve/iam-policy-ts` for publishing via OIDC.
2. THE Publish_Workflow file SHALL include a comment documenting that the trusted publishing configuration on npmjs.com must specify the workflow filename `publish.yml`.
3. THE Publish_Workflow file SHALL include a comment documenting that no GitHub Actions environment is required (the environment field on npmjs.com should be left empty).
