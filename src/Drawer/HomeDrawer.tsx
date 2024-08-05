import Avatar from "@components/Avatar";
import ButtonCustom from "@components/ButtonCustom";
import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { btnPrimary } from "@constants/Colors";
import { useAuth } from "@context/authContext";
import { deviceHeight } from "@helper/utils";
import { ROUTE_KEY } from "@navigation/route";
import {
  DrawerContent,
  DrawerContentScrollView,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { localImages } from "assets/localImage";
import HomeIcon from "assets/svg/HomeIcon";
import InfoIcon from "assets/svg/InfoIcon";
import LocationIcon from "assets/svg/LocationIcon";
import MapIcon from "assets/svg/MapIcon";
import MicIcon from "assets/svg/MicIcon";
import SaveFoodIcon from "assets/svg/SaveFood";
import React from "react";
import { _SCREENS_DRAWER } from "./_screen_drawer";

const Drawer = createDrawerNavigator();

const _renderDrawerContent = (props: any) => {
  const { logout, user } = useAuth();
  return (
    <DrawerContentScrollView style={{ minHeight: deviceHeight }}>
      <Row
        direction="column"
        start
        full
        style={{ padding: 20, alignItems: "center" }}
      >
        <Avatar size={92} link={localImages().avatarDefault} />
        <TextDefault bold>{user?.username || user?.displayName}</TextDefault>
      </Row>
      <DrawerContent {...props} />
      <Row style={{ marginTop: "100%" }} full center>
        <ButtonCustom
          primary
          labelStyle={{ fontWeight: "bold" }}
          minWidth={200}
          style={{ paddingHorizontal: 30, padding: 10, marginTop: 30 }}
          title="Log Out"
          onPress={logout}
        />
      </Row>
    </DrawerContentScrollView>
  );
};

const HomeDrawer = () => {
  const getIconFromScreen = (screenRoute: keyof typeof ROUTE_KEY) => {
    switch (screenRoute) {
      case ROUTE_KEY.HOME: {
        return {
          iconActive: <HomeIcon color={btnPrimary} />,
          icon: <HomeIcon color={btnPrimary} />,
        };
      }
      case ROUTE_KEY.SAVED_LOCATION: {
        return {
          iconActive: <LocationIcon color={btnPrimary} />,
          icon: <LocationIcon color={btnPrimary} />,
        };
      }
      case ROUTE_KEY.SAVED_FOOD: {
        return {
          iconActive: <SaveFoodIcon color={btnPrimary} />,
          icon: <SaveFoodIcon color={btnPrimary} />,
        };
      }
      case ROUTE_KEY.SCHEDULE: {
        return {
          iconActive: <MapIcon color={btnPrimary} />,
          icon: <MapIcon color={btnPrimary} />,
        };
      }
      case ROUTE_KEY.TEXT_TO_SPEAK: {
        return {
          iconActive: <MicIcon color={btnPrimary} />,
          icon: <MicIcon color={btnPrimary} />,
        };
      }
      default: {
        return {
          iconActive: <InfoIcon color={btnPrimary} />,
          icon: <InfoIcon color={btnPrimary} />,
        };
      }
    }
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        sceneContainerStyle: {
          paddingTop: 0,
        },
        headerShown: false,
        drawerActiveTintColor: btnPrimary,
      }}
      initialRouteName={ROUTE_KEY.HOME}
      drawerContent={_renderDrawerContent}
    >
      {_SCREENS_DRAWER.map((screen) => (
        <Drawer.Screen
          name={screen.route}
          key={screen.route}
          component={screen.component}
          options={{
            drawerActiveBackgroundColor: "rgba(0,0,0,0.03)",
            drawerInactiveTintColor: "#757575",
            drawerActiveTintColor: "#000",
            drawerLabel: screen.name,
            drawerLabelStyle: { fontSize: 10 },
            drawerIcon: ({ focused }) => {
              const icon: any = getIconFromScreen(screen.route);
              return focused ? icon.activeIcon : icon.icon;
            },
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
