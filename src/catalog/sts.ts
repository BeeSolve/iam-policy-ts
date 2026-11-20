export const stsActions = [
  "AssumeRole",
  "AssumeRoleWithSAML",
  "AssumeRoleWithWebIdentity",
  "AssumeRoot",
  "DecodeAuthorizationMessage",
  "GetAccessKeyInfo",
  "GetCallerIdentity",
  "GetDelegatedAccessToken",
  "GetFederationToken",
  "GetScopedCredentials",
  "GetServiceBearerToken",
  "GetSessionToken",
  "GetWebIdentityToken",
  "SetContext",
  "SetSourceIdentity",
  "SetWebIdentityTokenScope",
  "TagGetWebIdentityToken",
  "TagSession",
] as const;

export type StsAction = (typeof stsActions)[number];

export function sts(action: StsAction | "*"): `sts:${StsAction | "*"}` {
  return `sts:${action}` as `sts:${StsAction | "*"}`;
}
