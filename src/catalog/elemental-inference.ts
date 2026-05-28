export const elementalInferenceActions = [
  "AssociateFeed",
  "CreateDictionary",
  "CreateFeed",
  "DeleteDictionary",
  "DeleteFeed",
  "DisassociateFeed",
  "ExportDictionaryEntries",
  "GetDictionary",
  "GetFeed",
  "GetMetadata",
  "ListDictionaries",
  "ListFeeds",
  "ListTagsForResource",
  "PutMedia",
  "TagResource",
  "UntagResource",
  "UpdateDictionary",
  "UpdateFeed",
] as const;

export type ElementalInferenceAction = (typeof elementalInferenceActions)[number];

export function elementalInference(action: ElementalInferenceAction | "*"): `elemental-inference:${ElementalInferenceAction | "*"}` {
  return `elemental-inference:${action}` as `elemental-inference:${ElementalInferenceAction | "*"}`;
}
