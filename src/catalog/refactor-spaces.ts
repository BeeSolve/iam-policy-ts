export const refactorSpacesActions = [
  "CreateApplication",
  "CreateEnvironment",
  "CreateRoute",
  "CreateService",
  "DeleteApplication",
  "DeleteEnvironment",
  "DeleteResourcePolicy",
  "DeleteRoute",
  "DeleteService",
  "GetApplication",
  "GetEnvironment",
  "GetResourcePolicy",
  "GetRoute",
  "GetService",
  "ListApplications",
  "ListEnvironments",
  "ListEnvironmentVpcs",
  "ListRoutes",
  "ListServices",
  "ListTagsForResource",
  "PutResourcePolicy",
  "TagResource",
  "UntagResource",
  "UpdateRoute",
] as const;

export type RefactorSpacesAction = (typeof refactorSpacesActions)[number];

export function refactorSpaces(action: RefactorSpacesAction | "*"): `refactor-spaces:${RefactorSpacesAction | "*"}` {
  return `refactor-spaces:${action}` as `refactor-spaces:${RefactorSpacesAction | "*"}`;
}
