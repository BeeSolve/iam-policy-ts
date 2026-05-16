export const computeOptimizerActions = [
  "DeleteRecommendationPreferences",
  "DescribeRecommendationExportJobs",
  "ExportAutoScalingGroupRecommendations",
  "ExportEBSVolumeRecommendations",
  "ExportEC2InstanceRecommendations",
  "ExportECSServiceRecommendations",
  "ExportIdleRecommendations",
  "ExportLambdaFunctionRecommendations",
  "ExportLicenseRecommendations",
  "ExportRDSDatabaseRecommendations",
  "GetAutoScalingGroupRecommendations",
  "GetEBSVolumeRecommendations",
  "GetEC2InstanceRecommendations",
  "GetEC2RecommendationProjectedMetrics",
  "GetECSServiceRecommendationProjectedMetrics",
  "GetECSServiceRecommendations",
  "GetEffectiveRecommendationPreferences",
  "GetEnrollmentStatus",
  "GetEnrollmentStatusesForOrganization",
  "GetIdleRecommendations",
  "GetLambdaFunctionRecommendations",
  "GetLicenseRecommendations",
  "GetRDSDatabaseRecommendationProjectedMetrics",
  "GetRDSDatabaseRecommendations",
  "GetRecommendationPreferences",
  "GetRecommendationSummaries",
  "PutRecommendationPreferences",
  "UpdateEnrollmentStatus",
] as const;

export type ComputeOptimizerAction = (typeof computeOptimizerActions)[number];

export function computeOptimizer(action: ComputeOptimizerAction | "*"): `compute-optimizer:${ComputeOptimizerAction | "*"}` {
  return `compute-optimizer:${action}` as `compute-optimizer:${ComputeOptimizerAction | "*"}`;
}
