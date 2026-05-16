export const elementalInferenceActions = [
  "AssociateFeed",
  "CreateFeed",
  "DeleteFeed",
  "DisassociateFeed",
  "GetFeed",
  "GetMetadata",
  "ListFeeds",
  "ListTagsForResource",
  "PutMedia",
  "TagResource",
  "UntagResource",
  "UpdateFeed",
] as const;

export type ElementalInferenceAction = (typeof elementalInferenceActions)[number];

export function elementalInference(action: ElementalInferenceAction | "*"): `elemental-inference:${ElementalInferenceAction | "*"}` {
  return `elemental-inference:${action}` as `elemental-inference:${ElementalInferenceAction | "*"}`;
}
