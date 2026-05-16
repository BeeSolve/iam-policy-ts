export const activateActions = [
  "CreateForm",
  "GetAccountContact",
  "GetContentInfo",
  "GetCosts",
  "GetCredits",
  "GetMemberInfo",
  "GetProgram",
  "PutMemberInfo",
] as const;

export type ActivateAction = (typeof activateActions)[number];

export function activate(action: ActivateAction | "*"): `activate:${ActivateAction | "*"}` {
  return `activate:${action}` as `activate:${ActivateAction | "*"}`;
}
