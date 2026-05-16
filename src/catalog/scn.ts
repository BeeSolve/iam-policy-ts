export const scnActions = [
  "AssignAdminPermissionsToUser",
  "CreateBillOfMaterialsImportJob",
  "CreateDataIntegrationFlow",
  "CreateDataLakeDataset",
  "CreateDataLakeNamespace",
  "CreateInstance",
  "CreateSSOApplication",
  "DeleteDataIntegrationFlow",
  "DeleteDataLakeDataset",
  "DeleteDataLakeNamespace",
  "DeleteInstance",
  "DeleteSSOApplication",
  "DescribeInstance",
  "GetBillOfMaterialsImportJob",
  "GetDataIntegrationEvent",
  "GetDataIntegrationFlow",
  "GetDataIntegrationFlowExecution",
  "GetDataLakeDataset",
  "GetDataLakeNamespace",
  "GetInstance",
  "ListAdminUsers",
  "ListDataIntegrationEvents",
  "ListDataIntegrationFlowExecutions",
  "ListDataIntegrationFlows",
  "ListDataLakeDatasets",
  "ListDataLakeNamespaces",
  "ListInstances",
  "ListTagsForResource",
  "RemoveAdminPermissionsForUser",
  "SendDataIntegrationEvent",
  "TagResource",
  "UntagResource",
  "UpdateDataIntegrationFlow",
  "UpdateDataLakeDataset",
  "UpdateDataLakeNamespace",
  "UpdateInstance",
] as const;

export type ScnAction = (typeof scnActions)[number];

export function scn(action: ScnAction | "*"): `scn:${ScnAction | "*"}` {
  return `scn:${action}` as `scn:${ScnAction | "*"}`;
}
