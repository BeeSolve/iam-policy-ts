export const airflowServerlessActions = [
  "CreateWorkflow",
  "DeleteWorkflow",
  "GetTaskInstance",
  "GetWorkflow",
  "GetWorkflowRun",
  "ListTagsForResource",
  "ListTaskInstances",
  "ListWorkflowRuns",
  "ListWorkflows",
  "ListWorkflowVersions",
  "StartWorkflowRun",
  "StopWorkflowRun",
  "TagResource",
  "UntagResource",
  "UpdateWorkflow",
] as const;

export type AirflowServerlessAction = (typeof airflowServerlessActions)[number];

export function airflowServerless(action: AirflowServerlessAction | "*"): `airflow-serverless:${AirflowServerlessAction | "*"}` {
  return `airflow-serverless:${action}` as `airflow-serverless:${AirflowServerlessAction | "*"}`;
}
