export const vendorInsightsActions = [
  "ActivateSecurityProfile",
  "AssociateDataSource",
  "CreateDataSource",
  "CreateSecurityProfile",
  "DeactivateSecurityProfile",
  "DeleteDataSource",
  "DisassociateDataSource",
  "GetDataSource",
  "GetEntitledSecurityProfileSnapshot",
  "GetProfileAccessTerms",
  "GetSecurityProfile",
  "GetSecurityProfileSnapshot",
  "ListDataSources",
  "ListEntitledSecurityProfiles",
  "ListEntitledSecurityProfileSnapshots",
  "ListSecurityProfiles",
  "ListSecurityProfileSnapshots",
  "ListTagsForResource",
  "TagResource",
  "UntagResource",
  "UpdateDataSource",
  "UpdateSecurityProfile",
  "UpdateSecurityProfileSnapshotCreationConfiguration",
  "UpdateSecurityProfileSnapshotReleaseConfiguration",
] as const;

export type VendorInsightsAction = (typeof vendorInsightsActions)[number];

export function vendorInsights(action: VendorInsightsAction | "*"): `vendor-insights:${VendorInsightsAction | "*"}` {
  return `vendor-insights:${action}` as `vendor-insights:${VendorInsightsAction | "*"}`;
}
