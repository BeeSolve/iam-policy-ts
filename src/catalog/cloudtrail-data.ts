export const cloudtrailDataActions = [
  "PutAuditEvents",
] as const;

export type CloudtrailDataAction = (typeof cloudtrailDataActions)[number];

export function cloudtrailData(action: CloudtrailDataAction | "*"): `cloudtrail-data:${CloudtrailDataAction | "*"}` {
  return `cloudtrail-data:${action}` as `cloudtrail-data:${CloudtrailDataAction | "*"}`;
}
