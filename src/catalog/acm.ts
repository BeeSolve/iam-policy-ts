export const acmActions = [
  "AddTagsToCertificate",
  "DeleteCertificate",
  "DescribeCertificate",
  "ExportCertificate",
  "GetAccountConfiguration",
  "GetCertificate",
  "ImportCertificate",
  "ListCertificates",
  "ListTagsForCertificate",
  "PutAccountConfiguration",
  "RemoveTagsFromCertificate",
  "RenewCertificate",
  "RequestCertificate",
  "ResendValidationEmail",
  "RevokeCertificate",
  "SearchCertificates",
  "UpdateCertificateOptions",
] as const;

export type AcmAction = (typeof acmActions)[number];

export function acm(action: AcmAction | "*"): `acm:${AcmAction | "*"}` {
  return `acm:${action}` as `acm:${AcmAction | "*"}`;
}
