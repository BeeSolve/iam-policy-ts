export const networkflowmonitorActions = [
  "CreateMonitor",
  "CreatePerformanceMonitor",
  "CreateScope",
  "DeleteMonitor",
  "DeletePerformanceMonitor",
  "DeleteScope",
  "GetMonitor",
  "GetMonitorScopeSuggestions",
  "GetPerformanceMonitor",
  "GetQueryResultsMonitorTopContributors",
  "GetQueryResultsPerformanceMonitor",
  "GetQueryResultsWorkloadInsightsTopContributors",
  "GetQueryResultsWorkloadInsightsTopContributorsData",
  "GetQueryStatusMonitorTopContributors",
  "GetQueryStatusPerformanceMonitor",
  "GetQueryStatusWorkloadInsightsTopContributors",
  "GetQueryStatusWorkloadInsightsTopContributorsData",
  "GetScope",
  "ListMonitors",
  "ListPerformanceMonitors",
  "ListScopes",
  "ListTagsForResource",
  "Publish",
  "StartQueryMonitorTopContributors",
  "StartQueryPerformanceMonitor",
  "StartQueryWorkloadInsightsTopContributors",
  "StartQueryWorkloadInsightsTopContributorsData",
  "StopQueryMonitorTopContributors",
  "StopQueryPerformanceMonitor",
  "StopQueryWorkloadInsightsTopContributors",
  "StopQueryWorkloadInsightsTopContributorsData",
  "TagResource",
  "UntagResource",
  "UpdateMonitor",
  "UpdatePerformanceMonitor",
  "UpdateScope",
] as const;

export type NetworkflowmonitorAction = (typeof networkflowmonitorActions)[number];

export function networkflowmonitor(action: NetworkflowmonitorAction | "*"): `networkflowmonitor:${NetworkflowmonitorAction | "*"}` {
  return `networkflowmonitor:${action}` as `networkflowmonitor:${NetworkflowmonitorAction | "*"}`;
}
