export const opsworksCmActions = [
  "AssociateNode",
  "CreateBackup",
  "CreateServer",
  "DeleteBackup",
  "DeleteServer",
  "DescribeAccountAttributes",
  "DescribeBackups",
  "DescribeEvents",
  "DescribeNodeAssociationStatus",
  "DescribeServers",
  "DisassociateNode",
  "ExportServerEngineAttribute",
  "ListTagsForResource",
  "RestoreServer",
  "StartMaintenance",
  "TagResource",
  "UntagResource",
  "UpdateServer",
  "UpdateServerEngineAttributes",
] as const;

export type OpsworksCmAction = (typeof opsworksCmActions)[number];

export function opsworksCm(action: OpsworksCmAction | "*"): `opsworks-cm:${OpsworksCmAction | "*"}` {
  return `opsworks-cm:${action}` as `opsworks-cm:${OpsworksCmAction | "*"}`;
}
