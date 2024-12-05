import { IconButton } from "@components/Button";
import { Input } from "@components/Input";
import Row from "@components/Row";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { goBack } from "@navigation/NavigationService";
import BackIcon from "assets/svg/back-icon";
import FilterIcon from "assets/svg/filter-icon";
import SearchIcon from "assets/svg/search-icon";
import React from "react";
import { TouchableOpacity, View } from "react-native";

function Header() {
  const { theme } = useTheme();
  return (
    <Row
      full
      between
      style={{
        alignItems: "center",
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
      <View
        style={{
          width: "70%",
        }}
      >
        <Input
          leftIcon={<SearchIcon color={theme.textSecond} />}
          placeholder="Enter keywords"
          onChangeText={function (text: string): void {}}
          text={""}
        />
      </View>
      <View>
        <IconButton
          icon={<FilterIcon color={theme.textSecond} />}
          onPress={function (): void {}}
        />
      </View>
    </Row>
  );
}

export default Header;
