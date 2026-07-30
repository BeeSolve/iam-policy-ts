export const gameliftstreamsActions = [
  "AddStreamGroupLocations",
  "AssociateApplications",
  "CreateApplication",
  "CreateStreamGroup",
  "CreateStreamSessionAdminShell",
  "CreateStreamSessionConnection",
  "CreateStreamUrl",
  "DeleteApplication",
  "DeleteStreamGroup",
  "DisassociateApplications",
  "ExportStreamSessionFiles",
  "GetApplication",
  "GetStreamGroup",
  "GetStreamSession",
  "GetStreamUrl",
  "ListApplications",
  "ListApplicationShaderCaches",
  "ListStreamGroups",
  "ListStreamSessions",
  "ListStreamSessionsByAccount",
  "ListStreamUrls",
  "ListTagsForResource",
  "RemoveStreamGroupLocations",
  "RevokeStreamUrl",
  "StartStreamSession",
  "TagResource",
  "TerminateStreamSession",
  "UntagResource",
  "UpdateApplication",
  "UpdateStreamGroup",
] as const;

export type GameliftstreamsAction = (typeof gameliftstreamsActions)[number];

export function gameliftstreams(action: GameliftstreamsAction | "*"): `gameliftstreams:${GameliftstreamsAction | "*"}` {
  return `gameliftstreams:${action}` as `gameliftstreams:${GameliftstreamsAction | "*"}`;
}
