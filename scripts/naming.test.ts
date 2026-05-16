import assert from "node:assert/strict";
import test from "node:test";
import { prefixToCamelCase, prefixToPascalCase } from "./naming.ts";

test("prefixToCamelCase returns simple prefix unchanged", () => {
  assert.equal(prefixToCamelCase("s3"), "s3");
});

test("prefixToCamelCase converts single-hyphen prefix to camelCase", () => {
  assert.equal(prefixToCamelCase("access-analyzer"), "accessAnalyzer");
});

test("prefixToCamelCase converts multi-hyphen prefix to camelCase", () => {
  assert.equal(prefixToCamelCase("acm-pca"), "acmPca");
});

test("prefixToCamelCase handles numeric prefix unchanged", () => {
  assert.equal(prefixToCamelCase("s3"), "s3");
});

test("prefixToPascalCase converts simple prefix to PascalCase", () => {
  assert.equal(prefixToPascalCase("s3"), "S3");
});

test("prefixToPascalCase converts single-hyphen prefix to PascalCase", () => {
  assert.equal(prefixToPascalCase("access-analyzer"), "AccessAnalyzer");
});

test("prefixToPascalCase converts multi-hyphen prefix to PascalCase", () => {
  assert.equal(prefixToPascalCase("acm-pca"), "AcmPca");
});

test("prefixToPascalCase handles numeric prefix", () => {
  assert.equal(prefixToPascalCase("s3"), "S3");
});
