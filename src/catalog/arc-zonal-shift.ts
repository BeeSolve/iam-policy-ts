export const arcZonalShiftActions = [
  "CancelPracticeRun",
  "CancelZonalShift",
  "CreatePracticeRunConfiguration",
  "DeletePracticeRunConfiguration",
  "GetAutoshiftObserverNotificationStatus",
  "GetManagedResource",
  "ListAutoshifts",
  "ListManagedResources",
  "ListZonalShifts",
  "StartPracticeRun",
  "StartZonalShift",
  "UpdateAutoshiftObserverNotificationStatus",
  "UpdatePracticeRunConfiguration",
  "UpdateZonalAutoshiftConfiguration",
  "UpdateZonalShift",
] as const;

export type ArcZonalShiftAction = (typeof arcZonalShiftActions)[number];

export function arcZonalShift(action: ArcZonalShiftAction | "*"): `arc-zonal-shift:${ArcZonalShiftAction | "*"}` {
  return `arc-zonal-shift:${action}` as `arc-zonal-shift:${ArcZonalShiftAction | "*"}`;
}
