export const sustainabilityActions = [
  "GetCarbonFootprintSummary",
  "GetEstimatedCarbonEmissions",
  "GetEstimatedCarbonEmissionsDimensionValues",
] as const;

export type SustainabilityAction = (typeof sustainabilityActions)[number];

export function sustainability(action: SustainabilityAction | "*"): `sustainability:${SustainabilityAction | "*"}` {
  return `sustainability:${action}` as `sustainability:${SustainabilityAction | "*"}`;
}
