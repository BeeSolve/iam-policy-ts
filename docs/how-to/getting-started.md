# How to: Get Started

> Full source: https://github.com/BeeSolve/iam-policy-ts/tree/main

## Prerequisites

- Node.js 24+ and TypeScript 6+ (the package is ESM-only)

## Steps

### 1. Install

```sh
npm install @beesolve/iam-policy-ts
```

### 2. Build a typed policy with the action catalog

Import per-service functions via their subpath. Each returns the prefixed action
string with full autocomplete over that service's actions.

```ts
import { s3 } from "@beesolve/iam-policy-ts/s3";
import type { IamPolicyDocument } from "@beesolve/iam-policy-ts";

const policy: IamPolicyDocument = {
  Version: "2012-10-17",
  Statement: [
    {
      Effect: "Allow",
      Action: [s3("GetObject"), s3("ListBucket")],
      Resource: "*",
    },
  ],
};
```

### 3. Validate the policy

```ts
import { isIamPolicyDocument, assertIamPolicyDocument } from "@beesolve/iam-policy-ts";

if (isIamPolicyDocument(policy)) {
  // policy is narrowed to IamPolicyDocument
}

const checked = assertIamPolicyDocument(policy);
```

### 4. Render a policy as TypeScript source

```ts
import { policyToTypescript } from "@beesolve/iam-policy-ts";

const source = policyToTypescript({
  Version: "2012-10-17",
  Statement: [{ Effect: "Allow", Action: ["s3:GetObject"], Resource: "*" }],
});
```

Known `Action`/`NotAction` strings render as per-service calls such as `s3("GetObject")`;
unknown actions fall back to plain string literals.

## Common Pitfalls

- Subpath function names use camelCase for hyphenated prefixes: `access-analyzer` is imported from `@beesolve/iam-policy-ts/access-analyzer` as `accessAnalyzer`.
- Validation checks structural shape only; it does not confirm an action exists in AWS.

## See Also

- [Validation](./validation.md)
- [README](../../README.md)
