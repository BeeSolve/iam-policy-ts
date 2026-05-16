export const emrContainersActions = [
  "CancelJobRun",
  "CreateCertificate",
  "CreateJobTemplate",
  "CreateManagedEndpoint",
  "CreateSecurityConfiguration",
  "CreateVirtualCluster",
  "DeleteJobTemplate",
  "DeleteManagedEndpoint",
  "DeleteSecurityConfiguration",
  "DeleteVirtualCluster",
  "DescribeJobRun",
  "DescribeJobTemplate",
  "DescribeManagedEndpoint",
  "DescribeSecurityConfiguration",
  "DescribeVirtualCluster",
  "GetManagedEndpointSessionCredentials",
  "ListJobRuns",
  "ListJobTemplates",
  "ListManagedEndpoints",
  "ListSecurityConfigurations",
  "ListTagsForResource",
  "ListVirtualClusters",
  "StartJobRun",
  "TagResource",
  "UntagResource",
] as const;

export type EmrContainersAction = (typeof emrContainersActions)[number];

export function emrContainers(action: EmrContainersAction | "*"): `emr-containers:${EmrContainersAction | "*"}` {
  return `emr-containers:${action}` as `emr-containers:${EmrContainersAction | "*"}`;
}
