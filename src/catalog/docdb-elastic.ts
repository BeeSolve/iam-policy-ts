export const docdbElasticActions = [
  "ApplyPendingMaintenanceAction",
  "CopyClusterSnapshot",
  "CreateCluster",
  "CreateClusterSnapshot",
  "DeleteCluster",
  "DeleteClusterSnapshot",
  "GetCluster",
  "GetClusterSnapshot",
  "GetPendingMaintenanceAction",
  "ListClusters",
  "ListClusterSnapshots",
  "ListPendingMaintenanceActions",
  "ListTagsForResource",
  "RestoreClusterFromSnapshot",
  "StartCluster",
  "StopCluster",
  "TagResource",
  "UntagResource",
  "UpdateCluster",
] as const;

export type DocdbElasticAction = (typeof docdbElasticActions)[number];

export function docdbElastic(action: DocdbElasticAction | "*"): `docdb-elastic:${DocdbElasticAction | "*"}` {
  return `docdb-elastic:${action}` as `docdb-elastic:${DocdbElasticAction | "*"}`;
}
