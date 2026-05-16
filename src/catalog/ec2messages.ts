export const ec2messagesActions = [
  "AcknowledgeMessage",
  "DeleteMessage",
  "FailMessage",
  "GetEndpoint",
  "GetMessages",
  "SendReply",
] as const;

export type Ec2messagesAction = (typeof ec2messagesActions)[number];

export function ec2messages(action: Ec2messagesAction | "*"): `ec2messages:${Ec2messagesAction | "*"}` {
  return `ec2messages:${action}` as `ec2messages:${Ec2messagesAction | "*"}`;
}
