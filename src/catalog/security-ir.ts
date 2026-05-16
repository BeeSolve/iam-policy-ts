export const securityIrActions = [
  "BatchGetMemberAccountDetails",
  "CancelMembership",
  "CloseCase",
  "CreateCase",
  "CreateCaseComment",
  "CreateMembership",
  "GetCase",
  "GetCaseAttachmentDownloadUrl",
  "GetCaseAttachmentUploadUrl",
  "GetMembership",
  "ListCaseEdits",
  "ListCases",
  "ListComments",
  "ListInvestigations",
  "ListMemberships",
  "ListTagsForResource",
  "SendFeedback",
  "TagResource",
  "UntagResource",
  "UpdateCase",
  "UpdateCaseComment",
  "UpdateCaseStatus",
  "UpdateMembership",
  "UpdateResolverType",
] as const;

export type SecurityIrAction = (typeof securityIrActions)[number];

export function securityIr(action: SecurityIrAction | "*"): `security-ir:${SecurityIrAction | "*"}` {
  return `security-ir:${action}` as `security-ir:${SecurityIrAction | "*"}`;
}
