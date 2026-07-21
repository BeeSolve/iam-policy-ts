export const supportplansActions = [
  "AcceptSupportAgreement",
  "CancelSupportAgreement",
  "CreateSupportAgreement",
  "CreateSupportPlanSchedule",
  "GetSupportAgreement",
  "GetSupportPlan",
  "GetSupportPlanUpdateStatus",
  "ListSupportAgreementRevisions",
  "ListSupportAgreements",
  "ListSupportPlanModifiers",
  "RejectSupportAgreement",
  "StartSupportPlanUpdate",
  "UpdateSupportAgreement",
] as const;

export type SupportplansAction = (typeof supportplansActions)[number];

export function supportplans(action: SupportplansAction | "*"): `supportplans:${SupportplansAction | "*"}` {
  return `supportplans:${action}` as `supportplans:${SupportplansAction | "*"}`;
}
