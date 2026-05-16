export const secretsmanagerActions = [
  "BatchGetSecretValue",
  "CancelRotateSecret",
  "CreateSecret",
  "DeleteResourcePolicy",
  "DeleteSecret",
  "DescribeSecret",
  "GetRandomPassword",
  "GetResourcePolicy",
  "GetSecretValue",
  "ListSecrets",
  "ListSecretVersionIds",
  "PutResourcePolicy",
  "PutSecretValue",
  "RemoveRegionsFromReplication",
  "ReplicateSecretToRegions",
  "RestoreSecret",
  "RotateSecret",
  "StopReplicationToReplica",
  "TagResource",
  "UntagResource",
  "UpdateSecret",
  "UpdateSecretVersionStage",
  "ValidateResourcePolicy",
] as const;

export type SecretsmanagerAction = (typeof secretsmanagerActions)[number];

export function secretsmanager(action: SecretsmanagerAction | "*"): `secretsmanager:${SecretsmanagerAction | "*"}` {
  return `secretsmanager:${action}` as `secretsmanager:${SecretsmanagerAction | "*"}`;
}
