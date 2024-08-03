import { whiteColor } from "@constants/Colors";
import { useAuth } from "@context/authContext";
import {
  DefaultTheme,
  NavigationContainer,
  NavigationState,
} from "@react-navigation/native";
import * as Updates from "expo-updates";
import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import AuthNavigator from "./AuthNavigator";
import { navigationRef } from "./NavigationService";
import RootStackNavigation from "./RootStackNavigation";

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

  useEffect(() => {
    const checkUpdate = async () => {
      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
        }
      } catch (e) {}
    };
    checkUpdate();
  }, []);

  return (
    <NavigationContainer
      theme={MyTheme}
      ref={navigationRef}
      onStateChange={screenTracking}
    >
      <StatusBar barStyle="dark-content" backgroundColor={whiteColor} />
      {user ? <RootStackNavigation /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigation;
