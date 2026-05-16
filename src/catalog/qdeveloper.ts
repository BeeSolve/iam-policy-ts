export const qdeveloperActions = [
  "ExportArtifact",
  "ImportArtifact",
  "ListTagsForResource",
  "StartAgentSession",
  "TagResource",
  "TransformCode",
  "UntagResource",
] as const;

export type QdeveloperAction = (typeof qdeveloperActions)[number];

export function qdeveloper(action: QdeveloperAction | "*"): `qdeveloper:${QdeveloperAction | "*"}` {
  return `qdeveloper:${action}` as `qdeveloper:${QdeveloperAction | "*"}`;
}
