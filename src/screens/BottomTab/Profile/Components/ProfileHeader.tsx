import { IconButton } from "@components/Button";
import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { useAuth } from "@context/authContext";
import { useTheme } from "@context/themContext";
import { AntDesign } from "@expo/vector-icons";
import { normalize } from "@helper/helpers";
import { goBack, navigate } from "@navigation/NavigationService";
import { APP_ROUTE } from "@navigation/route";
import ArrowLeftIcon from "assets/svg/arrow-left-icon";
import React from "react";
import { Platform } from "react-native";
import LoginHelper from "../../Home/LoginHelper";

function ProfileHeader() {
  const { theme } = useTheme();
  const { user } = useAuth();
  return (
    <Row
      full
      direction="column"
      style={{
        backgroundColor: theme.primary,
        borderBottomEndRadius: normalize(20),
        borderBottomStartRadius: normalize(20),
        paddingVertical: normalize(20),
      }}
    >
      {user && (
        <Row
          full
          between
          style={{
            marginTop: Platform.OS === "ios" ? normalize(30) : 0,
            paddingHorizontal: normalize(10),
          }}
        >
          <IconButton
            icon={<ArrowLeftIcon color={"white"} />}
            onPress={goBack}
          />
          <TextDefault size={normalize(14)} bold color={"white"}>
            Profile
          </TextDefault>

          <IconButton
            icon={<AntDesign name="setting" size={24} color={"white"} />}
            onPress={() => navigate(APP_ROUTE.SETTING)}
          />
        </Row>
      )}
      {!user && <LoginHelper />}
    </Row>
  );
}

export default ProfileHeader;
