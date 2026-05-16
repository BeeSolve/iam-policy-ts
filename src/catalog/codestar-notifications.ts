export const codestarNotificationsActions = [
  "CreateNotificationRule",
  "DeleteNotificationRule",
  "DeleteTarget",
  "DescribeNotificationRule",
  "ListEventTypes",
  "ListNotificationRules",
  "ListTagsForResource",
  "ListTargets",
  "Subscribe",
  "TagResource",
  "Unsubscribe",
  "UntagResource",
  "UpdateNotificationRule",
] as const;

export type CodestarNotificationsAction = (typeof codestarNotificationsActions)[number];

export function codestarNotifications(action: CodestarNotificationsAction | "*"): `codestar-notifications:${CodestarNotificationsAction | "*"}` {
  return `codestar-notifications:${action}` as `codestar-notifications:${CodestarNotificationsAction | "*"}`;
}
