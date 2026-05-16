export const apptestActions = [
  "CreateTestCase",
  "CreateTestConfiguration",
  "CreateTestSuite",
  "DeleteTestCase",
  "DeleteTestConfiguration",
  "DeleteTestRun",
  "DeleteTestSuite",
  "GetTestCase",
  "GetTestConfiguration",
  "GetTestRunStep",
  "GetTestSuite",
  "ListTagsForResource",
  "ListTestCases",
  "ListTestConfigurations",
  "ListTestRuns",
  "ListTestRunSteps",
  "ListTestRunTestCases",
  "ListTestSuites",
  "StartTestRun",
  "TagResource",
  "UntagResource",
  "UpdateTestCase",
  "UpdateTestConfiguration",
  "UpdateTestSuite",
] as const;

export type ApptestAction = (typeof apptestActions)[number];

export function apptest(action: ApptestAction | "*"): `apptest:${ApptestAction | "*"}` {
  return `apptest:${action}` as `apptest:${ApptestAction | "*"}`;
}
