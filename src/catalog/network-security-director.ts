export const networkSecurityDirectorActions = [
  "GetFinding",
  "GetResource",
  "ListAccountSummaries",
  "ListFindings",
  "ListInsights",
  "ListRemediations",
  "ListResources",
  "UpdateFinding",
] as const;

export type NetworkSecurityDirectorAction = (typeof networkSecurityDirectorActions)[number];

export function networkSecurityDirector(action: NetworkSecurityDirectorAction | "*"): `network-security-director:${NetworkSecurityDirectorAction | "*"}` {
  return `network-security-director:${action}` as `network-security-director:${NetworkSecurityDirectorAction | "*"}`;
}
