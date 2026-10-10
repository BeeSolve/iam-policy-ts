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
  "GetPrimaryEmailUpdateStatus",
  "GetRegionOptStatus",
  "ListRegions",
  "PutAccountName",
  "PutAlternateContact",
  "PutContactInformation",
  "ReopenAccount",
  "SendPhoneNumberVerification",
  "StartPrimaryEmailUpdate",
  "VerifyPhoneNumber",
] as const;

export type AccountAction = (typeof accountActions)[number];

export function account(action: AccountAction | "*"): `account:${AccountAction | "*"}` {
  return `account:${action}` as `account:${AccountAction | "*"}`;
}
