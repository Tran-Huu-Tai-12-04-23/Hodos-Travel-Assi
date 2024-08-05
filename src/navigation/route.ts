export const ROUTE_KEY = createEnum({
  BOTTOM_TAB: "BOTTOM_TAB",
  // =================================== auth route ==================================
  INTRO: "INTRO",
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  // ================================= main route ======================================
  MAIN_APP: "MAIN_APP",
  HOME: "HOME",

  // ============================
  SCHEDULE: "SCHEDULE",

  // ===================
  TEXT_TO_SPEAK: "TEXT_TO_SPEAK",
  // ===================
  PERSONAL: "PERSONAL",

  // =====================
  DETAIL_LOCATION: "DETAIL_LOCATION",
  DIRECTION: "DIRECTION",
  DIRECTION_LOCATION: "DIRECTION_LOCATION",
  DIRECTION_FOOD: "DIRECTION_FOOD",
  SAVED_LOCATION: "SAVED_LOCATION",
  SAVED_FOOD: "SAVED_FOOD",

  // =============
  DETAIL_FOOD: "DETAIL_FOOD",

  // ====
  SEARCH: "SEARCH",
});

function createEnum<T extends { [P in keyof T]: P }>(o: T) {
  return o;
}
