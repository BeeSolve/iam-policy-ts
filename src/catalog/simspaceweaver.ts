export const simspaceweaverActions = [
  "CreateSnapshot",
  "DeleteApp",
  "DeleteSimulation",
  "DescribeApp",
  "DescribeSimulation",
  "ListApps",
  "ListSimulations",
  "ListTagsForResource",
  "StartApp",
  "StartClock",
  "StartSimulation",
  "StopApp",
  "StopClock",
  "StopSimulation",
  "TagResource",
  "UntagResource",
] as const;

export type SimspaceweaverAction = (typeof simspaceweaverActions)[number];

export function simspaceweaver(action: SimspaceweaverAction | "*"): `simspaceweaver:${SimspaceweaverAction | "*"}` {
  return `simspaceweaver:${action}` as `simspaceweaver:${SimspaceweaverAction | "*"}`;
}
