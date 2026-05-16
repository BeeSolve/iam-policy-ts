export const snowballActions = [
  "CancelCluster",
  "CancelJob",
  "CreateAddress",
  "CreateCluster",
  "CreateJob",
  "CreateLongTermPricing",
  "CreateReturnShippingLabel",
  "DescribeAddress",
  "DescribeAddresses",
  "DescribeCluster",
  "DescribeJob",
  "DescribeReturnShippingLabel",
  "GetJobManifest",
  "GetJobUnlockCode",
  "GetSnowballUsage",
  "GetSoftwareUpdates",
  "ListClusterJobs",
  "ListClusters",
  "ListCompatibleImages",
  "ListJobs",
  "ListLongTermPricing",
  "ListPickupLocations",
  "ListServiceVersions",
  "UpdateCluster",
  "UpdateJob",
  "UpdateJobShipmentState",
  "UpdateLongTermPricing",
] as const;

export type SnowballAction = (typeof snowballActions)[number];

export function snowball(action: SnowballAction | "*"): `snowball:${SnowballAction | "*"}` {
  return `snowball:${action}` as `snowball:${SnowballAction | "*"}`;
}
