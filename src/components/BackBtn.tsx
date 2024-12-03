import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { goBack } from "@navigation/NavigationService";
import BackIcon from "assets/svg/back-icon";
import React from "react";
import { Platform, TouchableOpacity } from "react-native";

function BackBtn({ color }: { color?: string }) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={goBack}
      style={{
        position: "absolute",
        top: Platform.OS === "ios" ? 50 : 20,
        left: 20,
        zIndex: 1000,
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
  );
}

export default BackBtn;