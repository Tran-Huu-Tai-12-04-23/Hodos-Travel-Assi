import { whiteColor } from "@constants/Colors";
import CustomHeader from "@navigation/CustomHeader";
import React from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { styleGlobal } from "src/styles";

type PropsType = {
  onTouchStart?: () => void;
  children: React.ReactNode;
  style?: any;
  isBack?: boolean;
};
function MainLayout({ children, onTouchStart, style, isBack }: PropsType) {
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: whiteColor,
        paddingTop: Platform.OS === "android" ? 30 : 50,
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0} // Adjust this offset if needed
    >
      {isBack && <CustomHeader />}

      <View
        onTouchStart={onTouchStart}
        style={[
          styleGlobal.container,
          { backgroundColor: whiteColor, ...style },
        ]}
      >
        {children}
      </View>
    </KeyboardAvoidingView>
  );
}

export default MainLayout;
