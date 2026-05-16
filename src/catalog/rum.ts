export const rumActions = [
  "BatchCreateRumMetricDefinitions",
  "BatchDeleteRumMetricDefinitions",
  "BatchGetRumMetricDefinitions",
  "CreateAppMonitor",
  "DeleteAppMonitor",
  "DeleteResourcePolicy",
  "DeleteRumMetricsDestination",
  "GetAppMonitor",
  "GetAppMonitorData",
  "GetResourcePolicy",
  "ListAppMonitors",
  "ListRumMetricsDestinations",
  "ListTagsForResource",
  "PutResourcePolicy",
  "PutRumEvents",
  "PutRumMetricsDestination",
  "TagResource",
  "UntagResource",
  "UpdateAppMonitor",
  "UpdateRumMetricDefinition",
] as const;

export type RumAction = (typeof rumActions)[number];

export function rum(action: RumAction | "*"): `rum:${RumAction | "*"}` {
  return `rum:${action}` as `rum:${RumAction | "*"}`;
}
