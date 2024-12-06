import { IconButton } from "@components/Button";
import Row from "@components/Row";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { goBack } from "@navigation/NavigationService";
import ArrowLeftIcon from "assets/svg/arrow-left-icon";
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
        paddingTop: Platform.OS === "ios" ? normalize(40) : 0,
        backgroundColor: theme.primary,
        paddingHorizontal: normalize(10),
        padding: normalize(10),
      }}
      colGap={10}
    >
      <IconButton
        icon={<ArrowLeftIcon color={theme.text} />}
        onPress={goBack}
      />
    </Row>
  );
}

export default Header;
