import assert from "node:assert/strict";
import test from "node:test";
import { policyToTypescript } from "./render.js";
import type { IamPolicyDocument } from "./schema.js";

test("policyToTypescript renders known actions with iam helpers", () => {
  const policy: IamPolicyDocument = {
    Version: "2012-10-17",
    Statement: [
      {
        Effect: "Allow",
        Action: ["s3:GetObject", "s3:ListBucket"],
        Resource: "*",
      },
    ],
  };

  const result = policyToTypescript(policy);
  assert.ok(result.includes('iam.s3("GetObject")'));
  assert.ok(result.includes('iam.s3("ListBucket")'));
  assert.ok(result.includes('"2012-10-17"'));
  assert.ok(result.includes('"Allow"'));
  assert.ok(result.includes('"*"'));
});

test("policyToTypescript renders unknown actions as plain strings", () => {
  const policy: IamPolicyDocument = {
    Statement: [
      {
        Effect: "Allow",
        Action: "custom:DoSomething",
        Resource: "*",
      },
    ],
  };

  const result = policyToTypescript(policy);
  assert.ok(result.includes('"custom:DoSomething"'));
  assert.ok(!result.includes("iam.custom"));
});

test("policyToTypescript renders hyphenated service with bracket notation", () => {
  const policy: IamPolicyDocument = {
    Statement: [
      {
        Effect: "Allow",
        Action: "access-analyzer:ListAnalyzers",
        Resource: "*",
      },
    ],
  };

  const result = policyToTypescript(policy);
  assert.ok(result.includes('iam["access-analyzer"]("ListAnalyzers")'));
});

test("policyToTypescript renders NotAction with iam helpers", () => {
  const policy: IamPolicyDocument = {
    Statement: [
      {
        Effect: "Deny",
        NotAction: ["s3:GetObject"],
        Resource: "*",
      },
    ],
  };

  const result = policyToTypescript(policy);
  assert.ok(result.includes('iam.s3("GetObject")'));
});

test("policyToTypescript renders Condition block", () => {
  const policy: IamPolicyDocument = {
    Version: "2012-10-17",
    Statement: [
      {
        Effect: "Allow",
        Action: "s3:GetObject",
        Resource: "*",
        Condition: {
          StringEquals: {
            "aws:RequestedRegion": ["eu-central-1"],
          },
        },
      },
    ],
  };

  const result = policyToTypescript(policy);
  assert.ok(result.includes("Condition"));
  assert.ok(result.includes("StringEquals"));
  assert.ok(result.includes('"aws:RequestedRegion"'));
  assert.ok(result.includes('"eu-central-1"'));
});

test("policyToTypescript respects indentLevel option", () => {
  const policy: IamPolicyDocument = {
    Statement: [
      {
        Effect: "Allow",
        Action: "s3:GetObject",
        Resource: "*",
      },
    ],
  };

  const result = policyToTypescript(policy, { indentLevel: 2 });
  // The top-level object should start with indentation at level 2
  // Children at level 3 = 6 spaces
  assert.ok(result.includes("      Effect"));
});

test("policyToTypescript handles actions without colon as plain strings", () => {
  const policy: IamPolicyDocument = {
    Statement: [
      {
        Effect: "Allow",
        Action: "noColonAction",
        Resource: "*",
      },
    ],
  };

  const result = policyToTypescript(policy);
  assert.ok(result.includes('"noColonAction"'));
});
