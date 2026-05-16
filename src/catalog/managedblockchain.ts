export const managedblockchainActions = [
  "CreateAccessor",
  "CreateMember",
  "CreateNetwork",
  "CreateNode",
  "CreateProposal",
  "DeleteAccessor",
  "DeleteMember",
  "DeleteNode",
  "GET",
  "GetAccessor",
  "GetMember",
  "GetNetwork",
  "GetNode",
  "GetProposal",
  "Invoke",
  "InvokeRpcBitcoinMainnet",
  "InvokeRpcBitcoinTestnet",
  "InvokeRpcPolygonMainnet",
  "InvokeRpcPolygonMumbaiTestnet",
  "ListAccessors",
  "ListInvitations",
  "ListMembers",
  "ListNetworks",
  "ListNodes",
  "ListProposals",
  "ListProposalVotes",
  "ListTagsForResource",
  "POST",
  "RejectInvitation",
  "TagResource",
  "UntagResource",
  "UpdateMember",
  "UpdateNode",
  "VoteOnProposal",
] as const;

export type ManagedblockchainAction = (typeof managedblockchainActions)[number];

export function managedblockchain(action: ManagedblockchainAction | "*"): `managedblockchain:${ManagedblockchainAction | "*"}` {
  return `managedblockchain:${action}` as `managedblockchain:${ManagedblockchainAction | "*"}`;
}
