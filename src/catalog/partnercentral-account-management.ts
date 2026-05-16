export const partnercentralAccountManagementActions = [
  "AccessLegacyPartnerCentral",
  "AccessMarketingCentral",
  "AccessProServeTools",
  "AssociatePartnerAccount",
  "AssociatePartnerUser",
  "DisassociatePartnerUser",
] as const;

export type PartnercentralAccountManagementAction = (typeof partnercentralAccountManagementActions)[number];

export function partnercentralAccountManagement(action: PartnercentralAccountManagementAction | "*"): `partnercentral-account-management:${PartnercentralAccountManagementAction | "*"}` {
  return `partnercentral-account-management:${action}` as `partnercentral-account-management:${PartnercentralAccountManagementAction | "*"}`;
}
