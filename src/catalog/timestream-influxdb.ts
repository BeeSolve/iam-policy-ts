export const timestreamInfluxdbActions = [
  "CreateDbCluster",
  "CreateDbInstance",
  "CreateDbParameterGroup",
  "DeleteDbCluster",
  "DeleteDbInstance",
  "GetDbCluster",
  "GetDbInstance",
  "GetDbParameterGroup",
  "ListDbClusters",
  "ListDbInstances",
  "ListDbInstancesForCluster",
  "ListDbParameterGroups",
  "ListTagsForResource",
  "RebootDbCluster",
  "RebootDbInstance",
  "TagResource",
  "UntagResource",
  "UpdateDbCluster",
  "UpdateDbInstance",
] as const;

export type TimestreamInfluxdbAction = (typeof timestreamInfluxdbActions)[number];

export function timestreamInfluxdb(action: TimestreamInfluxdbAction | "*"): `timestream-influxdb:${TimestreamInfluxdbAction | "*"}` {
  return `timestream-influxdb:${action}` as `timestream-influxdb:${TimestreamInfluxdbAction | "*"}`;
}
