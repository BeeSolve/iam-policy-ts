export const kafkaClusterActions = [
  "AlterCluster",
  "AlterClusterDynamicConfiguration",
  "AlterGroup",
  "AlterTopic",
  "AlterTopicDynamicConfiguration",
  "AlterTransactionalId",
  "Connect",
  "CreateTopic",
  "DeleteGroup",
  "DeleteTopic",
  "DescribeCluster",
  "DescribeClusterDynamicConfiguration",
  "DescribeGroup",
  "DescribeTopic",
  "DescribeTopicDynamicConfiguration",
  "DescribeTransactionalId",
  "ReadData",
  "WriteData",
  "WriteDataIdempotently",
] as const;

export type KafkaClusterAction = (typeof kafkaClusterActions)[number];

export function kafkaCluster(action: KafkaClusterAction | "*"): `kafka-cluster:${KafkaClusterAction | "*"}` {
  return `kafka-cluster:${action}` as `kafka-cluster:${KafkaClusterAction | "*"}`;
}
