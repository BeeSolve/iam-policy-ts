export const mediapackagev2Actions = [
  "CancelHarvestJob",
  "CreateChannel",
  "CreateChannelGroup",
  "CreateHarvestJob",
  "CreateOriginEndpoint",
  "DeleteChannel",
  "DeleteChannelGroup",
  "DeleteChannelPolicy",
  "DeleteOriginEndpoint",
  "DeleteOriginEndpointPolicy",
  "GetChannel",
  "GetChannelGroup",
  "GetChannelPolicy",
  "GetHarvestJob",
  "GetHeadObject",
  "GetObject",
  "GetOriginEndpoint",
  "GetOriginEndpointPolicy",
  "HarvestObject",
  "ListChannelGroups",
  "ListChannels",
  "ListHarvestJobs",
  "ListOriginEndpoints",
  "ListTagsForResource",
  "PutChannelPolicy",
  "PutObject",
  "PutOriginEndpointPolicy",
  "ResetChannelState",
  "ResetOriginEndpointState",
  "TagResource",
  "UntagResource",
  "UpdateChannel",
  "UpdateChannelGroup",
  "UpdateOriginEndpoint",
] as const;

export type Mediapackagev2Action = (typeof mediapackagev2Actions)[number];

export function mediapackagev2(action: Mediapackagev2Action | "*"): `mediapackagev2:${Mediapackagev2Action | "*"}` {
  return `mediapackagev2:${action}` as `mediapackagev2:${Mediapackagev2Action | "*"}`;
}
