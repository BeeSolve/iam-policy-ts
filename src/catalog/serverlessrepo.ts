export const serverlessrepoActions = [
  "CreateApplication",
  "CreateApplicationVersion",
  "CreateCloudFormationChangeSet",
  "CreateCloudFormationTemplate",
  "DeleteApplication",
  "GetApplication",
  "GetApplicationPolicy",
  "GetCloudFormationTemplate",
  "ListApplicationDependencies",
  "ListApplications",
  "ListApplicationVersions",
  "PutApplicationPolicy",
  "SearchApplications",
  "UnshareApplication",
  "UpdateApplication",
] as const;

export type ServerlessrepoAction = (typeof serverlessrepoActions)[number];

export function serverlessrepo(action: ServerlessrepoAction | "*"): `serverlessrepo:${ServerlessrepoAction | "*"}` {
  return `serverlessrepo:${action}` as `serverlessrepo:${ServerlessrepoAction | "*"}`;
}
