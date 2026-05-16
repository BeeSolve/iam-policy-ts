export const comprehendmedicalActions = [
  "DescribeEntitiesDetectionV2Job",
  "DescribeICD10CMInferenceJob",
  "DescribePHIDetectionJob",
  "DescribeRxNormInferenceJob",
  "DescribeSNOMEDCTInferenceJob",
  "DetectEntitiesV2",
  "DetectPHI",
  "InferICD10CM",
  "InferRxNorm",
  "InferSNOMEDCT",
  "ListEntitiesDetectionV2Jobs",
  "ListICD10CMInferenceJobs",
  "ListPHIDetectionJobs",
  "ListRxNormInferenceJobs",
  "ListSNOMEDCTInferenceJobs",
  "StartEntitiesDetectionV2Job",
  "StartICD10CMInferenceJob",
  "StartPHIDetectionJob",
  "StartRxNormInferenceJob",
  "StartSNOMEDCTInferenceJob",
  "StopEntitiesDetectionV2Job",
  "StopICD10CMInferenceJob",
  "StopPHIDetectionJob",
  "StopRxNormInferenceJob",
  "StopSNOMEDCTInferenceJob",
] as const;

export type ComprehendmedicalAction = (typeof comprehendmedicalActions)[number];

export function comprehendmedical(action: ComprehendmedicalAction | "*"): `comprehendmedical:${ComprehendmedicalAction | "*"}` {
  return `comprehendmedical:${action}` as `comprehendmedical:${ComprehendmedicalAction | "*"}`;
}
