export const codeguruProfilerActions = [
  "AddNotificationChannels",
  "BatchGetFrameMetricData",
  "ConfigureAgent",
  "CreateProfilingGroup",
  "DeleteProfilingGroup",
  "DescribeProfilingGroup",
  "GetFindingsReportAccountSummary",
  "GetNotificationConfiguration",
  "GetPolicy",
  "GetProfile",
  "GetRecommendations",
  "ListFindingsReports",
  "ListProfileTimes",
  "ListProfilingGroups",
  "ListTagsForResource",
  "PostAgentProfile",
  "PutPermission",
  "RemoveNotificationChannel",
  "RemovePermission",
  "SubmitFeedback",
  "TagResource",
  "UntagResource",
  "UpdateProfilingGroup",
] as const;

export type CodeguruProfilerAction = (typeof codeguruProfilerActions)[number];

export function codeguruProfiler(action: CodeguruProfilerAction | "*"): `codeguru-profiler:${CodeguruProfilerAction | "*"}` {
  return `codeguru-profiler:${action}` as `codeguru-profiler:${CodeguruProfilerAction | "*"}`;
}
