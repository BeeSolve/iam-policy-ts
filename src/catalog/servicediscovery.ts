export const servicediscoveryActions = [
  "CreateHttpNamespace",
  "CreatePrivateDnsNamespace",
  "CreatePublicDnsNamespace",
  "CreateService",
  "DeleteNamespace",
  "DeleteResourcePolicy",
  "DeleteService",
  "DeleteServiceAttributes",
  "DeregisterInstance",
  "DiscoverInstances",
  "DiscoverInstancesRevision",
  "GetInstance",
  "GetInstancesHealthStatus",
  "GetNamespace",
  "GetOperation",
  "GetResourcePolicy",
  "GetService",
  "GetServiceAttributes",
  "ListInstances",
  "ListNamespaces",
  "ListOperations",
  "ListServices",
  "ListTagsForResource",
  "PutResourcePolicy",
  "RegisterInstance",
  "TagResource",
  "UntagResource",
  "UpdateHttpNamespace",
  "UpdateInstanceCustomHealthStatus",
  "UpdatePrivateDnsNamespace",
  "UpdatePublicDnsNamespace",
  "UpdateService",
  "UpdateServiceAttributes",
] as const;

export type ServicediscoveryAction = (typeof servicediscoveryActions)[number];

export function servicediscovery(action: ServicediscoveryAction | "*"): `servicediscovery:${ServicediscoveryAction | "*"}` {
  return `servicediscovery:${action}` as `servicediscovery:${ServicediscoveryAction | "*"}`;
}
