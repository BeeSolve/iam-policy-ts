export const agentaccessMcpActions = [
  "CallForwardedTool",
  "CheckConnectionStatus",
  "DoubleClick",
  "GetScreenshot",
  "HoldKey",
  "InvokeMcp",
  "KeyPress",
  "LeftClick",
  "LeftClickDrag",
  "LeftMouseDown",
  "LeftMouseUp",
  "MiddleClick",
  "MovePointer",
  "RightClick",
  "Scroll",
  "TripleClick",
  "TypeText",
] as const;

export type AgentaccessMcpAction = (typeof agentaccessMcpActions)[number];

export function agentaccessMcp(action: AgentaccessMcpAction | "*"): `agentaccess-mcp:${AgentaccessMcpAction | "*"}` {
  return `agentaccess-mcp:${action}` as `agentaccess-mcp:${AgentaccessMcpAction | "*"}`;
}
