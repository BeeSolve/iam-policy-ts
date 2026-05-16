export const lookoutmetricsActions = [
  "ActivateAnomalyDetector",
  "BackTestAnomalyDetector",
  "CreateAlert",
  "CreateAnomalyDetector",
  "CreateMetricSet",
  "DeactivateAnomalyDetector",
  "DeleteAlert",
  "DeleteAnomalyDetector",
  "DescribeAlert",
  "DescribeAnomalyDetectionExecutions",
  "DescribeAnomalyDetector",
  "DescribeMetricSet",
  "DetectMetricSetConfig",
  "GetAnomalyGroup",
  "GetDataQualityMetrics",
  "GetFeedback",
  "GetSampleData",
  "ListAlerts",
  "ListAnomalyDetectors",
  "ListAnomalyGroupRelatedMetrics",
  "ListAnomalyGroupSummaries",
  "ListAnomalyGroupTimeSeries",
  "ListMetricSets",
  "ListTagsForResource",
  "PutFeedback",
  "TagResource",
  "UntagResource",
  "UpdateAlert",
  "UpdateAnomalyDetector",
  "UpdateMetricSet",
] as const;

export type LookoutmetricsAction = (typeof lookoutmetricsActions)[number];

export function lookoutmetrics(action: LookoutmetricsAction | "*"): `lookoutmetrics:${LookoutmetricsAction | "*"}` {
  return `lookoutmetrics:${action}` as `lookoutmetrics:${LookoutmetricsAction | "*"}`;
}
