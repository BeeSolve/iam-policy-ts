export const dsDataActions = [
  "AddGroupMember",
  "CreateGroup",
  "CreateUser",
  "DeleteGroup",
  "DeleteUser",
  "DescribeGroup",
  "DescribeUser",
  "DisableUser",
  "ListGroupMembers",
  "ListGroups",
  "ListGroupsForMember",
  "ListUsers",
  "RemoveGroupMember",
  "SearchGroups",
  "SearchUsers",
  "UpdateGroup",
  "UpdateUser",
] as const;

export type DsDataAction = (typeof dsDataActions)[number];

export function dsData(action: DsDataAction | "*"): `ds-data:${DsDataAction | "*"}` {
  return `ds-data:${action}` as `ds-data:${DsDataAction | "*"}`;
}
