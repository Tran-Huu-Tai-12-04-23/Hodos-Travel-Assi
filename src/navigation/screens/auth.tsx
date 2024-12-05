import { config } from "@helper/helpers";
import { AUTH_ROUTE } from "@navigation/route";
import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { LoginScreen } from "src/screens/Auth";
import IntroScreen from "src/screens/Auth/Intro";
import RegisterScreen from "src/screens/Auth/Register";

const Stack = createSharedElementStackNavigator();

export const AuthRoutes = () => {
  return (
    <>
      <Stack.Screen
        options={{
          ...config,
        }}
        name={AUTH_ROUTE.INTRO}
        component={IntroScreen}
      />
      <Stack.Screen
        options={{
          ...config,
        }}
        name={AUTH_ROUTE.LOGIN}
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          ...config,
        }}
        name={AUTH_ROUTE.REGISTER}
        component={RegisterScreen}
      />
      {/* auth route */}
    </>
  );
};
