export const agentaccessMcpActions = [
  "CallForwardedTool",
  "CheckConnectionStatus",
  "CloseSession",
  "DoubleClick",
  "ExecuteSequence",
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
  "Wait",
] as const;

export type AgentaccessMcpAction = (typeof agentaccessMcpActions)[number];

export function agentaccessMcp(action: AgentaccessMcpAction | "*"): `agentaccess-mcp:${AgentaccessMcpAction | "*"}` {
  return `agentaccess-mcp:${action}` as `agentaccess-mcp:${AgentaccessMcpAction | "*"}`;
}
