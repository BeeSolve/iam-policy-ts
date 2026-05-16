export const codestarActions = [
  "AssociateTeamMember",
  "CreateProject",
  "CreateUserProfile",
  "DeleteExtendedAccess",
  "DeleteProject",
  "DeleteUserProfile",
  "DescribeProject",
  "DescribeUserProfile",
  "DisassociateTeamMember",
  "GetExtendedAccess",
  "ListProjects",
  "ListResources",
  "ListTagsForProject",
  "ListTeamMembers",
  "ListUserProfiles",
  "PutExtendedAccess",
  "TagProject",
  "UntagProject",
  "UpdateProject",
  "UpdateTeamMember",
  "UpdateUserProfile",
  "VerifyServiceRole",
] as const;

export type CodestarAction = (typeof codestarActions)[number];

export function codestar(action: CodestarAction | "*"): `codestar:${CodestarAction | "*"}` {
  return `codestar:${action}` as `codestar:${CodestarAction | "*"}`;
}
