export const servicequotasActions = [
  "AssociateServiceQuotaTemplate",
  "CreateSupportCase",
  "DeleteServiceQuotaIncreaseRequestFromTemplate",
  "DisassociateServiceQuotaTemplate",
  "GetAssociationForServiceQuotaTemplate",
  "GetAutoManagementConfiguration",
  "GetAWSDefaultServiceQuota",
  "GetQuotaUtilizationReport",
  "GetRequestedServiceQuotaChange",
  "GetServiceQuota",
  "GetServiceQuotaIncreaseRequestFromTemplate",
  "ListAWSDefaultServiceQuotas",
  "ListRequestedServiceQuotaChangeHistory",
  "ListRequestedServiceQuotaChangeHistoryByQuota",
  "ListServiceQuotaIncreaseRequestsInTemplate",
  "ListServiceQuotas",
  "ListServices",
  "ListTagsForResource",
  "PutServiceQuotaIncreaseRequestIntoTemplate",
  "RequestServiceQuotaIncrease",
  "StartAutoManagement",
  "StartQuotaUtilizationReport",
  "StopAutoManagement",
  "TagResource",
  "UntagResource",
  "UpdateAutoManagement",
] as const;

export type ServicequotasAction = (typeof servicequotasActions)[number];

export function servicequotas(action: ServicequotasAction | "*"): `servicequotas:${ServicequotasAction | "*"}` {
  return `servicequotas:${action}` as `servicequotas:${ServicequotasAction | "*"}`;
}
