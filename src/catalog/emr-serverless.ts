export const emrServerlessActions = [
  "AccessInteractiveEndpoints",
  "AccessLivyEndpoints",
  "AccessSystemProfileLogs",
  "CancelJobRun",
  "CreateApplication",
  "DeleteApplication",
  "GetApplication",
  "GetDashboardForJobRun",
  "GetJobRun",
  "GetResourceDashboard",
  "GetSession",
  "GetSessionEndpoint",
  "ListApplications",
  "ListJobRunAttempts",
  "ListJobRuns",
  "ListSessions",
  "ListTagsForResource",
  "StartApplication",
  "StartJobRun",
  "StartSession",
  "StopApplication",
  "TagResource",
  "TerminateSession",
  "UntagResource",
  "UpdateApplication",
] as const;

export type EmrServerlessAction = (typeof emrServerlessActions)[number];

export function emrServerless(action: EmrServerlessAction | "*"): `emr-serverless:${EmrServerlessAction | "*"}` {
  return `emr-serverless:${action}` as `emr-serverless:${EmrServerlessAction | "*"}`;
}
