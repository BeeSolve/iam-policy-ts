export const rdsDataActions = [
  "BatchExecuteStatement",
  "BeginTransaction",
  "CommitTransaction",
  "ExecuteSql",
  "ExecuteStatement",
  "RollbackTransaction",
] as const;

export type RdsDataAction = (typeof rdsDataActions)[number];

export function rdsData(action: RdsDataAction | "*"): `rds-data:${RdsDataAction | "*"}` {
  return `rds-data:${action}` as `rds-data:${RdsDataAction | "*"}`;
}
