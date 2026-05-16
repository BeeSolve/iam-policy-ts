export const detectiveActions = [
  "AcceptInvitation",
  "BatchGetGraphMemberDatasources",
  "BatchGetMembershipDatasources",
  "CreateGraph",
  "CreateMembers",
  "DeleteGraph",
  "DeleteMembers",
  "DescribeOrganizationConfiguration",
  "DisableOrganizationAdminAccount",
  "DisassociateMembership",
  "EnableOrganizationAdminAccount",
  "GetFreeTrialEligibility",
  "GetGraphIngestState",
  "GetInvestigation",
  "GetMembers",
  "GetPricingInformation",
  "GetUsageInformation",
  "InvokeAssistant",
  "ListDatasourcePackages",
  "ListGraphs",
  "ListHighDegreeEntities",
  "ListIndicators",
  "ListInvestigations",
  "ListInvitations",
  "ListMembers",
  "ListOrganizationAdminAccount",
  "ListTagsForResource",
  "RejectInvitation",
  "SearchGraph",
  "StartInvestigation",
  "StartMonitoringMember",
  "TagResource",
  "UntagResource",
  "UpdateDatasourcePackages",
  "UpdateInvestigationState",
  "UpdateOrganizationConfiguration",
] as const;

export type DetectiveAction = (typeof detectiveActions)[number];

export function detective(action: DetectiveAction | "*"): `detective:${DetectiveAction | "*"}` {
  return `detective:${action}` as `detective:${DetectiveAction | "*"}`;
}
