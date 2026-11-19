export const abuseActions = [
  "CreateAbuseReport",
  "GetAbuseReportStatus",
  "ListAbuseReportStatuses",
] as const;

export type AbuseAction = (typeof abuseActions)[number];

export function abuse(action: AbuseAction | "*"): `abuse:${AbuseAction | "*"}` {
  return `abuse:${action}` as `abuse:${AbuseAction | "*"}`;
}
