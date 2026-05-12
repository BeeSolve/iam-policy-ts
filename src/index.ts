export {
  iamActionCatalog,
  iamActionCatalogSourceUrl,
  iamActionCatalogSourceSha256,
  iamActionCatalogActionCount,
  iam,
} from "./catalog.js";

export {
  iamAction,
  type IamActionCatalog,
  type IamPolicyServicePrefix,
  type IamPolicyActionNameByService,
  type IamPolicyActionForService,
  type IamHelperObject,
} from "./helpers.js";

export {
  iamPolicyDocumentSchema,
  iamPolicyStatementSchema,
  iamPolicyDocumentStrictSchema,
  iamPolicyStatementStrictSchema,
  isIamPolicyDocument,
  isIamPolicyStatement,
  isIamPolicyDocumentStrict,
  assertIamPolicyDocument,
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
