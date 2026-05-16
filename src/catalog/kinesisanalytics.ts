export const kinesisanalyticsActions = [
  "AddApplicationInput",
  "AddApplicationOutput",
  "AddApplicationReferenceDataSource",
  "CreateApplication",
  "DeleteApplication",
  "DeleteApplicationOutput",
  "DeleteApplicationReferenceDataSource",
  "DescribeApplication",
  "DiscoverInputSchema",
  "GetApplicationState",
  "ListApplications",
  "ListTagsForResource",
  "StartApplication",
  "StopApplication",
  "TagResource",
  "UntagResource",
  "UpdateApplication",
] as const;

export type KinesisanalyticsAction = (typeof kinesisanalyticsActions)[number];

export function kinesisanalytics(action: KinesisanalyticsAction | "*"): `kinesisanalytics:${KinesisanalyticsAction | "*"}` {
  return `kinesisanalytics:${action}` as `kinesisanalytics:${KinesisanalyticsAction | "*"}`;
}
