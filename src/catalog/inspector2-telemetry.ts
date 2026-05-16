export const inspector2TelemetryActions = [
  "NotifyHeartbeat",
  "SendTelemetry",
  "SendTelemetryEvent",
  "StartSession",
  "StopSession",
] as const;

export type Inspector2TelemetryAction = (typeof inspector2TelemetryActions)[number];

export function inspector2Telemetry(action: Inspector2TelemetryAction | "*"): `inspector2-telemetry:${Inspector2TelemetryAction | "*"}` {
  return `inspector2-telemetry:${action}` as `inspector2-telemetry:${Inspector2TelemetryAction | "*"}`;
}
