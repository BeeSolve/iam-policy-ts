export const airflowActions = [
  "CreateCliToken",
  "CreateEnvironment",
  "CreateWebLoginToken",
  "DeleteEnvironment",
  "GetEnvironment",
  "InvokeRestApi",
  "ListEnvironments",
  "ListTagsForResource",
  "PublishMetrics",
  "TagResource",
  "UntagResource",
  "UpdateEnvironment",
] as const;

export type AirflowAction = (typeof airflowActions)[number];

export function airflow(action: AirflowAction | "*"): `airflow:${AirflowAction | "*"}` {
  return `airflow:${action}` as `airflow:${AirflowAction | "*"}`;
}
