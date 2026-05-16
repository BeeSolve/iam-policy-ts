export const appstudioActions = [
  "GetAccountStatus",
  "GetEnablementJobStatus",
  "StartEnablementJob",
  "StartRollbackEnablementJob",
  "StartTeamDeployment",
] as const;

export type AppstudioAction = (typeof appstudioActions)[number];

export function appstudio(action: AppstudioAction | "*"): `appstudio:${AppstudioAction | "*"}` {
  return `appstudio:${action}` as `appstudio:${AppstudioAction | "*"}`;
}
