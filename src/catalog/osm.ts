export const osmActions = [
  "BatchGetEvent",
  "CreateEvent",
  "CreateMemory",
  "CreateSpace",
  "DeleteEvent",
  "DeleteMemory",
  "DeleteSpace",
  "GetEvent",
  "GetMemory",
  "GetSpace",
  "ListEvents",
  "ListMemories",
  "ListSpaces",
  "ListTagsForResource",
  "SearchEvents",
  "SearchMemories",
  "TagResource",
  "UntagResource",
  "UpdateMemory",
  "UpdateSpace",
] as const;

export type OsmAction = (typeof osmActions)[number];

export function osm(action: OsmAction | "*"): `osm:${OsmAction | "*"}` {
  return `osm:${action}` as `osm:${OsmAction | "*"}`;
}
