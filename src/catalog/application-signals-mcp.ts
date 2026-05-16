export const applicationSignalsMcpActions = [
  "CallReadOnlyTool",
  "InvokeMcp",
] as const;

export type ApplicationSignalsMcpAction = (typeof applicationSignalsMcpActions)[number];

export function applicationSignalsMcp(action: ApplicationSignalsMcpAction | "*"): `application-signals-mcp:${ApplicationSignalsMcpAction | "*"}` {
  return `application-signals-mcp:${action}` as `application-signals-mcp:${ApplicationSignalsMcpAction | "*"}`;
}
