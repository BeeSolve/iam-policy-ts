export const serviceextractActions = [
  "GetConfig",
] as const;

export type ServiceextractAction = (typeof serviceextractActions)[number];

export function serviceextract(action: ServiceextractAction | "*"): `serviceextract:${ServiceextractAction | "*"}` {
  return `serviceextract:${action}` as `serviceextract:${ServiceextractAction | "*"}`;
}
