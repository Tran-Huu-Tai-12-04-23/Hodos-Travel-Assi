import { IconButton } from "@components/Button";
import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { goBack } from "@navigation/NavigationService";
import BackIcon from "assets/svg/back-icon";
import BookmarkIcon from "assets/svg/bookmark-icon";
import React from "react";
import { Platform, View } from "react-native";

function Header({ title }: { title: string }) {
  const { theme } = useTheme();
  return (
    <Row
      full
      between
      style={{
        alignItems: "center",
        paddingHorizontal: normalize(10),
        paddingBottom: 10,
        backgroundColor: theme.primary,
        paddingTop: Platform.OS === "ios" ? normalize(45) : 0,
      }}
      colGap={10}
    >
      <IconButton onPress={goBack} icon={<BackIcon color={"white"} />} />
      <TextDefault bold color={"white"} size={normalize(14)}>
        {title || "Detail"}
      </TextDefault>
      <View>
        <IconButton
          icon={<BookmarkIcon color={"white"} />}
          onPress={function (): void {}}
        />
      </View>
    </Row>
  );
}

export default Header;
