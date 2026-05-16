export const cognitoIdentityActions = [
  "CreateIdentityPool",
  "DeleteIdentities",
  "DeleteIdentityPool",
  "DescribeIdentity",
  "DescribeIdentityPool",
  "GetCredentialsForIdentity",
  "GetId",
  "GetIdentityPoolAnalytics",
  "GetIdentityPoolDailyAnalytics",
  "GetIdentityPoolRoles",
  "GetIdentityProviderDailyAnalytics",
  "GetOpenIdToken",
  "GetOpenIdTokenForDeveloperIdentity",
  "GetPrincipalTagAttributeMap",
  "ListIdentities",
  "ListIdentityPools",
  "ListTagsForResource",
  "LookupDeveloperIdentity",
  "MergeDeveloperIdentities",
  "SetIdentityPoolRoles",
  "SetPrincipalTagAttributeMap",
  "TagResource",
  "UnlinkDeveloperIdentity",
  "UnlinkIdentity",
  "UntagResource",
  "UpdateIdentityPool",
] as const;

export type CognitoIdentityAction = (typeof cognitoIdentityActions)[number];

export function cognitoIdentity(action: CognitoIdentityAction | "*"): `cognito-identity:${CognitoIdentityAction | "*"}` {
  return `cognito-identity:${action}` as `cognito-identity:${CognitoIdentityAction | "*"}`;
}
