export const pollyActions = [
  "DeleteLexicon",
  "DescribeVoices",
  "GetLexicon",
  "GetSpeechSynthesisTask",
  "ListLexicons",
  "ListSpeechSynthesisTasks",
  "PutLexicon",
  "StartSpeechSynthesisStream",
  "StartSpeechSynthesisTask",
  "SynthesizeSpeech",
] as const;

export type PollyAction = (typeof pollyActions)[number];

export function polly(action: PollyAction | "*"): `polly:${PollyAction | "*"}` {
  return `polly:${action}` as `polly:${PollyAction | "*"}`;
}
