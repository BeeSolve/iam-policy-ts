export const agentRegistryActions = [
  "AssociatePublisher",
  "CompleteRegistryRecordTokenAuth",
  "CreatePublisher",
  "CreateRegistry",
  "CreateRegistryRecord",
  "DeletePublisher",
  "DeleteRegistry",
  "DeleteRegistryRecord",
  "DeleteResourcePolicy",
  "DisassociatePublisher",
  "GetDiscoverableRegistryRecord",
  "GetPublisher",
  "GetRegistry",
  "GetRegistryRecord",
  "GetResourcePolicy",
  "InvokeRegistryMcp",
  "ListDiscoverableRegistryRecords",
  "ListPublisherAssociations",
  "ListPublishers",
  "ListRegistries",
  "ListRegistryRecords",
  "ListTagsForResource",
  "PutResourcePolicy",
  "SearchDiscoverableRegistryRecords",
  "SubmitRegistryRecordForApproval",
  "TagResource",
  "UntagResource",
  "UpdatePublisherAssociationApprovalStatus",
  "UpdateRegistry",
  "UpdateRegistryRecord",
  "UpdateRegistryRecordStatus",
  "ValidatePublisher",
] as const;

export type AgentRegistryAction = (typeof agentRegistryActions)[number];

export function agentRegistry(action: AgentRegistryAction | "*"): `agent-registry:${AgentRegistryAction | "*"}` {
  return `agent-registry:${action}` as `agent-registry:${AgentRegistryAction | "*"}`;
}
