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
  "GetServiceBearerToken",
  "GetSessionToken",
  "GetWebIdentityToken",
  "SetContext",
  "SetSourceIdentity",
  "TagGetWebIdentityToken",
  "TagSession",
] as const;

export type StsAction = (typeof stsActions)[number];

export function sts(action: StsAction | "*"): `sts:${StsAction | "*"}` {
  return `sts:${action}` as `sts:${StsAction | "*"}`;
}
