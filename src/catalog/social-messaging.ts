export const socialMessagingActions = [
  "AssociateWhatsAppBusinessAccount",
  "CreateWhatsAppMessageTemplate",
  "CreateWhatsAppMessageTemplateFromLibrary",
  "CreateWhatsAppMessageTemplateMedia",
  "DeleteWhatsAppMessageMedia",
  "DeleteWhatsAppMessageTemplate",
  "DisassociateWhatsAppBusinessAccount",
  "GetLinkedWhatsAppBusinessAccount",
  "GetLinkedWhatsAppBusinessAccountPhoneNumber",
  "GetWhatsAppMessageMedia",
  "GetWhatsAppMessageTemplate",
  "ListLinkedWhatsAppBusinessAccounts",
  "ListTagsForResource",
  "ListWhatsAppMessageTemplates",
  "ListWhatsAppTemplateLibrary",
  "PostWhatsAppMessageMedia",
  "PutWhatsAppBusinessAccountEventDestinations",
  "SendWhatsAppMessage",
  "TagResource",
  "UntagResource",
  "UpdateWhatsAppMessageTemplate",
] as const;

export type SocialMessagingAction = (typeof socialMessagingActions)[number];

export function socialMessaging(action: SocialMessagingAction | "*"): `social-messaging:${SocialMessagingAction | "*"}` {
  return `social-messaging:${action}` as `social-messaging:${SocialMessagingAction | "*"}`;
}
