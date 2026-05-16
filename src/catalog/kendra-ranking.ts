export const kendraRankingActions = [
  "CreateRescoreExecutionPlan",
  "DeleteRescoreExecutionPlan",
  "DescribeRescoreExecutionPlan",
  "ListRescoreExecutionPlans",
  "ListTagsForResource",
  "Rescore",
  "TagResource",
  "UntagResource",
  "UpdateRescoreExecutionPlan",
] as const;

export type KendraRankingAction = (typeof kendraRankingActions)[number];

export function kendraRanking(action: KendraRankingAction | "*"): `kendra-ranking:${KendraRankingAction | "*"}` {
  return `kendra-ranking:${action}` as `kendra-ranking:${KendraRankingAction | "*"}`;
}
