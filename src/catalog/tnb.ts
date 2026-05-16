export const tnbActions = [
  "CancelSolNetworkOperation",
  "CreateSolFunctionPackage",
  "CreateSolNetworkInstance",
  "CreateSolNetworkPackage",
  "DeleteSolFunctionPackage",
  "DeleteSolNetworkInstance",
  "DeleteSolNetworkPackage",
  "GetSolFunctionInstance",
  "GetSolFunctionPackage",
  "GetSolFunctionPackageContent",
  "GetSolFunctionPackageDescriptor",
  "GetSolNetworkInstance",
  "GetSolNetworkOperation",
  "GetSolNetworkPackage",
  "GetSolNetworkPackageContent",
  "GetSolNetworkPackageDescriptor",
  "InstantiateSolNetworkInstance",
  "ListSolFunctionInstances",
  "ListSolFunctionPackages",
  "ListSolNetworkInstances",
  "ListSolNetworkOperations",
  "ListSolNetworkPackages",
  "ListTagsForResource",
  "PutSolFunctionPackageContent",
  "PutSolNetworkPackageContent",
  "TagResource",
  "TerminateSolNetworkInstance",
  "UntagResource",
  "UpdateSolFunctionPackage",
  "UpdateSolNetworkInstance",
  "UpdateSolNetworkPackage",
  "ValidateSolFunctionPackageContent",
  "ValidateSolNetworkPackageContent",
] as const;

export type TnbAction = (typeof tnbActions)[number];

export function tnb(action: TnbAction | "*"): `tnb:${TnbAction | "*"}` {
  return `tnb:${action}` as `tnb:${TnbAction | "*"}`;
}
