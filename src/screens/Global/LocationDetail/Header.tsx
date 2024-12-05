import { IconButton } from "@components/Button";
import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { goBack } from "@navigation/NavigationService";
import BackIcon from "assets/svg/back-icon";
import BookmarkIcon from "assets/svg/bookmark-icon";
import React from "react";
import { TouchableOpacity, View } from "react-native";

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
      <TextDefault bold color={theme.primary} size={normalize(14)}>
        {title || "Detail"}
      </TextDefault>
      <View>
        <IconButton
          icon={<BookmarkIcon color={theme.backgroundSecond} />}
          onPress={function (): void {}}
        />
      </View>
    </Row>
  );
}

export default Header;
