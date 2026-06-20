export const mqActions = [
  "CreateBroker",
  "CreateConfiguration",
  "CreateReplicaBroker",
  "CreateTags",
  "CreateUser",
  "DeleteBroker",
  "DeleteConfiguration",
  "DeleteTags",
  "DeleteUser",
  "DescribeBroker",
  "DescribeBrokerEngineTypes",
  "DescribeBrokerInstanceOptions",
  "DescribeConfiguration",
  "DescribeConfigurationRevision",
  "DescribeSharedResources",
  "DescribeUser",
  "ListBrokers",
  "ListConfigurationRevisions",
  "ListConfigurations",
  "ListTags",
  "ListUsers",
  "Promote",
  "RebootBroker",
  "UpdateBroker",
  "UpdateBrokerAccessConfiguration",
  "UpdateConfiguration",
  "UpdateUser",
] as const;

export type MqAction = (typeof mqActions)[number];

export function mq(action: MqAction | "*"): `mq:${MqAction | "*"}` {
  return `mq:${action}` as `mq:${MqAction | "*"}`;
}
