export const freetierActions = [
  "GetAccountActivity",
  "GetAccountPlanState",
  "GetFreeTierAlertPreference",
  "GetFreeTierUsage",
  "ListAccountActivities",
  "PutFreeTierAlertPreference",
  "UpgradeAccountPlan",
] as const;

export type FreetierAction = (typeof freetierActions)[number];

export function freetier(action: FreetierAction | "*"): `freetier:${FreetierAction | "*"}` {
  return `freetier:${action}` as `freetier:${FreetierAction | "*"}`;
}
