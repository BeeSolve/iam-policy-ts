export const ecsMcpActions = [
  "InvokeReadOnlyTools",
  "UseMcp",
] as const;

export type EcsMcpAction = (typeof ecsMcpActions)[number];

export function ecsMcp(action: EcsMcpAction | "*"): `ecs-mcp:${EcsMcpAction | "*"}` {
  return `ecs-mcp:${action}` as `ecs-mcp:${EcsMcpAction | "*"}`;
}
