export const supportConsoleActions = [
  "CheckSubscription",
  "CreateCaseDraft",
  "CreateContact",
  "DeleteCaseDraft",
  "DescribeDynamicHelp",
  "GetAccountGovCloudEnabled",
  "GetAccountState",
  "GetBanner",
  "GetCaseDraft",
  "GetIssueClassificationPredictions",
  "GetIssueTextSummary",
  "GetQuestionnaire",
  "SaveFeedback",
] as const;

export type SupportConsoleAction = (typeof supportConsoleActions)[number];

export function supportConsole(action: SupportConsoleAction | "*"): `support-console:${SupportConsoleAction | "*"}` {
  return `support-console:${action}` as `support-console:${SupportConsoleAction | "*"}`;
}
