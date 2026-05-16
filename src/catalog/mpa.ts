export const mpaActions = [
  "CancelSession",
  "CreateApprovalTeam",
  "CreateIdentitySource",
  "DeleteIdentitySource",
  "DeleteInactiveApprovalTeamVersion",
  "DeleteResourcePolicy",
  "GetApprovalTeam",
  "GetIdentitySource",
  "GetPolicyVersion",
  "GetResourcePolicy",
  "GetSession",
  "ListApprovalTeams",
  "ListIdentitySources",
  "ListPolicies",
  "ListPolicyVersions",
  "ListResourcePolicies",
  "ListSessions",
  "ListTagsForResource",
  "PutResourcePolicy",
  "StartActiveApprovalTeamDeletion",
  "StartApprovalTeamBaseline",
  "StartSession",
  "TagResource",
  "UntagResource",
  "UpdateApprovalTeam",
] as const;

export type MpaAction = (typeof mpaActions)[number];

export function mpa(action: MpaAction | "*"): `mpa:${MpaAction | "*"}` {
  return `mpa:${action}` as `mpa:${MpaAction | "*"}`;
}
