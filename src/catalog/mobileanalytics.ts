export const mobileanalyticsActions = [
  "GetFinancialReports",
  "GetReports",
  "PutEvents",
] as const;

export type MobileanalyticsAction = (typeof mobileanalyticsActions)[number];

export function mobileanalytics(action: MobileanalyticsAction | "*"): `mobileanalytics:${MobileanalyticsAction | "*"}` {
  return `mobileanalytics:${action}` as `mobileanalytics:${MobileanalyticsAction | "*"}`;
}
