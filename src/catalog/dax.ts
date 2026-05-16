export const daxActions = [
  "BatchGetItem",
  "BatchWriteItem",
  "ConditionCheckItem",
  "CreateCluster",
  "CreateParameterGroup",
  "CreateSubnetGroup",
  "DecreaseReplicationFactor",
  "DeleteCluster",
  "DeleteItem",
  "DeleteParameterGroup",
  "DeleteSubnetGroup",
  "DescribeClusters",
  "DescribeDefaultParameters",
  "DescribeEvents",
  "DescribeParameterGroups",
  "DescribeParameters",
  "DescribeSubnetGroups",
  "GetItem",
  "IncreaseReplicationFactor",
  "ListTags",
  "PutItem",
  "Query",
  "RebootNode",
  "Scan",
  "TagResource",
  "UntagResource",
  "UpdateCluster",
  "UpdateItem",
  "UpdateParameterGroup",
  "UpdateSubnetGroup",
] as const;

export type DaxAction = (typeof daxActions)[number];

export function dax(action: DaxAction | "*"): `dax:${DaxAction | "*"}` {
  return `dax:${action}` as `dax:${DaxAction | "*"}`;
}
