import { config } from "@helper/helpers";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Platform } from "react-native";
import HomeScreen from "src/screens/BottomTab/Home";
import ProfileScreen from "src/screens/BottomTab/Profile";
import ScheduleScreen from "src/screens/BottomTab/Schedule";
import { BOTTOM_TAB_ROUTE } from "../route";
import CustomBottomBar from "./CustomBottomBar";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {
          height: Platform.OS == "android" ? 60 : 80,
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        ...config,
      }}
      initialRouteName={BOTTOM_TAB_ROUTE.HOME}
      tabBar={(props) => <CustomBottomBar {...props} />}
    >
      <Screen name={BOTTOM_TAB_ROUTE.HOME} component={HomeScreen} />
      <Screen name={BOTTOM_TAB_ROUTE.CALENDER} component={ScheduleScreen} />
      <Screen name={BOTTOM_TAB_ROUTE.SEARCH} component={HomeScreen} />
      <Screen name={BOTTOM_TAB_ROUTE.MESSAGE} component={HomeScreen} />
      <Screen name={BOTTOM_TAB_ROUTE.PROFILE} component={ProfileScreen} />
    </Navigator>
  );
};

export default BottomTabNavigator;