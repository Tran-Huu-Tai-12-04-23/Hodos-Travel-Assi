import { verticalTransaction } from "@navigation/config/transaction.config";
import { AUTH_ROUTE } from "@navigation/route";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { LoginScreen } from "src/screens/Auth";
import IntroScreen from "src/screens/Auth/Intro";
import RegisterScreen from "src/screens/Auth/Register";

const { Screen } = createStackNavigator();

export const AuthRoutes = () => {
  return (
    <>
      <Screen name={AUTH_ROUTE.INTRO} component={IntroScreen} />
      <Screen
        options={
          {
            ...verticalTransaction,
          } as any
        }
        name={AUTH_ROUTE.LOGIN}
        component={LoginScreen}
      />
      <Screen
        options={
          {
            ...verticalTransaction,
          } as any
        }
        name={AUTH_ROUTE.REGISTER}
        component={RegisterScreen}
      />
      {/* auth route */}
    </>
  );
};
