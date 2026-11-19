export const healthActions = [
  "ConfigureTags",
  "ConfigureTagsForOrganization",
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
  "DescribeTagKeys",
  "DescribeTagKeysForOrganization",
  "DescribeTags",
  "DescribeTagsForOrganization",
  "DescribeTagsOnboardingStatus",
  "DescribeTagsOnboardingStatusForOrganization",
  "DisableHealthServiceAccessForOrganization",
  "DisableTags",
  "DisableTagsForOrganization",
  "EnableHealthServiceAccessForOrganization",
  "EnableTags",
  "EnableTagsForOrganization",
] as const;

export type HealthAction = (typeof healthActions)[number];

export function health(action: HealthAction | "*"): `health:${HealthAction | "*"}` {
  return `health:${action}` as `health:${HealthAction | "*"}`;
}
