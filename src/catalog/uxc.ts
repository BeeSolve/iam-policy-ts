export const uxcActions = [
  "DeleteAccountColor",
  "GetAccountColor",
  "GetAccountCustomizations",
  "ListServices",
  "PutAccountColor",
  "UpdateAccountCustomizations",
] as const;

export type UxcAction = (typeof uxcActions)[number];

export function uxc(action: UxcAction | "*"): `uxc:${UxcAction | "*"}` {
  return `uxc:${action}` as `uxc:${UxcAction | "*"}`;
}
