import assert from "node:assert/strict";
import test from "node:test";
import { iamAction } from "./helpers.js";
import { iam } from "./catalog.js";

test("iamAction returns fully qualified action string", () => {
  const result = iamAction("s3", "GetObject");
  assert.equal(result, "s3:GetObject");
});

test("iamAction works with hyphenated service prefixes", () => {
  const result = iamAction("access-analyzer", "ListAnalyzers");
  assert.equal(result, "access-analyzer:ListAnalyzers");
});

test("iam helper returns fully qualified action string", () => {
  const result = iam.s3("GetObject");
  assert.equal(result, "s3:GetObject");
});

test("iam helper works with bracket notation for hyphenated prefixes", () => {
  const result = iam["access-analyzer"]("ListAnalyzers");
  assert.equal(result, "access-analyzer:ListAnalyzers");
});

test("iam helper works with various services", () => {
  assert.equal(iam.kms("Decrypt"), "kms:Decrypt");
  assert.equal(iam.organizations("ListAccounts"), "organizations:ListAccounts");
  assert.equal(
    iam.identitystore("CreateGroupMembership"),
    "identitystore:CreateGroupMembership",
  );
});

test("iam is a plain object with normal behavior", () => {
  assert.equal(String(iam), "[object Object]");
  assert.equal(typeof iam, "object");
});
