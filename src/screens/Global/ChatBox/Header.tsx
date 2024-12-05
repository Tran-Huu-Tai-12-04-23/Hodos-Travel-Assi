import Avatar from "@components/Avatar";
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
        <Row
          start
          colGap={10}
          style={{
            alignItems: "center",
          }}
        >
          <IconButton
            icon={<ArrowLeftIcon color={theme.background} />}
            onPress={goBack}
          />
          <TextDefault size={normalize(16)} color={theme.background}>
            Hello ,
          </TextDefault>
          <TextDefault size={normalize(16)} bold color={theme.background}>
            Arthur
          </TextDefault>
        </Row>
        <Avatar
          size={40}
          url={
            "https://getillustrations.b-cdn.net//photos/pack/3d-avatar-male_lg.png"
          }
        />
      </Row>
    </Animatable.View>
  );
}

export default Header;
