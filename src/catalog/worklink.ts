export const worklinkActions = [
  "AssociateDomain",
  "AssociateWebsiteAuthorizationProvider",
  "AssociateWebsiteCertificateAuthority",
  "CreateFleet",
  "DeleteFleet",
  "DescribeAuditStreamConfiguration",
  "DescribeCompanyNetworkConfiguration",
  "DescribeDevice",
  "DescribeDevicePolicyConfiguration",
  "DescribeDomain",
  "DescribeFleetMetadata",
  "DescribeIdentityProviderConfiguration",
  "DescribeWebsiteCertificateAuthority",
  "DisassociateDomain",
  "DisassociateWebsiteAuthorizationProvider",
  "DisassociateWebsiteCertificateAuthority",
  "ListDevices",
  "ListDomains",
  "ListFleets",
  "ListTagsForResource",
  "ListWebsiteAuthorizationProviders",
  "ListWebsiteCertificateAuthorities",
  "RestoreDomainAccess",
  "RevokeDomainAccess",
  "SearchEntity",
  "SignOutUser",
  "TagResource",
  "UntagResource",
  "UpdateAuditStreamConfiguration",
  "UpdateCompanyNetworkConfiguration",
  "UpdateDevicePolicyConfiguration",
  "UpdateDomainMetadata",
  "UpdateFleetMetadata",
  "UpdateIdentityProviderConfiguration",
] as const;

export type WorklinkAction = (typeof worklinkActions)[number];

export function worklink(action: WorklinkAction | "*"): `worklink:${WorklinkAction | "*"}` {
  return `worklink:${action}` as `worklink:${WorklinkAction | "*"}`;
}
