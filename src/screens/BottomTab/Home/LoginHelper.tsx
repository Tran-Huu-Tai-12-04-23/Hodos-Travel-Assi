import { ButtonLink } from "@components/Button";
import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { navigate } from "@navigation/NavigationService";
import { AUTH_ROUTE } from "@navigation/route";
import React from "react";
import { Platform } from "react-native";

function LoginHelper() {
  const { theme } = useTheme();
  return (
    <Row
      full
      center
      direction="column"
      style={{
        backgroundColor: theme.primary,
        padding: 10,
        borderBottomEndRadius: normalize(20),
        borderBottomStartRadius: normalize(20),
      }}
    >
      {Platform.OS === "ios" && <Separator height={50} />}
      <TextDefault center bold color={theme.background}>
        Register an account to get more benefits from Us!
      </TextDefault>
      <ButtonLink
        title="Sign Up / Sign In"
        onPress={() => navigate(AUTH_ROUTE.LOGIN)}
      />
    </Row>
  );
}

export default LoginHelper;
