export const amplifybackendActions = [
  "CloneBackend",
  "CreateBackend",
  "CreateBackendAPI",
  "CreateBackendAuth",
  "CreateBackendConfig",
  "CreateBackendStorage",
  "CreateToken",
  "DeleteBackend",
  "DeleteBackendAPI",
  "DeleteBackendAuth",
  "DeleteBackendStorage",
  "DeleteToken",
  "GenerateBackendAPIModels",
  "GetBackend",
  "GetBackendAPI",
  "GetBackendAPIModels",
  "GetBackendAuth",
  "GetBackendJob",
  "GetBackendStorage",
  "GetToken",
  "ImportBackendAuth",
  "ImportBackendStorage",
  "ListBackendJobs",
  "ListS3Buckets",
  "RemoveAllBackends",
  "RemoveBackendConfig",
  "UpdateBackendAPI",
  "UpdateBackendAuth",
  "UpdateBackendConfig",
  "UpdateBackendJob",
  "UpdateBackendStorage",
] as const;

export type AmplifybackendAction = (typeof amplifybackendActions)[number];

export function amplifybackend(action: AmplifybackendAction | "*"): `amplifybackend:${AmplifybackendAction | "*"}` {
  return `amplifybackend:${action}` as `amplifybackend:${AmplifybackendAction | "*"}`;
}
