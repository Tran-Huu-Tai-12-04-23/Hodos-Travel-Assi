import { localImages } from "assets/localImage";
import PersonalScreen from "src/screens/BottomTab/Personal";
import ScheduleScreen from "src/screens/BottomTab/Schedule";
import TextToSpeakScreen from "src/screens/BottomTab/SpeechToText";
import DetailFood from "src/screens/Includes/DetailFood";
import DetailLocationScreen from "src/screens/Includes/DetailLocation";
import DirectionScreen from "src/screens/Includes/Direction";
import SearchLocation from "src/screens/Includes/Search";
import { ROUTE_KEY } from "./route";

export const _DETAIL_SCREENS = [
  {
    route: ROUTE_KEY.DETAIL_LOCATION,
    component: DetailLocationScreen,
    iconActive: localImages().userActiveIcon,
    icon: localImages().userIcon,
  },
  {
    route: ROUTE_KEY.DIRECTION,
    component: DirectionScreen,
    iconActive: localImages().userActiveIcon,
    icon: localImages().userIcon,
  },
  {
    route: ROUTE_KEY.DETAIL_FOOD,
    component: DetailFood,
    iconActive: localImages().userActiveIcon,
    icon: localImages().userIcon,
  },
  {
    route: ROUTE_KEY.SEARCH,
    component: SearchLocation,
    iconActive: localImages().userActiveIcon,
    icon: localImages().userIcon,
  },
 
];
