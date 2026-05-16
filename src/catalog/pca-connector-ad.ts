export const pcaConnectorAdActions = [
  "CreateConnector",
  "CreateDirectoryRegistration",
  "CreateServicePrincipalName",
  "CreateTemplate",
  "CreateTemplateGroupAccessControlEntry",
  "DeleteConnector",
  "DeleteDirectoryRegistration",
  "DeleteServicePrincipalName",
  "DeleteTemplate",
  "DeleteTemplateGroupAccessControlEntry",
  "GetConnector",
  "GetDirectoryRegistration",
  "GetServicePrincipalName",
  "GetTemplate",
  "GetTemplateGroupAccessControlEntry",
  "ListConnectors",
  "ListDirectoryRegistrations",
  "ListServicePrincipalNames",
  "ListTagsForResource",
  "ListTemplateGroupAccessControlEntries",
  "ListTemplates",
  "TagResource",
  "UntagResource",
  "UpdateTemplate",
  "UpdateTemplateGroupAccessControlEntry",
] as const;

export type PcaConnectorAdAction = (typeof pcaConnectorAdActions)[number];

export function pcaConnectorAd(action: PcaConnectorAdAction | "*"): `pca-connector-ad:${PcaConnectorAdAction | "*"}` {
  return `pca-connector-ad:${action}` as `pca-connector-ad:${PcaConnectorAdAction | "*"}`;
}
