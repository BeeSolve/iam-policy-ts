export const signinActions = [
  "AuthorizeOAuth2Access",
  "CreateOAuth2Token",
  "CreateTrustedIdentityPropagationApplicationForConsole",
  "ListTrustedIdentityPropagationApplicationsForConsole",
] as const;

export type SigninAction = (typeof signinActions)[number];

export function signin(action: SigninAction | "*"): `signin:${SigninAction | "*"}` {
  return `signin:${action}` as `signin:${SigninAction | "*"}`;
}
