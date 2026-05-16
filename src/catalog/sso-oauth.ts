export const ssoOauthActions = [
  "CreateTokenWithIAM",
  "IntrospectTokenWithIAM",
  "RevokeTokenWithIAM",
] as const;

export type SsoOauthAction = (typeof ssoOauthActions)[number];

export function ssoOauth(action: SsoOauthAction | "*"): `sso-oauth:${SsoOauthAction | "*"}` {
  return `sso-oauth:${action}` as `sso-oauth:${SsoOauthAction | "*"}`;
}
