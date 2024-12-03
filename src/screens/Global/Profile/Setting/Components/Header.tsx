import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { goBack } from "@navigation/NavigationService";
import BackIcon from "assets/svg/back-icon";
import React from "react";
import { TouchableOpacity } from "react-native";

function Header() {
  const { theme } = useTheme();
  return (
    <Row
      between
      style={{
        height: normalize(40),
        paddingHorizontal: normalize(10),
      }}
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
        <BackIcon />
      </TouchableOpacity>
      <TextDefault bold style={{ fontSize: normalize(16) }}>
        Settings
      </TextDefault>
    </Row>
  );
}

export default Header;
