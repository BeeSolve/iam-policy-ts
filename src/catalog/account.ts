export const accountActions = [
  "AcceptPrimaryEmailUpdate",
  "CloseAccount",
  "DeleteAlternateContact",
  "DisableRegion",
  "EnableRegion",
  "GetAccountInformation",
  "GetAlternateContact",
  "GetContactInformation",
  "GetGovCloudAccountInformation",
  "GetPrimaryEmail",
  "GetRegionOptStatus",
  "ListRegions",
  "PutAccountName",
  "PutAlternateContact",
  "PutContactInformation",
  "StartPrimaryEmailUpdate",
] as const;

export type AccountAction = (typeof accountActions)[number];

export function account(action: AccountAction | "*"): `account:${AccountAction | "*"}` {
  return `account:${action}` as `account:${AccountAction | "*"}`;
}
