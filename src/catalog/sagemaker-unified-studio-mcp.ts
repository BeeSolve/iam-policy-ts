export const sagemakerUnifiedStudioMcpActions = [
  "AuthorizeVpce",
] as const;

export type SagemakerUnifiedStudioMcpAction = (typeof sagemakerUnifiedStudioMcpActions)[number];

export function sagemakerUnifiedStudioMcp(action: SagemakerUnifiedStudioMcpAction | "*"): `sagemaker-unified-studio-mcp:${SagemakerUnifiedStudioMcpAction | "*"}` {
  return `sagemaker-unified-studio-mcp:${action}` as `sagemaker-unified-studio-mcp:${SagemakerUnifiedStudioMcpAction | "*"}`;
}
