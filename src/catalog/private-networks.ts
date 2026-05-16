export const privateNetworksActions = [
  "AcknowledgeOrderReceipt",
  "ActivateDeviceIdentifier",
  "ActivateNetworkSite",
  "ConfigureAccessPoint",
  "CreateNetwork",
  "CreateNetworkSite",
  "DeactivateDeviceIdentifier",
  "DeleteNetwork",
  "DeleteNetworkSite",
  "GetDeviceIdentifier",
  "GetNetwork",
  "GetNetworkResource",
  "GetNetworkSite",
  "GetOrder",
  "ListDeviceIdentifiers",
  "ListNetworkResources",
  "ListNetworks",
  "ListNetworkSites",
  "ListOrders",
  "ListTagsForResource",
  "Ping",
  "StartNetworkResourceUpdate",
  "TagResource",
  "UntagResource",
  "UpdateNetworkSite",
  "UpdateNetworkSitePlan",
] as const;

export type PrivateNetworksAction = (typeof privateNetworksActions)[number];

export function privateNetworks(action: PrivateNetworksAction | "*"): `private-networks:${PrivateNetworksAction | "*"}` {
  return `private-networks:${action}` as `private-networks:${PrivateNetworksAction | "*"}`;
}
