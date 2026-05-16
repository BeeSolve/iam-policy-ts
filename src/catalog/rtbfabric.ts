export const rtbfabricActions = [
  "AcceptLink",
  "AssociateCertificate",
  "CreateInboundExternalLink",
  "CreateLink",
  "CreateLinkRoutingRule",
  "CreateOutboundExternalLink",
  "CreateRequesterGateway",
  "CreateResponderGateway",
  "DeleteInboundExternalLink",
  "DeleteLink",
  "DeleteLinkRoutingRule",
  "DeleteOutboundExternalLink",
  "DeleteRequesterGateway",
  "DeleteResponderGateway",
  "DisassociateCertificate",
  "GetCertificateAssociation",
  "GetInboundExternalLink",
  "GetLink",
  "GetLinkRoutingRule",
  "GetOutboundExternalLink",
  "GetRequesterGateway",
  "GetResponderGateway",
  "ListCertificateAssociations",
  "ListLinkRoutingRules",
  "ListLinks",
  "ListRequesterGateways",
  "ListResponderGateways",
  "ListTagsForResource",
  "RejectLink",
  "TagResource",
  "UntagResource",
  "UpdateLink",
  "UpdateLinkModuleFlow",
  "UpdateLinkRoutingRule",
  "UpdateRequesterGateway",
  "UpdateResponderGateway",
] as const;

export type RtbfabricAction = (typeof rtbfabricActions)[number];

export function rtbfabric(action: RtbfabricAction | "*"): `rtbfabric:${RtbfabricAction | "*"}` {
  return `rtbfabric:${action}` as `rtbfabric:${RtbfabricAction | "*"}`;
}
