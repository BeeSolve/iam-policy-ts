export const pcaConnectorScepActions = [
  "CreateChallenge",
  "CreateConnector",
  "DeleteChallenge",
  "DeleteConnector",
  "GetChallengeMetadata",
  "GetChallengePassword",
  "GetConnector",
  "ListChallengeMetadata",
  "ListConnectors",
  "ListTagsForResource",
  "TagResource",
  "UntagResource",
] as const;

export type PcaConnectorScepAction = (typeof pcaConnectorScepActions)[number];

export function pcaConnectorScep(action: PcaConnectorScepAction | "*"): `pca-connector-scep:${PcaConnectorScepAction | "*"}` {
  return `pca-connector-scep:${action}` as `pca-connector-scep:${PcaConnectorScepAction | "*"}`;
}
