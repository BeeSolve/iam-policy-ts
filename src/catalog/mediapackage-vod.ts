export const mediapackageVodActions = [
  "ConfigureLogs",
  "CreateAsset",
  "CreatePackagingConfiguration",
  "CreatePackagingGroup",
  "DeleteAsset",
  "DeletePackagingConfiguration",
  "DeletePackagingGroup",
  "DescribeAsset",
  "DescribePackagingConfiguration",
  "DescribePackagingGroup",
  "ListAssets",
  "ListPackagingConfigurations",
  "ListPackagingGroups",
  "ListTagsForResource",
  "TagResource",
  "UntagResource",
  "UpdatePackagingGroup",
] as const;

export type MediapackageVodAction = (typeof mediapackageVodActions)[number];

export function mediapackageVod(action: MediapackageVodAction | "*"): `mediapackage-vod:${MediapackageVodAction | "*"}` {
  return `mediapackage-vod:${action}` as `mediapackage-vod:${MediapackageVodAction | "*"}`;
}
