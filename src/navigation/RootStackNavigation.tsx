import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeDrawer from "src/Drawer/HomeDrawer";
import { _DETAIL_SCREENS } from "./_screen";
import { ROUTE_KEY } from "./route";

const Stack = createStackNavigator();

const RootStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTE_KEY.MAIN_APP} component={HomeDrawer} />
      {_DETAIL_SCREENS.map((screen) => (
        <Stack.Screen
          key={screen.route}
          name={screen.route}
          component={screen.component}
          options={{ headerTitle: "" }}
        />
      ))}
    </Stack.Navigator>
  );
};
export default RootStackNavigation;
