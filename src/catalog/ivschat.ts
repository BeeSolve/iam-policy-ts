export const ivschatActions = [
  "CreateChatToken",
  "CreateLoggingConfiguration",
  "CreateRoom",
  "DeleteLoggingConfiguration",
  "DeleteMessage",
  "DeleteRoom",
  "DisconnectUser",
  "GetLoggingConfiguration",
  "GetRoom",
  "ListLoggingConfigurations",
  "ListRooms",
  "ListTagsForResource",
  "SendEvent",
  "TagResource",
  "UntagResource",
  "UpdateLoggingConfiguration",
  "UpdateRoom",
] as const;

export type IvschatAction = (typeof ivschatActions)[number];

export function ivschat(action: IvschatAction | "*"): `ivschat:${IvschatAction | "*"}` {
  return `ivschat:${action}` as `ivschat:${IvschatAction | "*"}`;
}
