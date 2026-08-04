export const timestreamInfluxdbActions = [
  "CreateDbBackup",
  "CreateDbCluster",
  "CreateDbInstance",
  "CreateDbParameterGroup",
  "DeleteDbBackup",
  "DeleteDbCluster",
  "DeleteDbInstance",
  "GetDbBackup",
  "GetDbCluster",
  "GetDbInstance",
  "GetDbParameterGroup",
  "ListDbBackups",
  "ListDbClusters",
  "ListDbInstances",
  "ListDbInstancesForCluster",
  "ListDbParameterGroups",
  "ListTagsForResource",
  "RebootDbCluster",
  "RebootDbInstance",
  "RestoreFromDbBackup",
  "TagResource",
  "UntagResource",
  "UpdateDbCluster",
  "UpdateDbInstance",
] as const;

export type TimestreamInfluxdbAction = (typeof timestreamInfluxdbActions)[number];

export function timestreamInfluxdb(action: TimestreamInfluxdbAction | "*"): `timestream-influxdb:${TimestreamInfluxdbAction | "*"}` {
  return `timestream-influxdb:${action}` as `timestream-influxdb:${TimestreamInfluxdbAction | "*"}`;
}
