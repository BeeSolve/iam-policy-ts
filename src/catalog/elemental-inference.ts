export const elementalInferenceActions = [
  "AssociateFeed",
  "CreateDictionary",
  "CreateFeed",
  "CreateScheduleAction",
  "DeleteDictionary",
  "DeleteFeed",
  "DeleteFeedPolicy",
  "DeleteScheduleAction",
  "DisassociateFeed",
  "ExportDictionaryEntries",
  "GetDictionary",
  "GetFeed",
  "GetFeedPolicy",
  "GetMetadata",
  "ListDictionaries",
  "ListFeeds",
  "ListScheduleActions",
  "ListTagsForResource",
  "PutFeedPolicy",
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
