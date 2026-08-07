export const agentRegistryActions = [
  "CreateRegistry",
  "CreateRegistryRecord",
  "DeleteRegistry",
  "DeleteRegistryRecord",
  "GetDiscoverableRegistryRecord",
  "GetRegistry",
  "GetRegistryRecord",
  "InvokeRegistryMcp",
  "ListDiscoverableRegistryRecords",
  "ListRegistries",
  "ListRegistryRecords",
  "ListTagsForResource",
  "SearchDiscoverableRegistryRecords",
  "SubmitRegistryRecordForApproval",
  "TagResource",
  "UntagResource",
  "UpdateRegistry",
  "UpdateRegistryRecord",
  "UpdateRegistryRecordStatus",
] as const;

export type AgentRegistryAction = (typeof agentRegistryActions)[number];

export function agentRegistry(action: AgentRegistryAction | "*"): `agent-registry:${AgentRegistryAction | "*"}` {
  return `agent-registry:${action}` as `agent-registry:${AgentRegistryAction | "*"}`;
}
