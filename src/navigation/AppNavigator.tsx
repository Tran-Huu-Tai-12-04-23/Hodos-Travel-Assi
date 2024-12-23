import { config } from "@helper/helpers";
import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { LoginScreen } from "src/screens/Auth";
import IntroScreen from "src/screens/Auth/Intro";
import RegisterScreen from "src/screens/Auth/Register";
import ChatBoxScreen from "src/screens/Global/ChatBox";
import RoomChatScreen from "src/screens/Global/ChatBox/Childs/Room";
import CreatePostScreen from "src/screens/Global/CreatePost";
import LocationDetailScreen from "src/screens/Global/LocationDetail";
import LocationMapSearchScreen from "src/screens/Global/LocationMapSearch";
import NotificationScreen from "src/screens/Global/Notification";
import PostDetailScreen from "src/screens/Global/PostDetail";
import PredictScreen from "src/screens/Global/Predict";
import PredictDetailScreen from "src/screens/Global/PredictDetail";
import SettingScreen from "src/screens/Global/Profile/Setting";
import SearchScreen from "src/screens/Global/Search";
import BottomTabNavigator from "./BottomTabNavigator";
import { APP_ROUTE, AUTH_ROUTE } from "./route";

const Stack = createSharedElementStackNavigator();

const screens = [
  { name: AUTH_ROUTE.INTRO, component: IntroScreen },
  { name: AUTH_ROUTE.LOGIN, component: LoginScreen },
  { name: AUTH_ROUTE.REGISTER, component: RegisterScreen },
  { name: APP_ROUTE.NOTIFICATION, component: NotificationScreen },
  {
    name: APP_ROUTE.CHAT_BOX,
    component: ChatBoxScreen,
  },
  {
    name: APP_ROUTE.LOCATION_DETAIL,
    component: LocationDetailScreen,
    sharedElements: (route: any) => {
      const { id } = route.params;
      console.log({
        id: `trip.${id}.image`,
      });
      return [`trip.${id}.image`];
    },
  },
  { name: APP_ROUTE.SEARCH_SCREEN, component: SearchScreen },
  { name: APP_ROUTE.SETTING, component: SettingScreen },
  {
    name: APP_ROUTE.LOCATION_MAP_SEARCH_SCREEN,
    component: LocationMapSearchScreen,
  },
  { name: APP_ROUTE.BOTTOM_TAB, component: BottomTabNavigator },
  { name: APP_ROUTE.ROOM_CHAT, component: RoomChatScreen },
  {
    name: APP_ROUTE.POST_DETAIL,
    component: PostDetailScreen,
    sharedElements: (route: any) => {
      const { data } = route.params;
      return [`post.${data.id}.image`];
    },
  },
  { name: APP_ROUTE.PREDICT, component: PredictScreen },
  { name: APP_ROUTE.PREDICT_DETAIL, component: PredictDetailScreen },
  { name: APP_ROUTE.POST_CREATE, component: CreatePostScreen },
];

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...config,
      }}
      initialRouteName={APP_ROUTE.BOTTOM_TAB}
    >
      {screens.map((screen) => (
        <Stack.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={{
            ...config,
          }}
          sharedElements={screen.sharedElements}
        />
      ))}
    </Stack.Navigator>
  );
};

export default AppNavigator;
