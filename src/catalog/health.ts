export const healthActions = [
  "DescribeAffectedAccountsForOrganization",
  "DescribeAffectedEntities",
  "DescribeAffectedEntitiesForOrganization",
  "DescribeEntityAggregates",
  "DescribeEntityAggregatesForOrganization",
  "DescribeEventAggregates",
  "DescribeEventDetails",
  "DescribeEventDetailsForOrganization",
  "DescribeEvents",
  "DescribeEventsForOrganization",
  "DescribeEventTypes",
  "DescribeHealthServiceStatusForOrganization",
  "DisableHealthServiceAccessForOrganization",
  "EnableHealthServiceAccessForOrganization",
] as const;

export type HealthAction = (typeof healthActions)[number];

export function health(action: HealthAction | "*"): `health:${HealthAction | "*"}` {
  return `health:${action}` as `health:${HealthAction | "*"}`;
}
