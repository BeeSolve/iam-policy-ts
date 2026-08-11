export const accountAccessActions = [
  "CreateApplication",
  "CreateEntitlement",
  "DeleteApplication",
  "DeleteEntitlement",
  "GetApplication",
  "GetEntitlement",
  "ListApplications",
  "ListEntitlements",
  "ListTagsForResource",
  "TagResource",
  "UntagResource",
] as const;

export type AccountAccessAction = (typeof accountAccessActions)[number];

export function accountAccess(action: AccountAccessAction | "*"): `account-access:${AccountAccessAction | "*"}` {
  return `account-access:${action}` as `account-access:${AccountAccessAction | "*"}`;
}
