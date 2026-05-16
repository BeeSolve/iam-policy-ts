export const monitronActions = [
  "AssociateProjectAdminUser",
  "CreateProject",
  "CreateProjectUserAssociation",
  "CreateUserAccessRoleAssociation",
  "DeleteProject",
  "DeleteProjectUserAssociation",
  "DeleteUserAccessRoleAssociation",
  "DisassociateProjectAdminUser",
  "GetProject",
  "GetProjectAdminUser",
  "ListProjectAdminUsers",
  "ListProjects",
  "ListProjectUserAssociations",
  "ListTagsForResource",
  "ListUserAccessRoleAssociations",
  "TagResource",
  "UntagResource",
  "UpdateProject",
] as const;

export type MonitronAction = (typeof monitronActions)[number];

export function monitron(action: MonitronAction | "*"): `monitron:${MonitronAction | "*"}` {
  return `monitron:${action}` as `monitron:${MonitronAction | "*"}`;
}
