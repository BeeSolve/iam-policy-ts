export const identitystoreAuthActions = [
  "BatchDeleteSession",
  "BatchGetSession",
  "ListSessions",
] as const;

export type IdentitystoreAuthAction = (typeof identitystoreAuthActions)[number];

export function identitystoreAuth(action: IdentitystoreAuthAction | "*"): `identitystore-auth:${IdentitystoreAuthAction | "*"}` {
  return `identitystore-auth:${action}` as `identitystore-auth:${IdentitystoreAuthAction | "*"}`;
}
