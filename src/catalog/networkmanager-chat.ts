export const networkmanagerChatActions = [
  "CancelMessageResponse",
  "CreateConversation",
  "DeleteConversation",
  "ListConversationMessages",
  "ListConversations",
  "NotifyConversationIsActive",
  "SendConversationMessage",
] as const;

export type NetworkmanagerChatAction = (typeof networkmanagerChatActions)[number];

export function networkmanagerChat(action: NetworkmanagerChatAction | "*"): `networkmanager-chat:${NetworkmanagerChatAction | "*"}` {
  return `networkmanager-chat:${action}` as `networkmanager-chat:${NetworkmanagerChatAction | "*"}`;
}
