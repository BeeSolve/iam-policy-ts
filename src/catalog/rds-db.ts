export const rdsDbActions = [
  "connect",
] as const;

export type RdsDbAction = (typeof rdsDbActions)[number];

export function rdsDb(action: RdsDbAction | "*"): `rds-db:${RdsDbAction | "*"}` {
  return `rds-db:${action}` as `rds-db:${RdsDbAction | "*"}`;
}
