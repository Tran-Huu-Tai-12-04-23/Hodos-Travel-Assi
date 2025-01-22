import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import BellIcon from "assets/svg/bell-icon";
import React from "react";
import { Text } from "react-native";
import Row from "./Row";
import TextDefault from "./TextDefault";

function NotifyItem() {
  const { theme } = useTheme();
  return (
    <Row
      full
      between
      style={{
        padding: normalize(10),
        borderLeftColor: theme.primary,
        borderLeftWidth: normalize(5),
        backgroundColor: theme.background,
      }}
    >
      <BellIcon color={theme.textSecond} />
      <Row direction="column" rowGap={5} start>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: normalize(15),
          }}
        >
          Super offer
        </Text>
        <Text
          numberOfLines={1}
          style={{
            color: theme.textSecond,
          }}
        >
          Get 609% off in our first booking!
        </Text>
      </Row>
      <Row direction="column" rowGap={5} start style={{ marginTop: "auto" }}>
        <TextDefault size={normalize(10)} color={theme.textSecond} bold>
          Sun, 12:40pm
        </TextDefault>
      </Row>
    </Row>
  );
}

export default NotifyItem;
