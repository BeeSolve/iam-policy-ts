export const sqsActions = [
  "AddPermission",
  "CancelMessageMoveTask",
  "ChangeMessageVisibility",
  "CreateQueue",
  "DeleteMessage",
  "DeleteQueue",
  "GetQueueAttributes",
  "GetQueueUrl",
  "ListDeadLetterSourceQueues",
  "ListMessageMoveTasks",
  "ListQueues",
  "ListQueueTags",
  "PurgeQueue",
  "ReceiveMessage",
  "RemovePermission",
  "SendMessage",
  "SetQueueAttributes",
  "StartMessageMoveTask",
  "TagQueue",
  "UntagQueue",
] as const;

export type SqsAction = (typeof sqsActions)[number];

export function sqs(action: SqsAction | "*"): `sqs:${SqsAction | "*"}` {
  return `sqs:${action}` as `sqs:${SqsAction | "*"}`;
}
