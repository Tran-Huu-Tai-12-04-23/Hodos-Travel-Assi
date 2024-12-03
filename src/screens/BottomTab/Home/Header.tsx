import Avatar from "@components/Avatar";
import { IconButton } from "@components/Button";
import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import { useAuth } from "@context/authContext";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { navigate } from "@navigation/NavigationService";
import { APP_ROUTE } from "@navigation/route";
import BellIcon from "assets/svg/bell-icon";

import React from "react";
import { Platform, View } from "react-native";
function Header() {
  const { user } = useAuth();
  const { theme } = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme.primary,
        borderBottomEndRadius: normalize(20),
        borderBottomStartRadius: normalize(20),
        position: "absolute",
        top: 0,
        zIndex: 100,
      }}
    >
      {Platform.OS === "ios" && <Separator height={50} />}
      <Row
        full
        between
        style={{
          alignItems: "center",
          paddingHorizontal: normalize(10),

          paddingBottom: normalize(10),
        }}
      >
        <Row
          style={{
            padding: normalize(5),
            borderRadius: normalize(50),
          }}
        >
          <Avatar source={{ uri: user?.avatar }} />
          <TextDefault
            style={{ marginLeft: 5 }}
            bold
            size={16}
            color={theme.background}
          >
            {user?.username}
          </TextDefault>
        </Row>
        <View
          style={{
            position: "relative",
          }}
        >
          <IconButton
            icon={<BellIcon color={theme.background} />}
            onPress={() => {
              navigate(APP_ROUTE.NOTIFICATION);
            }}
          />
          <View
            style={{
              height: 10,
              width: 10,
              borderRadius: 1000,
              backgroundColor: theme.hightLight,
              position: "absolute",
              top: 10,
              right: 10,
            }}
          />
        </View>
      </Row>
    </View>
  );
}

export default Header;
