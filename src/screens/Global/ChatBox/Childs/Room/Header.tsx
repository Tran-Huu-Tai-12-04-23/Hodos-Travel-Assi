import { IconButton } from "@components/Button";
import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { goBack } from "@navigation/NavigationService";
import ArrowLeftIcon from "assets/svg/arrow-left-icon";
import React from "react";
import { Platform } from "react-native";
import * as Animatable from "react-native-animatable";

function Header() {
  const { theme } = useTheme();
  return (
    <Animatable.View
      animation="fadeIn"
      delay={100}
      duration={400}
      easing="ease-in-out"
      style={{
        zIndex: 100000,
      }}
    >
      <Row
        full
        between
        style={{
          alignItems: "center",
          backgroundColor: theme.primary,
          paddingTop: Platform.OS === "ios" ? normalize(45) : normalize(0),
          paddingBottom: normalize(10),
          paddingHorizontal: normalize(10),
        }}
        colGap={10}
      >
        <IconButton icon={<ArrowLeftIcon color={"white"} />} onPress={goBack} />
        <TextDefault size={normalize(16)} bold color={"white"}>
          New Chat
        </TextDefault>
      </Row>
    </Animatable.View>
  );
}

export default Header;
