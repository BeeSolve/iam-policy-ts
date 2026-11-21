export const agentDiscoveryActions = [
  "SearchPublicRecords",
] as const;

export type AgentDiscoveryAction = (typeof agentDiscoveryActions)[number];

export function agentDiscovery(action: AgentDiscoveryAction | "*"): `agent-discovery:${AgentDiscoveryAction | "*"}` {
  return `agent-discovery:${action}` as `agent-discovery:${AgentDiscoveryAction | "*"}`;
}
