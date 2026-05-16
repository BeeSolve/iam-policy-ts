export const notificationsContactsActions = [
  "ActivateEmailContact",
  "CreateEmailContact",
  "DeleteEmailContact",
  "GetEmailContact",
  "ListEmailContacts",
  "ListTagsForResource",
  "SendActivationCode",
  "TagResource",
  "UntagResource",
] as const;

export type NotificationsContactsAction = (typeof notificationsContactsActions)[number];

export function notificationsContacts(action: NotificationsContactsAction | "*"): `notifications-contacts:${NotificationsContactsAction | "*"}` {
  return `notifications-contacts:${action}` as `notifications-contacts:${NotificationsContactsAction | "*"}`;
}
