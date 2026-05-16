export const dsqlActions = [
  "AddPeerCluster",
  "CreateCluster",
  "CreateStream",
  "DbConnect",
  "DbConnectAdmin",
  "DeleteCluster",
  "DeleteClusterPolicy",
  "DeleteStream",
  "GetBackupJob",
  "GetCluster",
  "GetClusterPolicy",
  "GetRestoreJob",
  "GetStream",
  "GetVpcEndpointServiceName",
  "InjectError",
  "ListClusters",
  "ListStreams",
  "ListTagsForResource",
  "PutClusterPolicy",
  "PutMultiRegionProperties",
  "PutWitnessRegion",
  "RemovePeerCluster",
  "StartBackupJob",
  "StartRestoreJob",
  "StopBackupJob",
  "StopRestoreJob",
  "TagResource",
  "UntagResource",
  "UpdateCluster",
  "UpdateStream",
] as const;

export type DsqlAction = (typeof dsqlActions)[number];

export function dsql(action: DsqlAction | "*"): `dsql:${DsqlAction | "*"}` {
  return `dsql:${action}` as `dsql:${DsqlAction | "*"}`;
}
