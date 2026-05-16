export const networkmonitorActions = [
  "CreateMonitor",
  "CreateProbe",
  "DeleteMonitor",
  "DeleteProbe",
  "GetMonitor",
  "GetProbe",
  "ListMonitors",
  "ListTagsForResource",
  "TagResource",
  "UntagResource",
  "UpdateMonitor",
  "UpdateProbe",
] as const;

export type NetworkmonitorAction = (typeof networkmonitorActions)[number];

export function networkmonitor(action: NetworkmonitorAction | "*"): `networkmonitor:${NetworkmonitorAction | "*"}` {
  return `networkmonitor:${action}` as `networkmonitor:${NetworkmonitorAction | "*"}`;
}
