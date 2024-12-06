export const AUTH_ROUTE = createEnum({
  // =================================== auth route ==================================
  INTRO: "INTRO",
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
});

export const BOTTOM_TAB_ROUTE = createEnum({
  HOME: "HOME",
  EXPLORE: "EXPLORE",
  SEARCH: "SEARCH",
  MESSAGE: "MESSAGE",
  PROFILE: "PROFILE",
});

export const APP_ROUTE = createEnum({
  BOTTOM_TAB: "BOTTOM_TAB",
  LOCATION_DETAIL: "LOCATION_DETAIL",
  SEARCH_SCREEN: "SEARCH_SCREEN",
  LOCATION_MAP_SEARCH_SCREEN: "LOCATION_MAP_SEARCH_SCREEN",
  SETTING: "SETTING",
  NOTIFICATION: "NOTIFICATION",
  CHAT_BOX: "CHAT_BOX",
  ROOM_CHAT: "ROOM_CHAT",
  POST_DETAIL: "POST_DETAIL",
  PREDICT: "PREDICT",
  /// demo transaction
});

function createEnum<T extends { [P in keyof T]: P }>(o: T) {
  return o;
}
