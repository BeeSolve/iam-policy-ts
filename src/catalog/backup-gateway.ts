export const backupGatewayActions = [
  "AssociateGatewayToServer",
  "Backup",
  "CreateGateway",
  "DeleteGateway",
  "DeleteHypervisor",
  "DisassociateGatewayFromServer",
  "GetBandwidthRateLimitSchedule",
  "GetGateway",
  "GetHypervisor",
  "GetHypervisorPropertyMappings",
  "GetVirtualMachine",
  "ImportHypervisorConfiguration",
  "ListGateways",
  "ListHypervisors",
  "ListTagsForResource",
  "ListVirtualMachines",
  "PutBandwidthRateLimitSchedule",
  "PutHypervisorPropertyMappings",
  "PutMaintenanceStartTime",
  "Restore",
  "StartVirtualMachinesMetadataSync",
  "TagResource",
  "TestHypervisorConfiguration",
  "UntagResource",
  "UpdateGatewayInformation",
  "UpdateGatewaySoftwareNow",
  "UpdateHypervisor",
] as const;

export type BackupGatewayAction = (typeof backupGatewayActions)[number];

export function backupGateway(action: BackupGatewayAction | "*"): `backup-gateway:${BackupGatewayAction | "*"}` {
  return `backup-gateway:${action}` as `backup-gateway:${BackupGatewayAction | "*"}`;
}
