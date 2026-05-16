export const identitystoreActions = [
  "AddRegion",
  "CreateGroup",
  "CreateGroupMembership",
  "CreateIdentityStore",
  "CreateUser",
  "DeleteGroup",
  "DeleteGroupMembership",
  "DeleteIdentityStore",
  "DeleteUser",
  "DescribeGroup",
  "DescribeGroupMembership",
  "DescribeRegion",
  "DescribeUser",
  "GetGroupId",
  "GetGroupMembershipId",
  "GetUserId",
  "IsMemberInGroups",
  "ListGroupMemberships",
  "ListGroupMembershipsForMember",
  "ListGroups",
  "ListRegions",
  "ListUsers",
  "RemoveRegion",
  "ReserveUser",
  "UpdateGroup",
  "UpdateIdentityStore",
  "UpdateUser",
] as const;

export type IdentitystoreAction = (typeof identitystoreActions)[number];

export function identitystore(action: IdentitystoreAction | "*"): `identitystore:${IdentitystoreAction | "*"}` {
  return `identitystore:${action}` as `identitystore:${IdentitystoreAction | "*"}`;
}
