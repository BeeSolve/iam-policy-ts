export const signinActions = [
  "Authenticate",
  "AuthorizeOAuth2Access",
  "CreateAccount",
  "CreateOAuth2Token",
  "CreateTrustedIdentityPropagationApplicationForConsole",
  "DeleteConsoleAuthorizationConfiguration",
  "DeleteResourcePermissionStatement",
  "GetConsoleAuthorizationConfiguration",
  "GetResourcePolicy",
  "ListResourcePermissionStatements",
  "ListTrustedIdentityPropagationApplicationsForConsole",
  "PutConsoleAuthorizationConfiguration",
  "PutResourcePermissionStatement",
] as const;

export type SigninAction = (typeof signinActions)[number];

export function signin(action: SigninAction | "*"): `signin:${SigninAction | "*"}` {
  return `signin:${action}` as `signin:${SigninAction | "*"}`;
}
