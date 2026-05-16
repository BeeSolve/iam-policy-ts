export const codecatalystActions = [
  "AcceptConnection",
  "AssociateIamRoleToConnection",
  "AssociateIdentityCenterApplicationToSpace",
  "AssociateIdentityToIdentityCenterApplication",
  "BatchAssociateIdentitiesToIdentityCenterApplication",
  "BatchDisassociateIdentitiesFromIdentityCenterApplication",
  "CreateIdentityCenterApplication",
  "CreateSpace",
  "CreateSpaceAdminRoleAssignment",
  "DeleteConnection",
  "DeleteIdentityCenterApplication",
  "DisassociateIamRoleFromConnection",
  "DisassociateIdentityCenterApplicationFromSpace",
  "DisassociateIdentityFromIdentityCenterApplication",
  "GetBillingAuthorization",
  "GetConnection",
  "GetIdentityCenterApplication",
  "GetPendingConnection",
  "ListConnections",
  "ListIamRolesForConnection",
  "ListIdentityCenterApplications",
  "ListIdentityCenterApplicationsForSpace",
  "ListSpacesForIdentityCenterApplication",
  "ListTagsForResource",
  "PutBillingAuthorization",
  "RejectConnection",
  "SynchronizeIdentityCenterApplication",
  "TagResource",
  "UntagResource",
  "UpdateIdentityCenterApplication",
] as const;

export type CodecatalystAction = (typeof codecatalystActions)[number];

export function codecatalyst(action: CodecatalystAction | "*"): `codecatalyst:${CodecatalystAction | "*"}` {
  return `codecatalyst:${action}` as `codecatalyst:${CodecatalystAction | "*"}`;
}
