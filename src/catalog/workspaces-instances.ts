export const workspacesInstancesActions = [
  "AssociateVolume",
  "CreateVolume",
  "CreateWorkspaceInstance",
  "DeleteVolume",
  "DeleteWorkspaceInstance",
  "DisassociateVolume",
  "GetWorkspaceInstance",
  "ListInstanceTypes",
  "ListRegions",
  "ListTagsForResource",
  "ListWorkspaceInstances",
  "TagResource",
  "UntagResource",
] as const;

export type WorkspacesInstancesAction = (typeof workspacesInstancesActions)[number];

export function workspacesInstances(action: WorkspacesInstancesAction | "*"): `workspaces-instances:${WorkspacesInstancesAction | "*"}` {
  return `workspaces-instances:${action}` as `workspaces-instances:${WorkspacesInstancesAction | "*"}`;
}
