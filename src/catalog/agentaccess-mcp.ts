export const agentaccessMcpActions = [
  "CallForwardedTool",
  "CheckConnectionStatus",
  "DoubleClick",
  "GetScreenshot",
  "GetSessionInfo",
  "HoldKey",
  "InvokeMcp",
  "KeyPress",
  "LaunchApplication",
  "LeftClick",
  "LeftClickDrag",
  "LeftMouseDown",
  "LeftMouseUp",
  "MiddleClick",
  "MovePointer",
  "RightClick",
  "Scroll",
  "ToggleAppSwitcher",
  "TripleClick",
  "TypeText",
] as const;

export type AgentaccessMcpAction = (typeof agentaccessMcpActions)[number];

export function agentaccessMcp(action: AgentaccessMcpAction | "*"): `agentaccess-mcp:${AgentaccessMcpAction | "*"}` {
  return `agentaccess-mcp:${action}` as `agentaccess-mcp:${AgentaccessMcpAction | "*"}`;
}
