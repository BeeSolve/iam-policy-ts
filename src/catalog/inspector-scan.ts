export const inspectorScanActions = [
  "ScanSbom",
] as const;

export type InspectorScanAction = (typeof inspectorScanActions)[number];

export function inspectorScan(action: InspectorScanAction | "*"): `inspector-scan:${InspectorScanAction | "*"}` {
  return `inspector-scan:${action}` as `inspector-scan:${InspectorScanAction | "*"}`;
}
