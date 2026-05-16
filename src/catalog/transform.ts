export const transformActions = [
  "AssociateConnectorResource",
  "CreateProfile",
  "DeleteAgentRuntimeConfiguration",
  "DeleteConnector",
  "DeleteProfile",
  "GetAccountSettings",
  "GetAgent",
  "GetAgentRuntimeConfiguration",
  "GetConnector",
  "GetWebAppUrl",
  "ListAgents",
  "ListConnectors",
  "ListProfiles",
  "ListTagsForResource",
  "PutAgentRuntimeConfiguration",
  "RejectConnector",
  "TagResource",
  "UntagResource",
  "UpdateAccountSettings",
  "UpdateAgentAccess",
  "UpdateProfile",
] as const;

export type TransformAction = (typeof transformActions)[number];

export function transform(action: TransformAction | "*"): `transform:${TransformAction | "*"}` {
  return `transform:${action}` as `transform:${TransformAction | "*"}`;
}
