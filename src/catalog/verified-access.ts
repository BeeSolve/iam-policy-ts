export const verifiedAccessActions = [
  "AllowVerifiedAccess",
] as const;

export type VerifiedAccessAction = (typeof verifiedAccessActions)[number];

export function verifiedAccess(action: VerifiedAccessAction | "*"): `verified-access:${VerifiedAccessAction | "*"}` {
  return `verified-access:${action}` as `verified-access:${VerifiedAccessAction | "*"}`;
}
