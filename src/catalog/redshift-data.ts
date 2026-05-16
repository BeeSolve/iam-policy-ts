export const redshiftDataActions = [
  "BatchExecuteStatement",
  "CancelStatement",
  "DescribeStatement",
  "DescribeTable",
  "ExecuteStatement",
  "GetStagingBucketLocation",
  "GetStatementResult",
  "ListDatabases",
  "ListSchemas",
  "ListStatements",
  "ListTables",
] as const;

export type RedshiftDataAction = (typeof redshiftDataActions)[number];

export function redshiftData(action: RedshiftDataAction | "*"): `redshift-data:${RedshiftDataAction | "*"}` {
  return `redshift-data:${action}` as `redshift-data:${RedshiftDataAction | "*"}`;
}
