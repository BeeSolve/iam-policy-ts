export const a2cActions = [
  "GetContainerizationJobDetails",
  "GetDeploymentJobDetails",
  "StartContainerizationJob",
  "StartDeploymentJob",
] as const;

export type A2cAction = (typeof a2cActions)[number];

export function a2c(action: A2cAction | "*"): `a2c:${A2cAction | "*"}` {
  return `a2c:${action}` as `a2c:${A2cAction | "*"}`;
}
