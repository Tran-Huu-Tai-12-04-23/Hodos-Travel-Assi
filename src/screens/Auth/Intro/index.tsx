import { ButtonPrimary } from "@components/Button";
import Carousel from "@components/Carousel";
import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import { useTheme } from "@context/themContext";
import Helper, { normalize } from "@helper/helpers";
import { deviceHeight, deviceWidth } from "@helper/utils";
import { navigate } from "@navigation/NavigationService";
import { APP_ROUTE, AUTH_ROUTE } from "@navigation/route";
import { IMG } from "assets/localImage";
import { Image } from "expo-image";
import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import useLogin from "src/services/hooks/auth/useLogin";
import { styleGlobal } from "../../../styles";
export default function IntroScreen() {
  const { theme } = useTheme();
  const { onLogin } = useLogin();
  const [currentPage, setCurrentPage] = useState(0);

  const pages = useMemo(
    () => [
      <Image style={styles.image} source={IMG.intro1} />,
      <Image style={styles.image} source={IMG.intro2} />,
      <Image style={styles.image} source={IMG.intro3} />,
    ],
    []
  );

  const pagesContent = useMemo(
    () => [
      {
        title: "Life is short and the world is Wide",
        description:
          "At Friends tours and travel, we customize reliable and trustworthy educational tours to destinations all over the world",
      },
      {
        title: "It`s a big world out there go Explore",
        description:
          "To get the best of your adventure you just need to leave and go where you like. we are waiting for you",
      },
      {
        title: "People don’t take trips, trips take People",
        description:
          "To get the best of your adventure you just need to leave and go where you like. we are waiting for you",
      },
    ],
    []
  );

  useEffect(() => {
    const startUserData = async () => {
      const data = await Helper.getUserLoginData();
      if (data) {
        const res = await onLogin(JSON.parse(data));
        if (!res) return;
      }
    };
    startUserData();
  }, [onLogin]);

  const currentTitle = pagesContent[currentPage].title;
  const titleWords = currentTitle.split(" ");
  const lastWord = titleWords.pop();
  const titleWithoutLastWord = titleWords.join(" ");

  return (
    <View
      style={[
        styleGlobal.container,
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      <TouchableOpacity
        onPress={() => navigate(APP_ROUTE.BOTTOM_TAB)}
        style={[styles.skipButton, { backgroundColor: theme.primary }]}
      >
        <TextDefault style={{ color: theme.background }}>Skip</TextDefault>
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <View style={styles.carouselContainer}>
          <Carousel
            style={{
              flex: 1,
            }}
            pages={pages}
            onChangeCurrentPage={setCurrentPage}
          />
        </View>
        <View style={styles.textContainer}>
          <TextDefault
            bold
            center
            style={{ color: theme.hightLight }}
            size={normalize(22)}
          >
            <TextDefault bold center size={normalize(22)}>
              {titleWithoutLastWord}
            </TextDefault>
            {" " + lastWord}
          </TextDefault>
          <Separator height={normalize(10)} />
          <TextDefault center style={{ color: theme.textSecond }}>
            {pagesContent[currentPage].description}
          </TextDefault>
        </View>
        <Row
          full
          direction="column"
          rowGap={normalize(10)}
          style={styles.rowContainer}
        >
          <Row full center>
            {[0, 1, 2].map((index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  {
                    width:
                      index === currentPage ? normalize(40) : normalize(10),
                    backgroundColor:
                      index === currentPage ? theme.primary : theme.second,
                  },
                ]}
              />
            ))}
          </Row>
          <ButtonPrimary
            minWidth={"100%"}
            onPress={() => navigate(AUTH_ROUTE.LOGIN)}
            title="Get Started"
          />
        </Row>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  skipButton: {
    position: "absolute",
    right: 0,
    top: normalize(50),
    zIndex: 100000,
    padding: normalize(10),
    paddingHorizontal: normalize(30),
    borderTopLeftRadius: normalize(16),
    borderBottomLeftRadius: normalize(16),
  },
  carouselContainer: {
    flex: 0.7,
    borderBottomEndRadius: normalize(30),
    borderBottomStartRadius: normalize(30),
    overflow: "hidden",
  },
  textContainer: {
    flex: 0.2,
    padding: normalize(20),
  },
  rowContainer: {
    flex: 0.1,
    padding: normalize(20),
    marginTop: "auto",
    paddingBottom: normalize(30),
  },
  dot: {
    height: normalize(8),
    borderRadius: normalize(5),
    marginHorizontal: normalize(5),
  },
  image: {
    flex: 1,
    height: deviceHeight,
    width: deviceWidth,
  },
});
