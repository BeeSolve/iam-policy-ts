export const devopsGuruActions = [
  "AddNotificationChannel",
  "DeleteInsight",
  "DescribeAccountHealth",
  "DescribeAccountOverview",
  "DescribeAnomaly",
  "DescribeEventSourcesConfig",
  "DescribeFeedback",
  "DescribeInsight",
  "DescribeOrganizationHealth",
  "DescribeOrganizationOverview",
  "DescribeOrganizationResourceCollectionHealth",
  "DescribeResourceCollectionHealth",
  "DescribeServiceIntegration",
  "GetCostEstimation",
  "GetResourceCollection",
  "ListAnomaliesForInsight",
  "ListAnomalousLogGroups",
  "ListEvents",
  "ListInsights",
  "ListMonitoredResources",
  "ListNotificationChannels",
  "ListOrganizationInsights",
  "ListRecommendations",
  "PutFeedback",
  "RemoveNotificationChannel",
  "SearchInsights",
  "SearchOrganizationInsights",
  "StartCostEstimation",
  "UpdateEventSourcesConfig",
  "UpdateResourceCollection",
  "UpdateServiceIntegration",
] as const;

export type DevopsGuruAction = (typeof devopsGuruActions)[number];

export function devopsGuru(action: DevopsGuruAction | "*"): `devops-guru:${DevopsGuruAction | "*"}` {
  return `devops-guru:${action}` as `devops-guru:${DevopsGuruAction | "*"}`;
}
