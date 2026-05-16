export const arcRegionSwitchActions = [
  "ApprovePlanExecutionStep",
  "CancelPlanExecution",
  "CreatePlan",
  "DeletePlan",
  "DeleteResourcePolicy",
  "GetPlan",
  "GetPlanEvaluationStatus",
  "GetPlanExecution",
  "GetPlanInRegion",
  "GetResourcePolicy",
  "ListPlanExecutionEvents",
  "ListPlanExecutions",
  "ListPlans",
  "ListPlansInRegion",
  "ListRoute53HealthChecks",
  "ListRoute53HealthChecksInRegion",
  "ListTagsForResource",
  "PutResourcePolicy",
  "StartPlanExecution",
  "TagResource",
  "UntagResource",
  "UpdatePlan",
  "UpdatePlanExecution",
  "UpdatePlanExecutionStep",
] as const;

export type ArcRegionSwitchAction = (typeof arcRegionSwitchActions)[number];

export function arcRegionSwitch(action: ArcRegionSwitchAction | "*"): `arc-region-switch:${ArcRegionSwitchAction | "*"}` {
  return `arc-region-switch:${action}` as `arc-region-switch:${ArcRegionSwitchAction | "*"}`;
}
