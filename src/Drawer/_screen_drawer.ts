import { btnPrimary, iconDefault } from "@constants/Colors";
import { ROUTE_KEY } from "@navigation/route";
import { localImages } from "assets/localImage";
import InfoIcon from "assets/svg/InfoIcon";
import MapIcon from "assets/svg/MapIcon";
import MicIcon from "assets/svg/MicIcon";
import React from "react";
import HomeScreen from "src/screens/BottomTab/Home";
import PersonalScreen from "src/screens/BottomTab/Personal";
import ScheduleScreen from "src/screens/BottomTab/Schedule";
import TextToSpeakScreen from "src/screens/BottomTab/SpeechToText";
import SaveFood from "src/screens/Includes/SaveFood";
import SaveLocation from "src/screens/Includes/SaveLocation";

export const _SCREENS_DRAWER = [
  {
    name: "Home",
    route: ROUTE_KEY.HOME,
    component: HomeScreen,

  },
  {
    name: "Location saved",
    route: ROUTE_KEY.SAVED_LOCATION,
    component: SaveLocation,

  },
  {
    name: "Food saved",
    route: ROUTE_KEY.SAVED_FOOD,
    component: SaveFood,

  },
  {
    name: "Suggest schedules",
    route: ROUTE_KEY.SCHEDULE,
    component: ScheduleScreen,

  },
  {
    name: "Text to speak",
    route: ROUTE_KEY.TEXT_TO_SPEAK,
    component: TextToSpeakScreen,

  },
  {
    name: "Common information",
    route: ROUTE_KEY.PERSONAL,
    component: PersonalScreen,

  },
];


