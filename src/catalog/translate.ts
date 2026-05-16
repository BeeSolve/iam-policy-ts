export const translateActions = [
  "CreateParallelData",
  "DeleteParallelData",
  "DeleteTerminology",
  "DescribeTextTranslationJob",
  "GetParallelData",
  "GetTerminology",
  "ImportTerminology",
  "ListLanguages",
  "ListParallelData",
  "ListTagsForResource",
  "ListTerminologies",
  "ListTextTranslationJobs",
  "StartTextTranslationJob",
  "StopTextTranslationJob",
  "TagResource",
  "TranslateDocument",
  "TranslateText",
  "UntagResource",
  "UpdateParallelData",
] as const;

export type TranslateAction = (typeof translateActions)[number];

export function translate(action: TranslateAction | "*"): `translate:${TranslateAction | "*"}` {
  return `translate:${action}` as `translate:${TranslateAction | "*"}`;
}
