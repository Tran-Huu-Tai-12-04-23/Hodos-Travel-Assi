import { Config } from "@baronha/react-native-multiple-image-picker";
import React from "react";
import { TouchableOpacity } from "react-native";

const config: Config = {
  maxSelect: 10,
  maxVideo: 10,
  primaryColor: "#FB9300",
  backgroundDark: "#2f2f2f",
  numberOfColumn: 4,
  mediaType: "all",
  selectBoxStyle: "number",
  selectMode: "multiple",
  language: "vi", // 🇻🇳 Vietnamese
  theme: "dark",
  isHiddenOriginalButton: false,
};

function WrapperImagePicker({ children }: { children: React.ReactNode }) {
  return <TouchableOpacity>{children}</TouchableOpacity>;
}

export default WrapperImagePicker;
