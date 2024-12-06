import { IMG } from "assets/localImage";
import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";

function LoadingView() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.1)",
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 9999,
      }}
    >
      <Image source={IMG.loadingIcon} style={{ width: 100, height: 100 }} />
    </View>
  );
}

export default LoadingView;
