export const internetmonitorActions = [
  "CreateMonitor",
  "DeleteMonitor",
  "GetHealthEvent",
  "GetInternetEvent",
  "GetMonitor",
  "GetQueryResults",
  "GetQueryStatus",
  "Link",
  "ListHealthEvents",
  "ListInternetEvents",
  "ListMonitors",
  "ListTagsForResource",
  "StartQuery",
  "StopQuery",
  "TagResource",
  "UntagResource",
  "UpdateMonitor",
] as const;

export type InternetmonitorAction = (typeof internetmonitorActions)[number];

export function internetmonitor(action: InternetmonitorAction | "*"): `internetmonitor:${InternetmonitorAction | "*"}` {
  return `internetmonitor:${action}` as `internetmonitor:${InternetmonitorAction | "*"}`;
}
