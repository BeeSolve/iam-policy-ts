export const amplifyuibuilderActions = [
  "CreateComponent",
  "CreateForm",
  "CreateTheme",
  "DeleteComponent",
  "DeleteForm",
  "DeleteTheme",
  "ExchangeCodeForToken",
  "ExportComponents",
  "ExportForms",
  "ExportThemes",
  "GetCodegenJob",
  "GetComponent",
  "GetForm",
  "GetMetadata",
  "GetTheme",
  "ListCodegenJobs",
  "ListComponents",
  "ListForms",
  "ListTagsForResource",
  "ListThemes",
  "PutMetadataFlag",
  "RefreshToken",
  "ResetMetadataFlag",
  "StartCodegenJob",
  "TagResource",
  "UntagResource",
  "UpdateComponent",
  "UpdateForm",
  "UpdateTheme",
] as const;

export type AmplifyuibuilderAction = (typeof amplifyuibuilderActions)[number];

export function amplifyuibuilder(action: AmplifyuibuilderAction | "*"): `amplifyuibuilder:${AmplifyuibuilderAction | "*"}` {
  return `amplifyuibuilder:${action}` as `amplifyuibuilder:${AmplifyuibuilderAction | "*"}`;
}
