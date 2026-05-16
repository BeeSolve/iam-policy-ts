export const textractActions = [
  "AnalyzeDocument",
  "AnalyzeExpense",
  "AnalyzeID",
  "CreateAdapter",
  "CreateAdapterVersion",
  "DeleteAdapter",
  "DeleteAdapterVersion",
  "DetectDocumentText",
  "GetAdapter",
  "GetAdapterVersion",
  "GetDocumentAnalysis",
  "GetDocumentTextDetection",
  "GetExpenseAnalysis",
  "GetLendingAnalysis",
  "GetLendingAnalysisSummary",
  "ListAdapters",
  "ListAdapterVersions",
  "ListTagsForResource",
  "StartDocumentAnalysis",
  "StartDocumentTextDetection",
  "StartExpenseAnalysis",
  "StartLendingAnalysis",
  "TagResource",
  "UntagResource",
  "UpdateAdapter",
] as const;

export type TextractAction = (typeof textractActions)[number];

export function textract(action: TextractAction | "*"): `textract:${TextractAction | "*"}` {
  return `textract:${action}` as `textract:${TextractAction | "*"}`;
}
