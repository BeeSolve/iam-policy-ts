export const gameliftstreamsActions = [
  "AddStreamGroupLocations",
  "AssociateApplications",
  "CreateApplication",
  "CreateStreamGroup",
  "CreateStreamSessionConnection",
  "DeleteApplication",
  "DeleteStreamGroup",
  "DisassociateApplications",
  "ExportStreamSessionFiles",
  "GetApplication",
  "GetStreamGroup",
  "GetStreamSession",
  "ListApplications",
  "ListStreamGroups",
  "ListStreamSessions",
  "ListStreamSessionsByAccount",
  "ListTagsForResource",
  "RemoveStreamGroupLocations",
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
