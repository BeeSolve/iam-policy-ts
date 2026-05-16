export const kafkaconnectActions = [
  "CreateConnector",
  "CreateCustomPlugin",
  "CreateWorkerConfiguration",
  "DeleteConnector",
  "DeleteCustomPlugin",
  "DeleteWorkerConfiguration",
  "DescribeConnector",
  "DescribeConnectorOperation",
  "DescribeCustomPlugin",
  "DescribeWorkerConfiguration",
  "ListConnectorOperations",
  "ListConnectors",
  "ListCustomPlugins",
  "ListTagsForResource",
  "ListWorkerConfigurations",
  "TagResource",
  "UntagResource",
  "UpdateConnector",
] as const;

export type KafkaconnectAction = (typeof kafkaconnectActions)[number];

export function kafkaconnect(action: KafkaconnectAction | "*"): `kafkaconnect:${KafkaconnectAction | "*"}` {
  return `kafkaconnect:${action}` as `kafkaconnect:${KafkaconnectAction | "*"}`;
}
