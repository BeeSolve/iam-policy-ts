export const securitylakeActions = [
  "CreateAwsLogSource",
  "CreateCustomLogSource",
  "CreateDataLake",
  "CreateDataLakeExceptionSubscription",
  "CreateDataLakeOrganizationConfiguration",
  "CreateSubscriber",
  "CreateSubscriberNotification",
  "DeleteAwsLogSource",
  "DeleteCustomLogSource",
  "DeleteDataLake",
  "DeleteDataLakeExceptionSubscription",
  "DeleteDataLakeOrganizationConfiguration",
  "DeleteSubscriber",
  "DeleteSubscriberNotification",
  "DeregisterDataLakeDelegatedAdministrator",
  "GetDataLakeExceptionSubscription",
  "GetDataLakeOrganizationConfiguration",
  "GetDataLakeSources",
  "GetSubscriber",
  "ListDataLakeExceptions",
  "ListDataLakes",
  "ListLogSources",
  "ListSubscribers",
  "ListTagsForResource",
  "RegisterDataLakeDelegatedAdministrator",
  "TagResource",
  "UntagResource",
  "UpdateDataLake",
  "UpdateDataLakeExceptionSubscription",
  "UpdateSubscriber",
  "UpdateSubscriberNotification",
] as const;

export type SecuritylakeAction = (typeof securitylakeActions)[number];

export function securitylake(action: SecuritylakeAction | "*"): `securitylake:${SecuritylakeAction | "*"}` {
  return `securitylake:${action}` as `securitylake:${SecuritylakeAction | "*"}`;
}
