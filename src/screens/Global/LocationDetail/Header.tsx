import { IconButton } from "@components/Button";
import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { goBack } from "@navigation/NavigationService";
import BackIcon from "assets/svg/back-icon";
import BookmarkIcon from "assets/svg/bookmark-icon";
import React from "react";
import { Platform, TouchableOpacity, View } from "react-native";

function Header({ title }: { title: string }) {
  const { theme } = useTheme();
  return (
    <Row
      full
      between
      style={{
        alignItems: "center",
        position: "absolute",
        top: Platform.OS === "ios" ? normalize(40) : 0,
        paddingHorizontal: normalize(20),
      }}
      colGap={10}
    >
      <TouchableOpacity
        onPress={goBack}
        style={{
          backgroundColor: theme.inputBackground,
          borderRadius: 100,
          padding: normalize(10),
          width: normalize(40),
          height: normalize(40),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BackIcon color={theme.textSecond} />
      </TouchableOpacity>
      <View>
        <TextDefault bold color={theme.background} size={normalize(20)}>
          {title || "Detail"}
        </TextDefault>
      </View>
      <View>
        <IconButton
          icon={<BookmarkIcon color={theme.primary} />}
          onPress={function (): void {}}
        />
      </View>
    </Row>
  );
}

export default Header;
