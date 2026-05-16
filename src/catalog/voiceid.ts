export const voiceidActions = [
  "AssociateFraudster",
  "CreateDomain",
  "CreateWatchlist",
  "DeleteDomain",
  "DeleteFraudster",
  "DeleteSpeaker",
  "DeleteWatchlist",
  "DescribeComplianceConsent",
  "DescribeDomain",
  "DescribeFraudster",
  "DescribeFraudsterRegistrationJob",
  "DescribeSpeaker",
  "DescribeSpeakerEnrollmentJob",
  "DescribeWatchlist",
  "DisassociateFraudster",
  "EvaluateSession",
  "ListDomains",
  "ListFraudsterRegistrationJobs",
  "ListFraudsters",
  "ListSpeakerEnrollmentJobs",
  "ListSpeakers",
  "ListTagsForResource",
  "ListWatchlists",
  "OptOutSpeaker",
  "RegisterComplianceConsent",
  "StartFraudsterRegistrationJob",
  "StartSpeakerEnrollmentJob",
  "TagResource",
  "UntagResource",
  "UpdateDomain",
  "UpdateWatchlist",
] as const;

export type VoiceidAction = (typeof voiceidActions)[number];

export function voiceid(action: VoiceidAction | "*"): `voiceid:${VoiceidAction | "*"}` {
  return `voiceid:${action}` as `voiceid:${VoiceidAction | "*"}`;
}
