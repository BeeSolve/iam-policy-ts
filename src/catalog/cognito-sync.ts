export const cognitoSyncActions = [
  "BulkPublish",
  "DeleteDataset",
  "DescribeDataset",
  "DescribeIdentityPoolUsage",
  "DescribeIdentityUsage",
  "GetBulkPublishDetails",
  "GetCognitoEvents",
  "GetIdentityPoolConfiguration",
  "ListDatasets",
  "ListIdentityPoolUsage",
  "ListRecords",
  "QueryRecords",
  "RegisterDevice",
  "SetCognitoEvents",
  "SetDatasetConfiguration",
  "SetIdentityPoolConfiguration",
  "SubscribeToDataset",
  "UnsubscribeFromDataset",
  "UpdateRecords",
] as const;

export type CognitoSyncAction = (typeof cognitoSyncActions)[number];

export function cognitoSync(action: CognitoSyncAction | "*"): `cognito-sync:${CognitoSyncAction | "*"}` {
  return `cognito-sync:${action}` as `cognito-sync:${CognitoSyncAction | "*"}`;
}
