export const ramActions = [
  "AcceptResourceShareInvitation",
  "AssociateResourceShare",
  "AssociateResourceSharePermission",
  "CreatePermission",
  "CreatePermissionVersion",
  "CreateResourceShare",
  "DeletePermission",
  "DeletePermissionVersion",
  "DeleteResourceShare",
  "DisassociateResourceShare",
  "DisassociateResourceSharePermission",
  "EnableSharingWithAwsOrganization",
  "GetPermission",
  "GetResourcePolicies",
  "GetResourceShareAssociations",
  "GetResourceShareInvitations",
  "GetResourceShares",
  "ListPendingInvitationResources",
  "ListPermissionAssociations",
  "ListPermissions",
  "ListPermissionVersions",
  "ListPrincipals",
  "ListReplacePermissionAssociationsWork",
  "ListResources",
  "ListResourceSharePermissions",
  "ListResourceTypes",
  "ListSourceAssociations",
  "PromotePermissionCreatedFromPolicy",
  "PromoteResourceShareCreatedFromPolicy",
  "RejectResourceShareInvitation",
  "ReplacePermissionAssociations",
  "SetDefaultPermissionVersion",
  "TagResource",
  "UntagResource",
  "UpdateResourceShare",
] as const;

export type RamAction = (typeof ramActions)[number];

export function ram(action: RamAction | "*"): `ram:${RamAction | "*"}` {
  return `ram:${action}` as `ram:${RamAction | "*"}`;
}
