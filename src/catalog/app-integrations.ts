export const appIntegrationsActions = [
  "CreateApplication",
  "CreateApplicationAssociation",
  "CreateDataIntegration",
  "CreateDataIntegrationAssociation",
  "CreateDataIntegrationSchedule",
  "CreateEventIntegration",
  "CreateEventIntegrationAssociation",
  "DeleteApplication",
  "DeleteApplicationAssociation",
  "DeleteDataIntegration",
  "DeleteDataIntegrationAssociation",
  "DeleteEventIntegration",
  "DeleteEventIntegrationAssociation",
  "GetApplication",
  "GetDataIntegration",
  "GetDataIntegrationExecution",
  "GetDataIntegrationSchedule",
  "GetEventIntegration",
  "ListApplicationAssociations",
  "ListApplications",
  "ListDataIntegrationAssociations",
  "ListDataIntegrationExecutions",
  "ListDataIntegrations",
  "ListDataIntegrationSchedules",
  "ListEventIntegrationAssociations",
  "ListEventIntegrations",
  "ListTagsForResource",
  "StartDataIntegrationExecution",
  "TagResource",
  "UntagResource",
  "UpdateApplication",
  "UpdateDataIntegration",
  "UpdateDataIntegrationAssociation",
  "UpdateDataIntegrationSchedule",
  "UpdateEventIntegration",
] as const;

export type AppIntegrationsAction = (typeof appIntegrationsActions)[number];

export function appIntegrations(action: AppIntegrationsAction | "*"): `app-integrations:${AppIntegrationsAction | "*"}` {
  return `app-integrations:${action}` as `app-integrations:${AppIntegrationsAction | "*"}`;
}
