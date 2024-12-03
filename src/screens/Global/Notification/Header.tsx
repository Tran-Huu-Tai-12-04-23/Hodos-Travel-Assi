import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { goBack } from "@navigation/NavigationService";
import BackIcon from "assets/svg/back-icon";
import React from "react";
import { TouchableOpacity, View } from "react-native";

function Header() {
  const { theme } = useTheme();
  return (
    <Row
      full
      between
      style={{
        alignItems: "center",
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
        <TextDefault bold size={normalize(16)}>
          Notifications
        </TextDefault>
      </View>
      <TouchableOpacity>
        <TextDefault color={theme.hightLight}>Mark all</TextDefault>
      </TouchableOpacity>
    </Row>
  );
}

export default Header;
