export const supportappActions = [
  "CreateSlackChannelConfiguration",
  "DeleteAccountAlias",
  "DeleteSlackChannelConfiguration",
  "DeleteSlackWorkspaceConfiguration",
  "DescribeSlackChannels",
  "GetAccountAlias",
  "GetSlackOauthParameters",
  "ListSlackChannelConfigurations",
  "ListSlackWorkspaceConfigurations",
  "PutAccountAlias",
  "RedeemSlackOauthCode",
  "RegisterSlackWorkspaceForOrganization",
  "UpdateSlackChannelConfiguration",
] as const;

export type SupportappAction = (typeof supportappActions)[number];

export function supportapp(action: SupportappAction | "*"): `supportapp:${SupportappAction | "*"}` {
  return `supportapp:${action}` as `supportapp:${SupportappAction | "*"}`;
}
