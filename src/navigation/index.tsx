import { useAuth } from "@context/authContext";
import { useTheme } from "@context/themContext";
import { ETheme } from "@context/useThemUtil";
import {
  DefaultTheme,
  NavigationContainer,
  NavigationState,
} from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import AppNavigator from "./AppNavigator";
import { navigationRef } from "./NavigationService";
import NotificationHandler from "./NotificationHandler";

function screenTracking(state: NavigationState | undefined): void {
  if (state) {
    const route = state?.routes[state.index];
    if (route.state) {
      return screenTracking(route?.state as any);
    }
    return console.log(`====== NAVIGATING to > ${route?.name}`);
  }
}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};
const MainNavigation = () => {
  const { user } = useAuth();
  const { themeName } = useTheme();
  return (
    <NavigationContainer
      theme={MyTheme}
      ref={navigationRef}
      onStateChange={screenTracking}
    >
      <StatusBar
        barStyle={themeName === ETheme.DARK ? "light-content" : "dark-content"}
      />
      <NotificationHandler />
      <AppNavigator />
    </NavigationContainer>
  );
};

export default MainNavigation;
