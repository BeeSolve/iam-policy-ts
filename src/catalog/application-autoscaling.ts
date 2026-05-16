export const applicationAutoscalingActions = [
  "DeleteScalingPolicy",
  "DeleteScheduledAction",
  "DeregisterScalableTarget",
  "DescribeScalableTargets",
  "DescribeScalingActivities",
  "DescribeScalingPolicies",
  "DescribeScheduledActions",
  "GetPredictiveScalingForecast",
  "ListTagsForResource",
  "PutScalingPolicy",
  "PutScheduledAction",
  "RegisterScalableTarget",
  "TagResource",
  "UntagResource",
] as const;

export type ApplicationAutoscalingAction = (typeof applicationAutoscalingActions)[number];

export function applicationAutoscaling(action: ApplicationAutoscalingAction | "*"): `application-autoscaling:${ApplicationAutoscalingAction | "*"}` {
  return `application-autoscaling:${action}` as `application-autoscaling:${ApplicationAutoscalingAction | "*"}`;
}
