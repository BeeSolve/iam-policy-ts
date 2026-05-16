export const resourceExplorerActions = [
  "ListResources",
  "ListResourceTypes",
  "ListTags",
] as const;

export type ResourceExplorerAction = (typeof resourceExplorerActions)[number];

export function resourceExplorer(action: ResourceExplorerAction | "*"): `resource-explorer:${ResourceExplorerAction | "*"}` {
  return `resource-explorer:${action}` as `resource-explorer:${ResourceExplorerAction | "*"}`;
}
