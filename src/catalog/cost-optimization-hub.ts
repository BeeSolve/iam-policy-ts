export const costOptimizationHubActions = [
  "GetPreferences",
  "GetRecommendation",
  "ListEfficiencyMetrics",
  "ListEnrollmentStatuses",
  "ListRecommendations",
  "ListRecommendationSummaries",
  "UpdateEnrollmentStatus",
  "UpdatePreferences",
] as const;

export type CostOptimizationHubAction = (typeof costOptimizationHubActions)[number];

export function costOptimizationHub(action: CostOptimizationHubAction | "*"): `cost-optimization-hub:${CostOptimizationHubAction | "*"}` {
  return `cost-optimization-hub:${action}` as `cost-optimization-hub:${CostOptimizationHubAction | "*"}`;
}
