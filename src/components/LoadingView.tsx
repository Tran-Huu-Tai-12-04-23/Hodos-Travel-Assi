import React from "react";
import { ActivityIndicator, View } from "react-native";

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
      <ActivityIndicator color="blue" />
    </View>
  );
}

export default LoadingView;
