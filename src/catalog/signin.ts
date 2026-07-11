export const signinActions = [
  "Authenticate",
  "AuthorizeOAuth2Access",
  "CreateAccount",
  "CreateOAuth2PublicClient",
  "CreateOAuth2Token",
  "CreateTrustedIdentityPropagationApplicationForConsole",
  "DeleteConsoleAuthorizationConfiguration",
  "DeleteResourcePermissionStatement",
  "GetConsoleAuthorizationConfiguration",
  "GetResourcePolicy",
  "IntrospectOAuth2Token",
  "ListResourcePermissionStatements",
  "ListTrustedIdentityPropagationApplicationsForConsole",
  "PutConsoleAuthorizationConfiguration",
  "PutResourcePermissionStatement",
  "RevokeOAuth2Token",
] as const;

export type SigninAction = (typeof signinActions)[number];

export function signin(action: SigninAction | "*"): `signin:${SigninAction | "*"}` {
  return `signin:${action}` as `signin:${SigninAction | "*"}`;
}
