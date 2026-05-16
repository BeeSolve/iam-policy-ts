export const cloudshellActions = [
  "ApproveCommand",
  "CreateEnvironment",
  "CreateSession",
  "DeleteEnvironment",
  "DescribeEnvironments",
  "GetEnvironmentStatus",
  "GetFileDownloadUrls",
  "GetFileUploadUrls",
  "PutCredentials",
  "StartEnvironment",
  "StopEnvironment",
] as const;

export type CloudshellAction = (typeof cloudshellActions)[number];

export function cloudshell(action: CloudshellAction | "*"): `cloudshell:${CloudshellAction | "*"}` {
  return `cloudshell:${action}` as `cloudshell:${CloudshellAction | "*"}`;
}
