# @beesolve/iam-policy-ts

Type-safe IAM policy helpers with an auto-generated action catalog from AWS.

Provides full autocomplete for all AWS IAM actions when writing inline policies in TypeScript.

## Installation

```bash
npm install @beesolve/iam-policy-ts
```

## Usage

### IAM Action Helpers

```typescript
import { iam, iamAction } from "@beesolve/iam-policy-ts";

// Per-service helper with autocomplete
iam.s3("GetObject");                          // "s3:GetObject"
iam.organizations("ListAccounts");            // "organizations:ListAccounts"
iam["sso-directory"]("SearchUsers");          // "sso-directory:SearchUsers"

// Lower-level function
iamAction("s3", "GetObject");                 // "s3:GetObject"
```

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

// Output uses iam.* helpers for known actions:
// {
//   Version: "2012-10-17",
//   Statement: [
//     {
//       Effect: "Allow",
//       Action: [
//         iam.s3("GetObject"),
//         iam.s3("ListBucket")
//       ],
//       Resource: "*"
//     }
//   ]
// }
```

### Access the Raw Catalog

```typescript
import {
  iamActionCatalog,
  iamActionCatalogSourceSha256,
  iamActionCatalogActionCount,
} from "@beesolve/iam-policy-ts";

// iamActionCatalog is a typed const object:
// { s3: ["AbortMultipartUpload", ...], kms: ["CancelKeyDeletion", ...], ... }

console.log(`${iamActionCatalogActionCount} actions across ${Object.keys(iamActionCatalog).length} services`);
```

## Updating the Catalog

The catalog is updated automatically by a daily GitHub Actions workflow that runs at 02:00 UTC. It fetches the latest IAM action data from AWS, and if changes are detected, commits the update and publishes a new version to npm.

You can also run `npm run generate` locally to regenerate `src/catalog.ts`.

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
- `IamPolicyServicePrefix`
- `IamPolicyActionNameByService<TService>`
- `IamPolicyActionForService<TService>`

## FAQ

### Does this validate that IAM actions actually exist in AWS?

No. The schema validation (`isIamPolicyDocument`, `assertIamPolicyDocument`, etc.) checks structural shape only — correct field types, allowed keys, non-empty strings. It does not verify that an action string like `"s3:GetObject"` corresponds to a real AWS action. The `iam.*` helpers provide compile-time autocomplete from the catalog, but the schema layer is intentionally decoupled from it.

### What's the difference between permissive and strict validation?

Permissive (default) validates JSON structure: correct types, no unknown keys, non-empty values. It mirrors what AWS accepts at the API level.

Strict additionally enforces IAM grammar rules: a statement must have exactly one of `Action` or `NotAction`, and cannot have both `Resource` and `NotResource`. Use strict mode when you want to catch logical errors before deployment.

### Can I use wildcard actions like `s3:*`?

Yes. The `iam.*` helpers accept `"*"` as a valid action name:

```ts
iam.s3("*")  // "s3:*"
```

The schema layer also accepts any non-empty string in `Action`/`NotAction`, so wildcards like `"s3:Get*"` pass validation.

### How often is the action catalog updated?

A daily GitHub Actions workflow runs at 02:00 UTC. It fetches the latest data from the [AWS policy generator](https://awspolicygen.s3.amazonaws.com/js/policies.js), and if the catalog has changed, commits the update and publishes a new version to npm. No release is created when nothing changes.

### What's the source of the action catalog?

The catalog is derived from `https://awspolicygen.s3.amazonaws.com/js/policies.js` — the same source that powers the AWS Policy Generator console. The SHA-256 hash of the source file is recorded in `iamActionCatalogSourceSha256` for reproducibility.

### Does this package make network calls at runtime?

No. The catalog is generated at build time and shipped as a static TypeScript const object. There are zero runtime network calls.

### Does this work with CDK / Pulumi / SST / Terraform CDK?

Yes. The helpers produce plain strings (`"s3:GetObject"`) and the schema functions accept/return plain objects. They integrate anywhere you construct IAM policy JSON in TypeScript — CDK inline policies, Pulumi policy documents, SST permissions, or Terraform CDK constructs.

### What Node.js and TypeScript versions are supported?

Node.js 24+ and TypeScript 6+. The package is ESM-only (`"type": "module"`).

### Is the catalog tree-shakeable?

Partially. The package uses named exports, so bundlers can drop unused schema or render code. However, `iamActionCatalog` and the `iam` helper object reference the full catalog — if you import either, the entire catalog is included. In practice the catalog is ~200 KB of static data and compresses well.

### How do I regenerate the catalog locally?

```bash
npm run generate
```

This runs `scripts/generate-catalog.ts`, fetches the latest AWS source, and overwrites `src/catalog.ts`.

## License

MIT
