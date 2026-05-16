export const acoAutomationActions = [
  "AssociateAccounts",
  "CreateAutomationRule",
  "DeleteAutomationRule",
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
  "ListRecommendedActions",
  "ListRecommendedActionSummaries",
  "ListTagsForResource",
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
