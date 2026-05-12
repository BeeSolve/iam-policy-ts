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

Run `npm run generate` to fetch the latest IAM action data from AWS and regenerate `src/catalog.ts`.

The plan is to automate this via a daily Lambda function that publishes new versions when the upstream data changes (see `extracting-package-plan.md` in the parent repo for details). That automation is not yet implemented.

## Versioning

Once automated publishing is set up, this package will use date-based versions (`YYYY-MM-DD`). A new version will be published daily only when the upstream AWS IAM action catalog changes.

Source: https://awspolicygen.s3.amazonaws.com/js/policies.js

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

## License

MIT
