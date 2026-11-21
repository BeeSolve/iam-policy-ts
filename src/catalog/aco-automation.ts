export const acoAutomationActions = [
  "AssociateAccounts",
  "CreateAutomationRule",
  "DeleteAutomationRule",
  "DeleteOrganizationEnrollmentConfiguration",
  "DisassociateAccounts",
  "GetAutomationEvent",
  "GetAutomationRule",
  "GetEnrollmentConfiguration",
  "ListAccounts",
  "ListAutomationEvents",
  "ListAutomationEventSteps",
  "ListAutomationEventSummaries",
  "ListAutomationRulePreview",
  "ListAutomationRulePreviewSummaries",
  "ListAutomationRules",
  "ListOrganizationalUnits",
  "ListOrganizationEnrollmentConfigurations",
  "ListRecommendedActions",
  "ListRecommendedActionSummaries",
  "ListTagsForResource",
  "PutOrganizationEnrollmentConfiguration",
  "RollbackAutomationEvent",
  "StartAutomationEvent",
  "TagResource",
  "UntagResource",
  "UpdateAutomationRule",
  "UpdateEnrollmentConfiguration",
] as const;

export type AcoAutomationAction = (typeof acoAutomationActions)[number];

export function acoAutomation(action: AcoAutomationAction | "*"): `aco-automation:${AcoAutomationAction | "*"}` {
  return `aco-automation:${action}` as `aco-automation:${AcoAutomationAction | "*"}`;
}
