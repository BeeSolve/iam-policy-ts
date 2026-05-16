export const eksAuthActions = [
  "AssumeRoleForPodIdentity",
] as const;

export type EksAuthAction = (typeof eksAuthActions)[number];

export function eksAuth(action: EksAuthAction | "*"): `eks-auth:${EksAuthAction | "*"}` {
  return `eks-auth:${action}` as `eks-auth:${EksAuthAction | "*"}`;
}
