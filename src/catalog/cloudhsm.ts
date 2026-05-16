export const cloudhsmActions = [
  "CopyBackupToRegion",
  "CreateCluster",
  "CreateHsm",
  "DeleteBackup",
  "DeleteCluster",
  "DeleteHsm",
  "DeleteResourcePolicy",
  "DescribeBackups",
  "DescribeClusters",
  "GetResourcePolicy",
  "InitializeCluster",
  "ListTags",
  "ModifyBackupAttributes",
  "ModifyCluster",
  "PutResourcePolicy",
  "RestoreBackup",
  "TagResource",
  "UntagResource",
] as const;

export type CloudhsmAction = (typeof cloudhsmActions)[number];

export function cloudhsm(action: CloudhsmAction | "*"): `cloudhsm:${CloudhsmAction | "*"}` {
  return `cloudhsm:${action}` as `cloudhsm:${CloudhsmAction | "*"}`;
}
