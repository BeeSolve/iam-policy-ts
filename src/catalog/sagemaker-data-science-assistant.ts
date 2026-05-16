export const sagemakerDataScienceAssistantActions = [
  "SendConversation",
] as const;

export type SagemakerDataScienceAssistantAction = (typeof sagemakerDataScienceAssistantActions)[number];

export function sagemakerDataScienceAssistant(action: SagemakerDataScienceAssistantAction | "*"): `sagemaker-data-science-assistant:${SagemakerDataScienceAssistantAction | "*"}` {
  return `sagemaker-data-science-assistant:${action}` as `sagemaker-data-science-assistant:${SagemakerDataScienceAssistantAction | "*"}`;
}
