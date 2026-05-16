export const eksMcpActions = [
  "CallPrivilegedTool",
  "CallReadOnlyTool",
  "InvokeMcp",
] as const;

export type EksMcpAction = (typeof eksMcpActions)[number];

export function eksMcp(action: EksMcpAction | "*"): `eks-mcp:${EksMcpAction | "*"}` {
  return `eks-mcp:${action}` as `eks-mcp:${EksMcpAction | "*"}`;
}
