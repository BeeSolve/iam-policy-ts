export const mediapackageActions = [
  "ConfigureLogs",
  "CreateChannel",
  "CreateHarvestJob",
  "CreateOriginEndpoint",
  "DeleteChannel",
  "DeleteOriginEndpoint",
  "DescribeChannel",
  "DescribeHarvestJob",
  "DescribeOriginEndpoint",
  "ListChannels",
  "ListHarvestJobs",
  "ListOriginEndpoints",
  "ListTagsForResource",
  "RotateChannelCredentials",
  "RotateIngestEndpointCredentials",
  "TagResource",
  "UntagResource",
  "UpdateChannel",
  "UpdateOriginEndpoint",
] as const;

export type MediapackageAction = (typeof mediapackageActions)[number];

export function mediapackage(action: MediapackageAction | "*"): `mediapackage:${MediapackageAction | "*"}` {
  return `mediapackage:${action}` as `mediapackage:${MediapackageAction | "*"}`;
}
