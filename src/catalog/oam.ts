export const oamActions = [
  "CreateLink",
  "CreateSink",
  "DeleteLink",
  "DeleteSink",
  "GetLink",
  "GetSink",
  "GetSinkPolicy",
  "ListAttachedLinks",
  "ListLinks",
  "ListSinks",
  "ListTagsForResource",
  "PutSinkPolicy",
  "TagResource",
  "UntagResource",
  "UpdateLink",
] as const;

export type OamAction = (typeof oamActions)[number];

export function oam(action: OamAction | "*"): `oam:${OamAction | "*"}` {
  return `oam:${action}` as `oam:${OamAction | "*"}`;
}
