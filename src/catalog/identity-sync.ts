export const identitySyncActions = [
  "AllowVendedLogDeliveryForResource",
  "CreateSyncFilter",
  "CreateSyncProfile",
  "CreateSyncTarget",
  "DeleteSyncFilter",
  "DeleteSyncProfile",
  "DeleteSyncTarget",
  "GetSyncProfile",
  "GetSyncTarget",
  "ListSyncFilters",
  "StartSync",
  "StopSync",
  "UpdateSyncTarget",
] as const;

export type IdentitySyncAction = (typeof identitySyncActions)[number];

export function identitySync(action: IdentitySyncAction | "*"): `identity-sync:${IdentitySyncAction | "*"}` {
  return `identity-sync:${action}` as `identity-sync:${IdentitySyncAction | "*"}`;
}
