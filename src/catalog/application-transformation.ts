export const applicationTransformationActions = [
  "GetContainerization",
  "GetDeployment",
  "GetGroupingAssessment",
  "GetPortingCompatibilityAssessment",
  "GetPortingRecommendationAssessment",
  "GetRuntimeAssessment",
  "PutLogData",
  "PutMetricData",
  "StartContainerization",
  "StartDeployment",
  "StartGroupingAssessment",
  "StartPortingCompatibilityAssessment",
  "StartPortingRecommendationAssessment",
  "StartRuntimeAssessment",
] as const;

export type ApplicationTransformationAction = (typeof applicationTransformationActions)[number];

export function applicationTransformation(action: ApplicationTransformationAction | "*"): `application-transformation:${ApplicationTransformationAction | "*"}` {
  return `application-transformation:${action}` as `application-transformation:${ApplicationTransformationAction | "*"}`;
}
