export const networkflowmonitorActions = [
  "CreateMonitor",
  "CreateScope",
  "DeleteMonitor",
  "DeleteScope",
  "GetMonitor",
  "GetQueryResultsMonitorTopContributors",
  "GetQueryResultsWorkloadInsightsTopContributors",
  "GetQueryResultsWorkloadInsightsTopContributorsData",
  "GetQueryStatusMonitorTopContributors",
  "GetQueryStatusWorkloadInsightsTopContributors",
  "GetQueryStatusWorkloadInsightsTopContributorsData",
  "GetScope",
  "ListMonitors",
  "ListScopes",
  "ListTagsForResource",
  "Publish",
  "StartQueryMonitorTopContributors",
  "StartQueryWorkloadInsightsTopContributors",
  "StartQueryWorkloadInsightsTopContributorsData",
  "StopQueryMonitorTopContributors",
  "StopQueryWorkloadInsightsTopContributors",
  "StopQueryWorkloadInsightsTopContributorsData",
  "TagResource",
  "UntagResource",
  "UpdateMonitor",
  "UpdateScope",
] as const;

export type NetworkflowmonitorAction = (typeof networkflowmonitorActions)[number];

export function networkflowmonitor(action: NetworkflowmonitorAction | "*"): `networkflowmonitor:${NetworkflowmonitorAction | "*"}` {
  return `networkflowmonitor:${action}` as `networkflowmonitor:${NetworkflowmonitorAction | "*"}`;
}
