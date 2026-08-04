export const bedrockWebsearchActions = [
  "ExternalWebAccess",
  "InvokeFetch",
  "InvokeSearch",
] as const;

export type BedrockWebsearchAction = (typeof bedrockWebsearchActions)[number];

export function bedrockWebsearch(action: BedrockWebsearchAction | "*"): `bedrock-websearch:${BedrockWebsearchAction | "*"}` {
  return `bedrock-websearch:${action}` as `bedrock-websearch:${BedrockWebsearchAction | "*"}`;
}
