export const migrationhubOrchestratorActions = [
  "CreateTemplate",
  "CreateWorkflow",
  "CreateWorkflowStep",
  "CreateWorkflowStepGroup",
  "DeleteTemplate",
  "DeleteWorkflow",
  "DeleteWorkflowStep",
  "DeleteWorkflowStepGroup",
  "GetMessage",
  "GetTemplate",
  "GetTemplateStep",
  "GetTemplateStepGroup",
  "GetWorkflow",
  "GetWorkflowStep",
  "GetWorkflowStepGroup",
  "ListPlugins",
  "ListTagsForResource",
  "ListTemplates",
  "ListTemplateStepGroups",
  "ListTemplateSteps",
  "ListWorkflows",
  "ListWorkflowStepGroups",
  "ListWorkflowSteps",
  "RegisterPlugin",
  "RetryWorkflowStep",
  "SendMessage",
  "StartWorkflow",
  "StopWorkflow",
  "TagResource",
  "UntagResource",
  "UpdateTemplate",
  "UpdateWorkflow",
  "UpdateWorkflowStep",
  "UpdateWorkflowStepGroup",
] as const;

export type MigrationhubOrchestratorAction = (typeof migrationhubOrchestratorActions)[number];

export function migrationhubOrchestrator(action: MigrationhubOrchestratorAction | "*"): `migrationhub-orchestrator:${MigrationhubOrchestratorAction | "*"}` {
  return `migrationhub-orchestrator:${action}` as `migrationhub-orchestrator:${MigrationhubOrchestratorAction | "*"}`;
}
