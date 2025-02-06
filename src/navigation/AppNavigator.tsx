import { config } from "@helper/helpers";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import LocationDetailScreen from "src/screens/Global/LocationDetail";
import PredictScreen from "src/screens/Global/Predict";
import PredictDetailScreen from "src/screens/Global/PredictDetail";
import PredictResultScreen from "src/screens/Global/PredictResult";
import { APP_ROUTE } from "./route";

const Stack = createStackNavigator();

const screens = [
  { name: APP_ROUTE.PREDICT, component: PredictScreen },
  { name: APP_ROUTE.LOCATION_DETAIL, component: LocationDetailScreen },
  { name: APP_ROUTE.PREDICT_RESULT, component: PredictResultScreen },
  { name: APP_ROUTE.PREDICT_DETAIL, component: PredictDetailScreen },
];

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...config,
      }}
      initialRouteName={APP_ROUTE.PREDICT}
    >
      {screens.map((screen) => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            ...config,
          }}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AppNavigator;
