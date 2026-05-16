export const appfabricActions = [
  "BatchGetUserAccessTasks",
  "ConnectAppAuthorization",
  "CreateAppAuthorization",
  "CreateAppBundle",
  "CreateIngestion",
  "CreateIngestionDestination",
  "DeleteAppAuthorization",
  "DeleteAppBundle",
  "DeleteIngestion",
  "DeleteIngestionDestination",
  "GetAppAuthorization",
  "GetAppBundle",
  "GetIngestion",
  "GetIngestionDestination",
  "ListAppAuthorizations",
  "ListAppBundles",
  "ListIngestionDestinations",
  "ListIngestions",
  "ListTagsForResource",
  "StartIngestion",
  "StartUserAccessTasks",
  "StopIngestion",
  "TagResource",
  "UntagResource",
  "UpdateAppAuthorization",
  "UpdateIngestionDestination",
] as const;

export type AppfabricAction = (typeof appfabricActions)[number];

export function appfabric(action: AppfabricAction | "*"): `appfabric:${AppfabricAction | "*"}` {
  return `appfabric:${action}` as `appfabric:${AppfabricAction | "*"}`;
}
