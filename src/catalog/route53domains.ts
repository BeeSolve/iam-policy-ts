export const route53domainsActions = [
  "AcceptDomainTransferFromAnotherAwsAccount",
  "AssociateDelegationSignerToDomain",
  "CancelDomainTransferToAnotherAwsAccount",
  "CheckDomainAvailability",
  "CheckDomainTransferability",
  "DeleteDomain",
  "DeleteTagsForDomain",
  "DisableDomainAutoRenew",
  "DisableDomainTransferLock",
  "DisassociateDelegationSignerFromDomain",
  "EnableDomainAutoRenew",
  "EnableDomainTransferLock",
  "GetContactReachabilityStatus",
  "GetDomainDetail",
  "GetDomainSuggestions",
  "GetOperationDetail",
  "ListDomains",
  "ListOperations",
  "ListPrices",
  "ListTagsForDomain",
  "PushDomain",
  "RegisterDomain",
  "RejectDomainTransferFromAnotherAwsAccount",
  "RenewDomain",
  "ResendContactReachabilityEmail",
  "ResendOperationAuthorization",
  "RetrieveDomainAuthCode",
  "TransferDomain",
  "TransferDomainToAnotherAwsAccount",
  "UpdateDomainContact",
  "UpdateDomainContactPrivacy",
  "UpdateDomainNameservers",
  "UpdateTagsForDomain",
  "ViewBilling",
] as const;

export type Route53domainsAction = (typeof route53domainsActions)[number];

export function route53domains(action: Route53domainsAction | "*"): `route53domains:${Route53domainsAction | "*"}` {
  return `route53domains:${action}` as `route53domains:${Route53domainsAction | "*"}`;
}
