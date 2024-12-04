import {
  horizontalTransaction,
  verticalTransaction,
} from "@navigation/config/transaction.config";
import { APP_ROUTE } from "@navigation/route";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LocationDetailScreen from "src/screens/Global/LocationDetail";
import LocationMapSearchScreen from "src/screens/Global/LocationMapSearch";
import NotificationScreen from "src/screens/Global/Notification";
import SettingScreen from "src/screens/Global/Profile/Setting";
import SearchScreen from "src/screens/Global/Search";

const { Screen } = createStackNavigator();

export const AppRoutes = () => {
  return (
    <>
      <Screen
        name={APP_ROUTE.NOTIFICATION}
        options={{ ...verticalTransaction } as any}
        component={NotificationScreen}
      />
      <Screen
        name={APP_ROUTE.LOCATION_DETAIL}
        options={{ ...verticalTransaction } as any}
        component={LocationDetailScreen}
      />
      <Screen
        name={APP_ROUTE.SEARCH_SCREEN}
        options={{ ...horizontalTransaction } as any}
        component={SearchScreen}
      />
      <Screen
        name={APP_ROUTE.SETTING}
        options={{ ...verticalTransaction } as any}
        component={SettingScreen}
      />
      <Screen
        name={APP_ROUTE.LOCATION_MAP_SEARCH_SCREEN}
        options={{ ...verticalTransaction } as any}
        component={LocationMapSearchScreen}
      />
    </>
  );
};
