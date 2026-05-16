export const supportplansActions = [
  "CreateSupportPlanSchedule",
  "GetSupportPlan",
  "GetSupportPlanUpdateStatus",
  "ListSupportPlanModifiers",
  "StartSupportPlanUpdate",
] as const;

export type SupportplansAction = (typeof supportplansActions)[number];

export function supportplans(action: SupportplansAction | "*"): `supportplans:${SupportplansAction | "*"}` {
  return `supportplans:${action}` as `supportplans:${SupportplansAction | "*"}`;
}
