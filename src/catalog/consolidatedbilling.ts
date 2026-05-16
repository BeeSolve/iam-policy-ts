export const consolidatedbillingActions = [
  "GetAccountBillingRole",
  "ListLinkedAccounts",
] as const;

export type ConsolidatedbillingAction = (typeof consolidatedbillingActions)[number];

export function consolidatedbilling(action: ConsolidatedbillingAction | "*"): `consolidatedbilling:${ConsolidatedbillingAction | "*"}` {
  return `consolidatedbilling:${action}` as `consolidatedbilling:${ConsolidatedbillingAction | "*"}`;
}
