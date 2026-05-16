export const novaActActions = [
  "CreateAct",
  "CreateSession",
  "CreateWorkflowDefinition",
  "CreateWorkflowRun",
  "DeleteWorkflowDefinition",
  "DeleteWorkflowRun",
  "GetWorkflowDefinition",
  "GetWorkflowRun",
  "InvokeActStep",
  "ListActs",
  "ListModels",
  "ListSessions",
  "ListWorkflowDefinitions",
  "ListWorkflowRuns",
  "UpdateAct",
  "UpdateWorkflowRun",
] as const;

export type NovaActAction = (typeof novaActActions)[number];

export function novaAct(action: NovaActAction | "*"): `nova-act:${NovaActAction | "*"}` {
  return `nova-act:${action}` as `nova-act:${NovaActAction | "*"}`;
}
