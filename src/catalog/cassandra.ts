export const cassandraActions = [
  "Alter",
  "AlterMultiRegionResource",
  "Create",
  "CreateMultiRegionResource",
  "Drop",
  "DropMultiRegionResource",
  "GetRecords",
  "GetShardIterator",
  "GetStream",
  "ListStreams",
  "Modify",
  "ModifyMultiRegionResource",
  "Restore",
  "RestoreMultiRegionTable",
  "Select",
  "SelectMultiRegionResource",
  "TagMultiRegionResource",
  "TagResource",
  "UnTagMultiRegionResource",
  "UntagResource",
  "UpdatePartitioner",
] as const;

export type CassandraAction = (typeof cassandraActions)[number];

export function cassandra(action: CassandraAction | "*"): `cassandra:${CassandraAction | "*"}` {
  return `cassandra:${action}` as `cassandra:${CassandraAction | "*"}`;
}
