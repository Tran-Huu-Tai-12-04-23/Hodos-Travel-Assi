import { config } from "@helper/helpers";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import BottomTabNavigator from "./BottomTabNavigator";
import { APP_ROUTE, AUTH_ROUTE } from "./route";
import { AppRoutes } from "./screens/app";
import { AuthRoutes } from "./screens/auth";
const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        ...config,
      }}
      initialRouteName={AUTH_ROUTE.INTRO}
    >
      {AuthRoutes()}
      {AppRoutes()}
      <Screen name={APP_ROUTE.BOTTOM_TAB} component={BottomTabNavigator} />
    </Navigator>
  );
};

export default AppNavigator;
