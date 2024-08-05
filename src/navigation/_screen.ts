import { default as DetailFood } from "src/screens/Includes/DetailFood";
import DetailLocationScreen from "src/screens/Includes/DetailLocation";
import DirectionFoodScreen from "src/screens/Includes/DirectionFood";
import { default as DirectionLocationScreen } from "src/screens/Includes/DirectionLocation";
import SearchLocation from "src/screens/Includes/Search";
import { ROUTE_KEY } from "./route";

export const _DETAIL_SCREENS = [
  {
    route: ROUTE_KEY.DETAIL_LOCATION,
    component: DetailLocationScreen,
  },
  {
    route: ROUTE_KEY.DIRECTION_LOCATION,
    component: DirectionLocationScreen,
  },
  {
    route: ROUTE_KEY.DIRECTION_FOOD,
    component: DirectionFoodScreen,
  },
  {
    route: ROUTE_KEY.DETAIL_FOOD,
    component: DetailFood,
  },
  {
    route: ROUTE_KEY.SEARCH,
    component: SearchLocation,
  },
];
