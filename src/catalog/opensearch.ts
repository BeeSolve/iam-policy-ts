export const opensearchActions = [
  "ApplicationAccessAll",
  "CancelAutoOptimizeJob",
  "CancelDirectQuery",
  "DeleteAutoOptimizeJob",
  "GetAutoOptimizeJob",
  "GetDirectQuery",
  "GetDirectQueryResult",
  "ListAutoOptimizeJobs",
  "StartDirectQuery",
  "SubmitAutoOptimizeJob",
  "ViewLoginPage",
] as const;

export type OpensearchAction = (typeof opensearchActions)[number];

export function opensearch(action: OpensearchAction | "*"): `opensearch:${OpensearchAction | "*"}` {
  return `opensearch:${action}` as `opensearch:${OpensearchAction | "*"}`;
}
