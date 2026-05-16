export const supportActions = [
  "AddAttachmentsToSet",
  "AddCommunicationToCase",
  "CreateCase",
  "DescribeAttachment",
  "DescribeCaseAttributes",
  "DescribeCaseOptions",
  "DescribeCases",
  "DescribeCommunication",
  "DescribeCommunications",
  "DescribeCreateCaseOptions",
  "DescribeIssueTypes",
  "DescribeServices",
  "DescribeSeverityLevels",
  "DescribeSupportedLanguages",
  "DescribeSupportLevel",
  "DescribeTrustedAdvisorCheckRefreshStatuses",
  "DescribeTrustedAdvisorCheckResult",
  "DescribeTrustedAdvisorChecks",
  "DescribeTrustedAdvisorCheckSummaries",
  "GetInteraction",
  "InitiateCallForCase",
  "InitiateChatForCase",
  "InitiateLiveContactForCase",
  "ListInteractionEntries",
  "ListInteractions",
  "PutCaseAttributes",
  "RateCaseCommunication",
  "RefreshTrustedAdvisorCheck",
  "ResolveCase",
  "ResolveInteraction",
  "SearchForCases",
  "StartInteraction",
  "UpdateCaseSeverity",
  "UpdateInteraction",
] as const;

export type SupportAction = (typeof supportActions)[number];

export function support(action: SupportAction | "*"): `support:${SupportAction | "*"}` {
  return `support:${action}` as `support:${SupportAction | "*"}`;
}
