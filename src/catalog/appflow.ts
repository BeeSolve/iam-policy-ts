export const appflowActions = [
  "CancelFlowExecutions",
  "CreateConnectorProfile",
  "CreateFlow",
  "DeleteConnectorProfile",
  "DeleteFlow",
  "DescribeConnector",
  "DescribeConnectorEntity",
  "DescribeConnectorFields",
  "DescribeConnectorProfiles",
  "DescribeConnectors",
  "DescribeFlow",
  "DescribeFlowExecution",
  "DescribeFlowExecutionRecords",
  "DescribeFlows",
  "ListConnectorEntities",
  "ListConnectorFields",
  "ListConnectors",
  "ListFlows",
  "ListTagsForResource",
  "RegisterConnector",
  "ResetConnectorMetadataCache",
  "RunFlow",
  "StartFlow",
  "StopFlow",
  "TagResource",
  "UnRegisterConnector",
  "UntagResource",
  "UpdateConnectorProfile",
  "UpdateConnectorRegistration",
  "UpdateFlow",
  "UseConnectorProfile",
] as const;

export type AppflowAction = (typeof appflowActions)[number];

export function appflow(action: AppflowAction | "*"): `appflow:${AppflowAction | "*"}` {
  return `appflow:${action}` as `appflow:${AppflowAction | "*"}`;
}
