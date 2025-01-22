import { config } from "@helper/helpers";
import { APP_ROUTE } from "@navigation/route";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LocationDetailScreen from "src/screens/Global/LocationDetail";
import LocationMapSearchScreen from "src/screens/Global/LocationMapSearch";
import NotificationScreen from "src/screens/Global/Notification";
import SettingScreen from "src/screens/Global/Profile/Setting";
import SearchScreen from "src/screens/Global/Search";

const Stack = createStackNavigator();

export const AppRoutes = () => {
  return (
    <>
      <Stack.Screen
        options={{
          ...config,
        }}
        name={APP_ROUTE.NOTIFICATION}
        component={NotificationScreen}
      />
      <Stack.Screen
        options={{
          ...config,
        }}
        name={APP_ROUTE.LOCATION_DETAIL}
        component={LocationDetailScreen}
      />
      <Stack.Screen
        options={{
          ...config,
        }}
        name={APP_ROUTE.SEARCH_SCREEN}
        component={SearchScreen}
      />
      <Stack.Screen
        options={{
          ...config,
        }}
        name={APP_ROUTE.SETTING}
        component={SettingScreen}
      />
      <Stack.Screen
        options={{
          ...config,
        }}
        name={APP_ROUTE.LOCATION_MAP_SEARCH_SCREEN}
        component={LocationMapSearchScreen}
      />
    </>
  );
};
