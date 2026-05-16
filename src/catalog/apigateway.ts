export const apigatewayActions = [
  "AddCertificateToDomain",
  "CreateAccessAssociation",
  "DELETE",
  "GET",
  "PATCH",
  "POST",
  "PUT",
  "RejectAccessAssociation",
  "RemoveCertificateFromDomain",
  "SetWebACL",
  "UpdateDomainNameManagementPolicy",
  "UpdateDomainNamePolicy",
  "UpdateRestApiPolicy",
] as const;

export type ApigatewayAction = (typeof apigatewayActions)[number];

export function apigateway(action: ApigatewayAction | "*"): `apigateway:${ApigatewayAction | "*"}` {
  return `apigateway:${action}` as `apigateway:${ApigatewayAction | "*"}`;
}
