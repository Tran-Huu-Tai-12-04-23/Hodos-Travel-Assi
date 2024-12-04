import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import { useAuth } from "@context/authContext";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import MainLayout from "@layout/MainLayout";
import { navigate } from "@navigation/NavigationService";
import { APP_ROUTE } from "@navigation/route";
import SearchIcon from "assets/svg/search-icon";
import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BestDestination from "./BestDestination";
import Header from "./Header";
import LoginHelper from "./LoginHelper";

function HomeScreen() {
  const { theme } = useTheme();
  const { user } = useAuth();
  return (
    <MainLayout>
      {user && <Header />}
      {!user && <LoginHelper />}
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        {Platform.OS === "ios" && user && <Separator height={120} />}

        <Separator height={20} />
        <Row
          full
          direction="column"
          start
          style={{ paddingHorizontal: normalize(20) }}
        >
          <TextDefault
            style={{
              fontFamily: "Main",
            }}
            size={normalize(26)}
            color={theme.textSecond}
          >
            Explore the{" "}
          </TextDefault>
          <TextDefault
            style={{
              fontFamily: "Main",
            }}
          >
            <TextDefault size={normalize(26)} color={theme.text}>
              Beautiful
            </TextDefault>
            {"  "}
            <TextDefault size={normalize(26)} color={theme.hightLight}>
              world!
            </TextDefault>
          </TextDefault>
        </Row>
        <Separator height={20} />
        <TouchableOpacity onPress={() => navigate(APP_ROUTE.SEARCH_SCREEN)}>
          <Row
            between
            style={{
              marginHorizontal: normalize(20),
              padding: normalize(15),
              backgroundColor: theme.inputBackground,
              borderRadius: normalize(10),
            }}
          >
            <SearchIcon color={theme.textSecond} />
          </Row>
        </TouchableOpacity>
        {/* <Separator height={20} />
        <Categories /> */}
        <Separator height={20} />
        {/* <BannerSlide /> */}
        <Separator height={20} />
        <BestDestination />
        <Separator height={100} />
      </ScrollView>
    </MainLayout>
  );
}

export default HomeScreen;
