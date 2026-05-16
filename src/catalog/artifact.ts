export const artifactActions = [
  "AcceptAgreement",
  "AcceptNdaForAgreement",
  "GetAccountSettings",
  "GetAgreement",
  "GetCustomerAgreement",
  "GetNdaForAgreement",
  "GetReport",
  "GetReportMetadata",
  "GetTermForReport",
  "ListAgreements",
  "ListCustomerAgreements",
  "ListReports",
  "ListReportVersions",
  "PutAccountSettings",
  "TerminateAgreement",
] as const;

export type ArtifactAction = (typeof artifactActions)[number];

export function artifact(action: ArtifactAction | "*"): `artifact:${ArtifactAction | "*"}` {
  return `artifact:${action}` as `artifact:${ArtifactAction | "*"}`;
}
