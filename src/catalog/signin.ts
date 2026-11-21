export const signinActions = [
  "Authenticate",
  "AuthorizeOAuth2Access",
  "BatchRevokeSessions",
  "CreateAccount",
  "CreateBearerToken",
  "CreateOAuth2PublicClient",
  "CreateOAuth2Token",
  "CreateTrustedIdentityPropagationApplicationForConsole",
  "DeleteConsoleAuthorizationConfiguration",
  "DeleteResourcePermissionStatement",
  "GetConsoleAuthorizationConfiguration",
  "GetResourcePolicy",
  "GetSession",
  "IntrospectOAuth2Token",
  "ListResourcePermissionStatements",
  "ListSessions",
  "ListTrustedIdentityPropagationApplicationsForConsole",
  "PutConsoleAuthorizationConfiguration",
  "PutResourcePermissionStatement",
  "RevokeOAuth2Token",
] as const;

export type SigninAction = (typeof signinActions)[number];

export function signin(action: SigninAction | "*"): `signin:${SigninAction | "*"}` {
  return `signin:${action}` as `signin:${SigninAction | "*"}`;
}
