export const continuumActions = [
  "AssociateCollector",
  "CreateCodeFinding",
  "CreateCodeScan",
  "CreateCollector",
  "CreateEnvironment",
  "CreateIntegration",
  "DeleteCollector",
  "DeleteEnvironment",
  "DeleteIntegration",
  "DisassociateCollector",
  "GetCodeFinding",
  "GetCodeIssue",
  "GetCodeIssueArtifact",
  "GetCodeScan",
  "GetCollector",
  "GetCollectorDataAccessAuthorization",
  "GetEnvironment",
  "GetIntegration",
  "GetResourcePolicy",
  "ListAssociatedCollectors",
  "ListAssociatedEnvironments",
  "ListCodeFindings",
  "ListCodeIssueArtifacts",
  "ListCodeIssues",
  "ListCodeScans",
  "ListCollectors",
  "ListEnvironments",
  "ListIntegrations",
  "PutResourcePolicy",
  "StartIntegrationAuthorization",
  "UpdateCollector",
  "UpdateEnvironment",
  "UpdateIntegration",
] as const;

export type ContinuumAction = (typeof continuumActions)[number];

export function continuum(action: ContinuumAction | "*"): `continuum:${ContinuumAction | "*"}` {
  return `continuum:${action}` as `continuum:${ContinuumAction | "*"}`;
}
