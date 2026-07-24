export const artifactActions = [
  "AcceptAgreement",
  "AcceptNdaForAgreement",
  "CreateComplianceInquiry",
  "ExportComplianceInquiry",
  "GetAccountSettings",
  "GetAgreement",
  "GetComplianceInquiryMetadata",
  "GetCustomerAgreement",
  "GetNdaForAgreement",
  "GetReport",
  "GetReportMetadata",
  "GetTermForReport",
  "ListAgreements",
  "ListComplianceInquiries",
  "ListComplianceInquiryQueries",
  "ListCustomerAgreements",
  "ListReports",
  "ListReportVersions",
  "ListTagsForResource",
  "PutAccountSettings",
  "PutComplianceInquiryFeedback",
  "TagResource",
  "TerminateAgreement",
  "UntagResource",
] as const;

export type ArtifactAction = (typeof artifactActions)[number];

export function artifact(action: ArtifactAction | "*"): `artifact:${ArtifactAction | "*"}` {
  return `artifact:${action}` as `artifact:${ArtifactAction | "*"}`;
}
