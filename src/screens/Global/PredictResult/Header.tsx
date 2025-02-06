import Row from "@components/@core/Row";
import TextDefault from "@components/@core/TextDefault";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import React from "react";
import { Platform } from "react-native";

function Header() {
  const { theme } = useTheme();
  return (
    <Row
      full
      between
      style={{
        alignItems: "center",
        paddingTop: Platform.OS === "ios" ? normalize(50) : 0,
        backgroundColor: theme.primary,
        paddingHorizontal: normalize(10),
        padding: normalize(10),
        justifyContent: "center",
      }}
      colGap={10}
    >
      <TextDefault bold size={normalize(14)} color="white">
        Predict result
      </TextDefault>
    </Row>
  );
}

export default Header;
