export const verifiedpermissionsActions = [
  "CreateIdentitySource",
  "CreatePolicy",
  "CreatePolicyStore",
  "CreatePolicyStoreAlias",
  "CreatePolicyTemplate",
  "DeleteIdentitySource",
  "DeletePolicy",
  "DeletePolicyStore",
  "DeletePolicyStoreAlias",
  "DeletePolicyTemplate",
  "GetIdentitySource",
  "GetPolicy",
  "GetPolicyStore",
  "GetPolicyStoreAlias",
  "GetPolicyTemplate",
  "GetSchema",
  "IsAuthorized",
  "IsAuthorizedWithToken",
  "ListIdentitySources",
  "ListPolicies",
  "ListPolicyStoreAliases",
  "ListPolicyStores",
  "ListPolicyTemplates",
  "ListTagsForResource",
  "PutSchema",
  "TagResource",
  "UntagResource",
  "UpdateIdentitySource",
  "UpdatePolicy",
  "UpdatePolicyStore",
  "UpdatePolicyTemplate",
] as const;

export type VerifiedpermissionsAction = (typeof verifiedpermissionsActions)[number];

export function verifiedpermissions(action: VerifiedpermissionsAction | "*"): `verifiedpermissions:${VerifiedpermissionsAction | "*"}` {
  return `verifiedpermissions:${action}` as `verifiedpermissions:${VerifiedpermissionsAction | "*"}`;
}
