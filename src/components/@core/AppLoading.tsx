import { deviceHeight, deviceWidth } from "@helper/utils";
import React from "react";
import { ActivityIndicator } from "react-native";
import Row from "./Row";

function AppLoading() {
  return (
    <Row
      style={{ width: deviceWidth, height: deviceHeight }}
      center
      full
      direction="column"
      rowGap={20}
    >
      <ActivityIndicator />
    </Row>
  );
}

export default AppLoading;
