export const firehoseActions = [
  "CreateDeliveryStream",
  "DeleteDeliveryStream",
  "DescribeDeliveryStream",
  "ListDeliveryStreams",
  "ListTagsForDeliveryStream",
  "PutRecord",
  "PutRecordBatch",
  "StartDeliveryStreamEncryption",
  "StopDeliveryStreamEncryption",
  "TagDeliveryStream",
  "UntagDeliveryStream",
  "UpdateDestination",
] as const;

export type FirehoseAction = (typeof firehoseActions)[number];

export function firehose(action: FirehoseAction | "*"): `firehose:${FirehoseAction | "*"}` {
  return `firehose:${action}` as `firehose:${FirehoseAction | "*"}`;
}
