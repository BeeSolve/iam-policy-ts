export const autoscalingPlansActions = [
  "CreateScalingPlan",
  "DeleteScalingPlan",
  "DescribeScalingPlanResources",
  "DescribeScalingPlans",
  "GetScalingPlanResourceForecastData",
  "UpdateScalingPlan",
] as const;

export type AutoscalingPlansAction = (typeof autoscalingPlansActions)[number];

export function autoscalingPlans(action: AutoscalingPlansAction | "*"): `autoscaling-plans:${AutoscalingPlansAction | "*"}` {
  return `autoscaling-plans:${action}` as `autoscaling-plans:${AutoscalingPlansAction | "*"}`;
}
