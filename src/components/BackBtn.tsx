import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { goBack } from "@navigation/NavigationService";
import BackIcon from "assets/svg/back-icon";
import { BlurView } from "expo-blur";
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
        borderRadius: 100,
        overflow: "hidden",
      }}
    >
      <BlurView
        intensity={10}
        tint="light"
        style={{
          borderRadius: 100,
          padding: normalize(10),
          width: normalize(40),
          height: normalize(40),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BackIcon color={theme.textSecond} />
      </BlurView>
    </TouchableOpacity>
  );
}

export default BackBtn;
