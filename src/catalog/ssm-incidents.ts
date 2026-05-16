export const ssmIncidentsActions = [
  "BatchGetIncidentFindings",
  "CreateReplicationSet",
  "CreateResponsePlan",
  "CreateTimelineEvent",
  "DeleteIncidentRecord",
  "DeleteReplicationSet",
  "DeleteResourcePolicy",
  "DeleteResponsePlan",
  "DeleteTimelineEvent",
  "GetIncidentRecord",
  "GetReplicationSet",
  "GetResourcePolicies",
  "GetResponsePlan",
  "GetTimelineEvent",
  "ListIncidentFindings",
  "ListIncidentRecords",
  "ListRelatedItems",
  "ListReplicationSets",
  "ListResponsePlans",
  "ListTagsForResource",
  "ListTimelineEvents",
  "PutResourcePolicy",
  "StartIncident",
  "TagResource",
  "UntagResource",
  "UpdateDeletionProtection",
  "UpdateIncidentRecord",
  "UpdateRelatedItems",
  "UpdateReplicationSet",
  "UpdateResponsePlan",
  "UpdateTimelineEvent",
] as const;

export type SsmIncidentsAction = (typeof ssmIncidentsActions)[number];

export function ssmIncidents(action: SsmIncidentsAction | "*"): `ssm-incidents:${SsmIncidentsAction | "*"}` {
  return `ssm-incidents:${action}` as `ssm-incidents:${SsmIncidentsAction | "*"}`;
}
