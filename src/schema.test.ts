import assert from "node:assert/strict";
import test from "node:test";
import {
  assertIamPolicyDocument,
  assertIamPolicyStatement,
  isIamPolicyDocument,
  isIamPolicyStatement,
} from "./schema.js";

test("isIamPolicyDocument accepts a valid AWS IAM policy document", () => {
  const policy = {
    Version: "2012-10-17",
    Statement: [
      {
        Sid: "ReadOnly",
        Effect: "Allow",
        Action: ["s3:GetObject", "s3:ListBucket"],
        Resource: "*",
        Condition: {
          StringEquals: {
            "aws:RequestedRegion": ["eu-central-1"],
          },
        },
      },
    ],
  };

  assert.equal(isIamPolicyDocument(policy), true);
  assert.equal(isIamPolicyStatement(policy.Statement[0]), true);
  assert.deepEqual(assertIamPolicyDocument(policy), policy);
});

test("isIamPolicyDocument accepts a single statement (not array)", () => {
  const policy = {
    Version: "2012-10-17",
    Statement: {
      Effect: "Deny",
      Action: "s3:*",
      Resource: "*",
    },
  };

  assert.equal(isIamPolicyDocument(policy), true);
});

test("isIamPolicyDocument accepts policy with Principal", () => {
  const policy = {
    Statement: [
      {
        Effect: "Allow",
        Action: "sts:AssumeRole",
        Principal: {
          AWS: ["arn:aws:iam::123456789012:root"],
        },
        Resource: "*",
      },
    ],
  };

  assert.equal(isIamPolicyDocument(policy), true);
});

test("isIamPolicyDocument accepts wildcard principal", () => {
  const policy = {
    Statement: [
      {
        Effect: "Allow",
        Action: "s3:GetObject",
        Principal: "*",
        Resource: "arn:aws:s3:::my-bucket/*",
      },
    ],
  };

  assert.equal(isIamPolicyDocument(policy), true);
});

test("isIamPolicyDocument rejects invalid Effect value", () => {
  assert.equal(
    isIamPolicyDocument({
      Version: "2012-10-17",
      Statement: {
        Effect: "Permit",
        Action: "s3:GetObject",
        Resource: "*",
      },
    }),
    false,
  );
});

test("isIamPolicyDocument rejects missing Statement", () => {
  assert.equal(
    isIamPolicyDocument({
      Version: "2012-10-17",
    }),
    false,
  );
});

test("isIamPolicyDocument rejects unknown top-level keys", () => {
  assert.equal(
    isIamPolicyDocument({
      Version: "2012-10-17",
      Statement: [{ Effect: "Allow", Action: "s3:*", Resource: "*" }],
      Extra: "not-allowed",
    }),
    false,
  );
});

test("assertIamPolicyDocument throws on invalid input", () => {
  assert.throws(() =>
    assertIamPolicyDocument({
      Statement: {
        Effect: "Permit",
      },
    }),
  );
});

test("isIamPolicyStatement rejects an invalid statement", () => {
  assert.equal(isIamPolicyStatement({ Effect: "Bad" }), false);
  assert.equal(isIamPolicyStatement(null), false);
  assert.equal(isIamPolicyStatement("string"), false);
});

test("assertIamPolicyStatement throws on invalid input", () => {
  assert.throws(() => assertIamPolicyStatement({ Effect: "Bad" }));
});

test("isIamPolicyDocument accepts policy with NotPrincipal", () => {
  const policy = {
    Statement: [
      {
        Effect: "Deny",
        Action: "s3:GetObject",
        NotPrincipal: { AWS: ["arn:aws:iam::123456789012:root"] },
        Resource: "*",
      },
    ],
  };
  assert.equal(isIamPolicyDocument(policy), true);
});

test("isIamPolicyDocument accepts Version 2008-10-17", () => {
  const policy = {
    Version: "2008-10-17",
    Statement: [{ Effect: "Allow", Action: "s3:GetObject", Resource: "*" }],
  };
  assert.equal(isIamPolicyDocument(policy), true);
});

test("isIamPolicyDocument accepts Id field", () => {
  const policy = {
    Id: "my-policy-id",
    Version: "2012-10-17",
    Statement: [{ Effect: "Allow", Action: "s3:GetObject", Resource: "*" }],
  };
  assert.equal(isIamPolicyDocument(policy), true);
});

import {
  isIamPolicyDocumentStrict,
  isIamPolicyStatementStrict,
  assertIamPolicyDocumentStrict,
} from "./schema.js";

test("strict: accepts valid statement with Action and Resource", () => {
  assert.equal(
    isIamPolicyDocumentStrict({
      Version: "2012-10-17",
      Statement: [
        {
          Effect: "Allow",
          Action: "s3:GetObject",
          Resource: "*",
        },
      ],
    }),
    true,
  );
});

test("strict: accepts valid statement with NotAction", () => {
  assert.equal(
    isIamPolicyDocumentStrict({
      Statement: {
        Effect: "Deny",
        NotAction: "s3:DeleteObject",
        Resource: "*",
      },
    }),
    true,
  );
});

test("strict: accepts statement with Action but no Resource (resource-based policy)", () => {
  assert.equal(
    isIamPolicyDocumentStrict({
      Statement: {
        Effect: "Allow",
        Action: "s3:GetObject",
        Principal: "*",
      },
    }),
    true,
  );
});

test("strict: rejects statement with no Action and no NotAction", () => {
  assert.equal(
    isIamPolicyDocumentStrict({
      Statement: {
        Effect: "Allow",
        Resource: "*",
      },
    }),
    false,
  );
});

test("strict: rejects statement with both Action and NotAction", () => {
  assert.equal(
    isIamPolicyDocumentStrict({
      Statement: {
        Effect: "Allow",
        Action: "s3:GetObject",
        NotAction: "s3:DeleteObject",
        Resource: "*",
      },
    }),
    false,
  );
});

test("strict: rejects statement with both Resource and NotResource", () => {
  assert.equal(
    isIamPolicyDocumentStrict({
      Statement: {
        Effect: "Allow",
        Action: "s3:GetObject",
        Resource: "*",
        NotResource: "*",
      },
    }),
    false,
  );
});

test("strict: isIamPolicyStatementStrict accepts a valid statement", () => {
  assert.equal(
    isIamPolicyStatementStrict({ Effect: "Allow", Action: "s3:GetObject", Resource: "*" }),
    true,
  );
});

test("strict: isIamPolicyStatementStrict rejects statement with no Action/NotAction", () => {
  assert.equal(
    isIamPolicyStatementStrict({ Effect: "Allow", Resource: "*" }),
    false,
  );
});

test("strict: assertIamPolicyDocumentStrict throws on invalid grammar", () => {
  assert.throws(
    () =>
      assertIamPolicyDocumentStrict({
        Statement: {
          Effect: "Allow",
          Resource: "*",
        },
      }),
    /Action or NotAction/,
  );
});
