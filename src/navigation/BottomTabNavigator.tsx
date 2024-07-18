import QuickSearchingButton from "@components/QuickSearchingButton";
import Row from "@components/Row";
import { mainBg } from "@constants/Colors";
import {
  Entypo,
  FontAwesome6,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { config } from "@helper/helpers";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { TouchableOpacity } from "react-native";
import HomeDrawer from "src/Drawer/HomeDrawer";
import PersonalScreen from "src/screens/BottomTab/Personal";
import ScheduleScreen from "src/screens/BottomTab/Schedule";
import TextToSpeakScreen from "src/screens/BottomTab/SpeechToText";
import { styleGlobal } from "src/styles";
import { ROUTE_KEY } from "./route";

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <Row
      between
      style={[
        styleGlobal.shadowForce,
        {
          flexDirection: "row",
          height: 60,
          paddingHorizontal: 30,
          backgroundColor: mainBg,
        },
      ]}
    >
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;

        let icon;

        if (route.name === ROUTE_KEY.MAIN_APP) {
          icon = (
            <Entypo
              name="home"
              size={24}
              color={!isFocused ? "gray" : "black"}
            />
          );
        } else if (route.name === ROUTE_KEY.SCHEDULE) {
          icon = (
            <MaterialCommunityIcons
              name="calendar-collapse-horizontal"
              size={24}
              color={!isFocused ? "gray" : "black"}
            />
          );
        } else if (route.name === ROUTE_KEY.TEXT_TO_SPEAK) {
          icon = (
            <FontAwesome6
              name="microphone"
              size={24}
              color={!isFocused ? "gray" : "black"}
            />
          );
        } else if (route.name === ROUTE_KEY.PERSONAL) {
          icon = (
            <MaterialIcons
              name="person"
              size={24}
              color={!isFocused ? "gray" : "black"}
            />
          );
        } else return <QuickSearchingButton key={route.name} />;

        return (
          <TouchableOpacity
            key={index}
            style={{}}
            onPress={() => navigation.navigate(route.name)}
          >
            {icon}
          </TouchableOpacity>
        );
      })}
      {/* Custom Button */}
    </Row>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        ...config,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name={ROUTE_KEY.MAIN_APP} component={HomeDrawer} />
      <Tab.Screen name={ROUTE_KEY.SCHEDULE} component={ScheduleScreen} />
      <Tab.Screen name={"any"} component={ScheduleScreen} />
      <Tab.Screen
        name={ROUTE_KEY.TEXT_TO_SPEAK}
        component={TextToSpeakScreen}
      />
      <Tab.Screen name={ROUTE_KEY.PERSONAL} component={PersonalScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
