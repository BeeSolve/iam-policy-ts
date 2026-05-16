export const acmPcaActions = [
  "CreateCertificateAuthority",
  "CreateCertificateAuthorityAuditReport",
  "CreatePermission",
  "DeleteCertificateAuthority",
  "DeletePermission",
  "DeletePolicy",
  "DescribeCertificateAuthority",
  "DescribeCertificateAuthorityAuditReport",
  "GetCertificate",
  "GetCertificateAuthorityCertificate",
  "GetCertificateAuthorityCsr",
  "GetPolicy",
  "ImportCertificateAuthorityCertificate",
  "IssueCertificate",
  "ListCertificateAuthorities",
  "ListPermissions",
  "ListTags",
  "PutPolicy",
  "RestoreCertificateAuthority",
  "RevokeCertificate",
  "TagCertificateAuthority",
  "UntagCertificateAuthority",
  "UpdateCertificateAuthority",
] as const;

export type AcmPcaAction = (typeof acmPcaActions)[number];

export function acmPca(action: AcmPcaAction | "*"): `acm-pca:${AcmPcaAction | "*"}` {
  return `acm-pca:${action}` as `acm-pca:${AcmPcaAction | "*"}`;
}
