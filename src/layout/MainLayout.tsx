import { useTheme } from "@context/themContext";
import React from "react";
import { Keyboard, View } from "react-native";
import { styleGlobal } from "src/styles";

type PropsType = {
  children: React.ReactNode;
  isSafe?: boolean;
};
function MainLayout({ children, isSafe = false }: PropsType) {
  const { theme } = useTheme();
  return (
    <View
      onTouchStart={() => Keyboard.dismiss()}
      style={[styleGlobal.container, { backgroundColor: theme.background }]}
    >
      {children}
    </View>
  );
}

export default MainLayout;
