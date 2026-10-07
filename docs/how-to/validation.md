# How to: Validate IAM Policies

> Full source: https://github.com/BeeSolve/iam-policy-ts/tree/main

The package ships two validation modes. Both validate structural shape; strict
additionally enforces IAM grammar rules.

## Prerequisites

- `@beesolve/iam-policy-ts` installed (see [Getting Started](./getting-started.md))

## Permissive validation (default)

Permissive validation checks JSON structure only: correct field types, allowed
keys, and non-empty values. It mirrors what AWS accepts at the API level and does
not enforce grammar rules like `Action`/`NotAction` exclusivity.

```ts
import {
  isIamPolicyDocument,
  assertIamPolicyDocument,
  iamPolicyDocumentSchema,
} from "@beesolve/iam-policy-ts";

if (isIamPolicyDocument(input)) {
  // input is narrowed to IamPolicyDocument
}

const policy = assertIamPolicyDocument(input);
```

`iamPolicyDocumentSchema` and `iamPolicyStatementSchema` are the underlying
valibot schemas if you need to compose or parse directly.

## Strict validation

Strict validation additionally enforces IAM grammar: a statement must have exactly
one of `Action` or `NotAction`, and cannot have both `Resource` and `NotResource`.
Use it to catch logical errors before deployment.

```ts
import {
  isIamPolicyDocumentStrict,
  assertIamPolicyDocumentStrict,
  iamPolicyDocumentStrictSchema,
} from "@beesolve/iam-policy-ts";

if (isIamPolicyDocumentStrict(input)) {
  // passes strict grammar checks
}

const policy = assertIamPolicyDocumentStrict(input);
```

Statement-level helpers mirror the document helpers: `isIamPolicyStatement`,
`assertIamPolicyStatement`, `isIamPolicyStatementStrict`, and the schemas
`iamPolicyStatementSchema` / `iamPolicyStatementStrictSchema`.

## Common Pitfalls

- The `assert*` helpers throw a valibot `ValiError` on invalid input; the `is*` helpers return a boolean and narrow the type.
- Strict rules are enforced at runtime only. `IamPolicyStatementStrict` is structurally identical to `IamPolicyStatement` at the TypeScript level, so compile-time narrowing does not catch exclusivity violations.
- Neither mode verifies that an action string corresponds to a real AWS action.

## See Also

- [Getting Started](./getting-started.md)
- [README](../../README.md)
