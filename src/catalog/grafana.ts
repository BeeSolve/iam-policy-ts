export const grafanaActions = [
  "AssociateLicense",
  "CreateWorkspace",
  "CreateWorkspaceApiKey",
  "CreateWorkspaceServiceAccount",
  "CreateWorkspaceServiceAccountToken",
  "DeleteWorkspace",
  "DeleteWorkspaceApiKey",
  "DeleteWorkspaceServiceAccount",
  "DeleteWorkspaceServiceAccountToken",
  "DescribeWorkspace",
  "DescribeWorkspaceAuthentication",
  "DescribeWorkspaceConfiguration",
  "DisassociateLicense",
  "ListPermissions",
  "ListTagsForResource",
  "ListVersions",
  "ListWorkspaces",
  "ListWorkspaceServiceAccounts",
  "ListWorkspaceServiceAccountTokens",
  "TagResource",
  "UntagResource",
  "UpdatePermissions",
  "UpdateWorkspace",
  "UpdateWorkspaceAuthentication",
  "UpdateWorkspaceConfiguration",
] as const;

export type GrafanaAction = (typeof grafanaActions)[number];

export function grafana(action: GrafanaAction | "*"): `grafana:${GrafanaAction | "*"}` {
  return `grafana:${action}` as `grafana:${GrafanaAction | "*"}`;
}
