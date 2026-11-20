export const apexActions = [
  "GetStatistics",
  "GetStatisticsTimeSeries",
  "Search",
] as const;

export type ApexAction = (typeof apexActions)[number];

export function apex(action: ApexAction | "*"): `apex:${ApexAction | "*"}` {
  return `apex:${action}` as `apex:${ApexAction | "*"}`;
}
