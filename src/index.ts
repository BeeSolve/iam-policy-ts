export * from "./catalog/index.js";

export {
  iamPolicyDocumentSchema,
  iamPolicyStatementSchema,
  iamPolicyDocumentStrictSchema,
  iamPolicyStatementStrictSchema,
  isIamPolicyDocument,
  isIamPolicyStatement,
  isIamPolicyDocumentStrict,
  isIamPolicyStatementStrict,
  assertIamPolicyDocument,
  assertIamPolicyStatement,
  assertIamPolicyDocumentStrict,
  type IamPolicyVersion,
  type IamPolicyScalar,
  type IamPolicyScalarList,
  type IamPolicyStringList,
  type IamPolicyPrincipalMap,
  type IamPolicyPrincipal,
  type IamPolicyConditionBlock,
  type IamPolicyStatement,
  type IamPolicyDocument,
  type IamPolicyStatementStrict,
  type IamPolicyDocumentStrict,
} from "./schema.js";

export { policyToTypescript } from "./render.js";
