export const interconnectActions = [
  "AcceptConnectionProposal",
  "CreateConnection",
  "DeleteConnection",
  "DescribeConnectionProposal",
  "GetConnection",
  "GetEnvironment",
  "ListAttachPoints",
  "ListConnections",
  "ListEnvironments",
  "ListTagsForResource",
  "TagResource",
  "UntagResource",
  "UpdateConnection",
] as const;

export type InterconnectAction = (typeof interconnectActions)[number];

export function interconnect(action: InterconnectAction | "*"): `interconnect:${InterconnectAction | "*"}` {
  return `interconnect:${action}` as `interconnect:${InterconnectAction | "*"}`;
}
