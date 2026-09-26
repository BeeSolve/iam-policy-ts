export const socialMessagingActions = [
  "AssociateWhatsAppBusinessAccount",
  "CreateWhatsAppFlow",
  "CreateWhatsAppMessageTemplate",
  "CreateWhatsAppMessageTemplateFromLibrary",
  "CreateWhatsAppMessageTemplateMedia",
  "DeleteWhatsAppFlow",
  "DeleteWhatsAppMessageMedia",
  "DeleteWhatsAppMessageTemplate",
  "DeprecateWhatsAppFlow",
  "DisassociateWhatsAppBusinessAccount",
  "GetLinkedWhatsAppBusinessAccount",
  "GetLinkedWhatsAppBusinessAccountPhoneNumber",
  "GetWhatsAppCallPermission",
  "GetWhatsAppFlow",
  "GetWhatsAppFlowPreview",
  "GetWhatsAppMessageMedia",
  "GetWhatsAppMessageTemplate",
  "ListLinkedWhatsAppBusinessAccounts",
  "ListTagsForResource",
  "ListWhatsAppFlowAssets",
  "ListWhatsAppFlows",
  "ListWhatsAppMessageTemplates",
  "ListWhatsAppTemplateLibrary",
  "PostWhatsAppMessageMedia",
  "PublishWhatsAppFlow",
  "PutWhatsAppBusinessAccountEventDestinations",
  "SendWhatsAppCallEvent",
  "SendWhatsAppMessage",
  "TagResource",
  "UntagResource",
  "UpdateLinkedWhatsAppBusinessAccountPhoneNumber",
  "UpdateWhatsAppFlow",
  "UpdateWhatsAppFlowAssets",
  "UpdateWhatsAppMessageTemplate",
] as const;

export type SocialMessagingAction = (typeof socialMessagingActions)[number];

export function socialMessaging(action: SocialMessagingAction | "*"): `social-messaging:${SocialMessagingAction | "*"}` {
  return `social-messaging:${action}` as `social-messaging:${SocialMessagingAction | "*"}`;
}
