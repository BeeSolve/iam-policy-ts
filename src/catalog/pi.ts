export const piActions = [
  "CreatePerformanceAnalysisReport",
  "DeletePerformanceAnalysisReport",
  "DescribeDimensionKeys",
  "GetDimensionKeyDetails",
  "GetPerformanceAnalysisReport",
  "GetResourceMetadata",
  "GetResourceMetrics",
  "ListAvailableResourceDimensions",
  "ListAvailableResourceMetrics",
  "ListPerformanceAnalysisReports",
  "ListTagsForResource",
  "TagResource",
  "UntagResource",
] as const;

export type PiAction = (typeof piActions)[number];

export function pi(action: PiAction | "*"): `pi:${PiAction | "*"}` {
  return `pi:${action}` as `pi:${PiAction | "*"}`;
}
