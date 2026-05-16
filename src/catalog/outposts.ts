export const outpostsActions = [
  "CancelCapacityTask",
  "CancelOrder",
  "CreateOrder",
  "CreateOutpost",
  "CreatePrivateConnectivityConfig",
  "CreateSite",
  "DeleteOutpost",
  "DeleteSite",
  "GetCapacityTask",
  "GetCatalogItem",
  "GetConnection",
  "GetOrder",
  "GetOutpost",
  "GetOutpostBillingInformation",
  "GetOutpostInstanceTypes",
  "GetOutpostSupportedInstanceTypes",
  "GetPrivateConnectivityConfig",
  "GetSite",
  "GetSiteAddress",
  "ListAssetInstances",
  "ListAssets",
  "ListBlockingInstancesForCapacityTask",
  "ListCapacityTasks",
  "ListCatalogItems",
  "ListOrders",
  "ListOutposts",
  "ListSites",
  "ListTagsForResource",
  "StartCapacityTask",
  "StartConnection",
  "TagResource",
  "UntagResource",
  "UpdateOutpost",
  "UpdateSite",
  "UpdateSiteAddress",
  "UpdateSiteRackPhysicalProperties",
] as const;

export type OutpostsAction = (typeof outpostsActions)[number];

export function outposts(action: OutpostsAction | "*"): `outposts:${OutpostsAction | "*"}` {
  return `outposts:${action}` as `outposts:${OutpostsAction | "*"}`;
}
