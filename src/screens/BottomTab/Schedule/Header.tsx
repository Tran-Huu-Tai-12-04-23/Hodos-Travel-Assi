import { IconButton } from "@components/Button";
import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { goBack, navigate } from "@navigation/NavigationService";
import { APP_ROUTE } from "@navigation/route";
import BackIcon from "assets/svg/back-icon";
import BellIcon from "assets/svg/bell-icon";
import React from "react";
import { Platform, TouchableOpacity, View } from "react-native";

function Header() {
  const { theme } = useTheme();
  return (
    <Row
      full
      between
      style={{
        alignItems: "center",
        position: "absolute",
        top: Platform.OS === "ios" ? normalize(40) : 0,
        paddingHorizontal: normalize(20),
      }}
      colGap={10}
    >
      <TouchableOpacity
        onPress={goBack}
        style={{
          backgroundColor: theme.inputBackground,
          borderRadius: 100,
          padding: normalize(10),
          width: normalize(40),
          height: normalize(40),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BackIcon color={theme.textSecond} />
      </TouchableOpacity>
      <View>
        <TextDefault bold size={normalize(20)}>
          {"Schedule"}
        </TextDefault>
      </View>
      <View
        style={{
          position: "relative",
        }}
      >
        <IconButton
          icon={<BellIcon />}
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
  );
}

export default Header;
