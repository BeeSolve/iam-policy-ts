export const workloadTelemetryActions = [
  "PutCertificateTelemetry",
] as const;

export type WorkloadTelemetryAction = (typeof workloadTelemetryActions)[number];

export function workloadTelemetry(action: WorkloadTelemetryAction | "*"): `workload-telemetry:${WorkloadTelemetryAction | "*"}` {
  return `workload-telemetry:${action}` as `workload-telemetry:${WorkloadTelemetryAction | "*"}`;
}
