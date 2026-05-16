export const managedblockchainQueryActions = [
  "BatchGetTokenBalance",
  "GetAssetContract",
  "GetTokenBalance",
  "GetTransaction",
  "ListAssetContracts",
  "ListFilteredTransactionEvents",
  "ListTokenBalances",
  "ListTransactionEvents",
  "ListTransactions",
] as const;

export type ManagedblockchainQueryAction = (typeof managedblockchainQueryActions)[number];

export function managedblockchainQuery(action: ManagedblockchainQueryAction | "*"): `managedblockchain-query:${ManagedblockchainQueryAction | "*"}` {
  return `managedblockchain-query:${action}` as `managedblockchain-query:${ManagedblockchainQueryAction | "*"}`;
}
