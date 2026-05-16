export const applicationinsightsActions = [
  "AddWorkload",
  "CreateApplication",
  "CreateComponent",
  "CreateLogPattern",
  "DeleteApplication",
  "DeleteComponent",
  "DeleteLogPattern",
  "DescribeApplication",
  "DescribeComponent",
  "DescribeComponentConfiguration",
  "DescribeComponentConfigurationRecommendation",
  "DescribeLogPattern",
  "DescribeObservation",
  "DescribeProblem",
  "DescribeProblemObservations",
  "DescribeWorkload",
  "Link",
  "ListApplications",
  "ListComponents",
  "ListConfigurationHistory",
  "ListLogPatterns",
  "ListLogPatternSets",
  "ListProblems",
  "ListTagsForResource",
  "ListWorkloads",
  "RemoveWorkload",
  "TagResource",
  "UntagResource",
  "UpdateApplication",
  "UpdateComponent",
  "UpdateComponentConfiguration",
  "UpdateLogPattern",
  "UpdateProblem",
  "UpdateWorkload",
] as const;

export type ApplicationinsightsAction = (typeof applicationinsightsActions)[number];

export function applicationinsights(action: ApplicationinsightsAction | "*"): `applicationinsights:${ApplicationinsightsAction | "*"}` {
  return `applicationinsights:${action}` as `applicationinsights:${ApplicationinsightsAction | "*"}`;
}
