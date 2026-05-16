export const cloud9Actions = [
  "ActivateEC2Remote",
  "CreateEnvironmentEC2",
  "CreateEnvironmentMembership",
  "CreateEnvironmentSSH",
  "CreateEnvironmentToken",
  "DeleteEnvironment",
  "DeleteEnvironmentMembership",
  "DescribeEC2Remote",
  "DescribeEnvironmentMemberships",
  "DescribeEnvironments",
  "DescribeEnvironmentStatus",
  "DescribeSSHRemote",
  "GetEnvironmentConfig",
  "GetEnvironmentSettings",
  "GetMembershipSettings",
  "GetMigrationExperiences",
  "GetUserPublicKey",
  "GetUserSettings",
  "ListEnvironments",
  "ListTagsForResource",
  "ModifyTemporaryCredentialsOnEnvironmentEC2",
  "TagResource",
  "UntagResource",
  "UpdateEnvironment",
  "UpdateEnvironmentMembership",
  "UpdateEnvironmentSettings",
  "UpdateMembershipSettings",
  "UpdateSSHRemote",
  "UpdateUserSettings",
] as const;

export type Cloud9Action = (typeof cloud9Actions)[number];

export function cloud9(action: Cloud9Action | "*"): `cloud9:${Cloud9Action | "*"}` {
  return `cloud9:${action}` as `cloud9:${Cloud9Action | "*"}`;
}
