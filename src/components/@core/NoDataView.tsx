import { useTheme } from "@context/themContext";
import { deviceHeight } from "@helper/utils";
import NoDataItem from "assets/svg/nodata-icon";
import React from "react";
import { Text, View } from "react-native";

function NoDataView({ title }: any) {
  const { theme } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        minHeight: deviceHeight * 0.3,
      }}
    >
      <NoDataItem />
      <Text
        style={{
          fontSize: 18,
          color: theme.text,
        }}
      >
        {title}
      </Text>
    </View>
  );
}

export default NoDataView;
