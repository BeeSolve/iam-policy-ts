export const fisActions = [
  "CreateExperimentTemplate",
  "CreateTargetAccountConfiguration",
  "DeleteExperimentTemplate",
  "DeleteTargetAccountConfiguration",
  "GetAction",
  "GetExperiment",
  "GetExperimentTargetAccountConfiguration",
  "GetExperimentTemplate",
  "GetSafetyLever",
  "GetTargetAccountConfiguration",
  "GetTargetResourceType",
  "InjectApiInternalError",
  "InjectApiThrottleError",
  "InjectApiUnavailableError",
  "ListActions",
  "ListExperimentResolvedTargets",
  "ListExperiments",
  "ListExperimentTargetAccountConfigurations",
  "ListExperimentTemplates",
  "ListTagsForResource",
  "ListTargetAccountConfigurations",
  "ListTargetResourceTypes",
  "StartExperiment",
  "StopExperiment",
  "TagResource",
  "UntagResource",
  "UpdateExperimentTemplate",
  "UpdateSafetyLeverState",
  "UpdateTargetAccountConfiguration",
] as const;

export type FisAction = (typeof fisActions)[number];

export function fis(action: FisAction | "*"): `fis:${FisAction | "*"}` {
  return `fis:${action}` as `fis:${FisAction | "*"}`;
}
