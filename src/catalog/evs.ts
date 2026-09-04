export const evsActions = [
  "AssociateEipToVlan",
  "CreateEntitlement",
  "CreateEnvironment",
  "CreateEnvironmentConnector",
  "CreateEnvironmentHost",
  "DeleteEntitlement",
  "DeleteEnvironment",
  "DeleteEnvironmentConnector",
  "DeleteEnvironmentHost",
  "DisassociateEipFromVlan",
  "GetAccountSettings",
  "GetDepotUrl",
  "GetEnvironment",
  "GetVersions",
  "ListEnvironmentConnectors",
  "ListEnvironmentHosts",
  "ListEnvironments",
  "ListEnvironmentVlans",
  "ListTagsForResource",
  "ListVmEntitlements",
  "PutAccountSettings",
  "TagResource",
  "UntagResource",
  "UpdateEnvironmentConnector",
] as const;

export type EvsAction = (typeof evsActions)[number];

export function evs(action: EvsAction | "*"): `evs:${EvsAction | "*"}` {
  return `evs:${action}` as `evs:${EvsAction | "*"}`;
}
