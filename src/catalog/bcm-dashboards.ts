export const bcmDashboardsActions = [
  "CreateDashboard",
  "CreateScheduledReport",
  "DeleteDashboard",
  "DeleteScheduledReport",
  "ExecuteScheduledReport",
  "GetDashboard",
  "GetResourcePolicy",
  "GetScheduledReport",
  "ListDashboards",
  "ListScheduledReports",
  "ListTagsForResource",
  "TagResource",
  "UntagResource",
  "UpdateDashboard",
  "UpdateScheduledReport",
] as const;

export type BcmDashboardsAction = (typeof bcmDashboardsActions)[number];

export function bcmDashboards(action: BcmDashboardsAction | "*"): `bcm-dashboards:${BcmDashboardsAction | "*"}` {
  return `bcm-dashboards:${action}` as `bcm-dashboards:${BcmDashboardsAction | "*"}`;
}
