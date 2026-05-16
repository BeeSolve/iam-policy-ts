export const codedeployCommandsSecureActions = [
  "GetDeploymentSpecification",
  "PollHostCommand",
  "PutHostCommandAcknowledgement",
  "PutHostCommandComplete",
] as const;

export type CodedeployCommandsSecureAction = (typeof codedeployCommandsSecureActions)[number];

export function codedeployCommandsSecure(action: CodedeployCommandsSecureAction | "*"): `codedeploy-commands-secure:${CodedeployCommandsSecureAction | "*"}` {
  return `codedeploy-commands-secure:${action}` as `codedeploy-commands-secure:${CodedeployCommandsSecureAction | "*"}`;
}
