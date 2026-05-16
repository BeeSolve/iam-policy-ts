export const workmailmessageflowActions = [
  "GetRawMessageContent",
  "PutRawMessageContent",
] as const;

export type WorkmailmessageflowAction = (typeof workmailmessageflowActions)[number];

export function workmailmessageflow(action: WorkmailmessageflowAction | "*"): `workmailmessageflow:${WorkmailmessageflowAction | "*"}` {
  return `workmailmessageflow:${action}` as `workmailmessageflow:${WorkmailmessageflowAction | "*"}`;
}
