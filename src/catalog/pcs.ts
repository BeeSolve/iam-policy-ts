export const pcsActions = [
  "AllowVendedLogDeliveryForResource",
  "CreateCluster",
  "CreateComputeNodeGroup",
  "CreateQueue",
  "DeleteCluster",
  "DeleteComputeNodeGroup",
  "DeleteQueue",
  "GetCluster",
  "GetComputeNodeGroup",
  "GetQueue",
  "ListClusters",
  "ListComputeNodeGroups",
  "ListQueues",
  "ListTagsForResource",
  "RegisterComputeNodeGroupInstance",
  "TagResource",
  "UntagResource",
  "UpdateCluster",
  "UpdateComputeNodeGroup",
  "UpdateQueue",
] as const;

export type PcsAction = (typeof pcsActions)[number];

export function pcs(action: PcsAction | "*"): `pcs:${PcsAction | "*"}` {
  return `pcs:${action}` as `pcs:${PcsAction | "*"}`;
}
