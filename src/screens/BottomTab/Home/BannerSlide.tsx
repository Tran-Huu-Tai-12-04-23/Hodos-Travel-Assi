import Carousel from "@components/Carousel";
import Row from "@components/Row";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { Image } from "expo-image";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
function BannerSlide() {
  const pages = [];
  const [currentPage, setCurrentPage] = useState(0);
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <Carousel
        onChangeCurrentPage={setCurrentPage}
        style={styles.carousel}
        pages={pages.map((item, index) => (
          <Image key={index} source={item} style={styles.image} />
        ))}
      />
      <Row style={styles.dotsContainer} full center>
        {pages.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  index === currentPage ? theme.primary : theme.second,
              },
            ]}
          />
        ))}
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
  carousel: {
    height: 200,
  },
  image: {
    width: "100%",
    height: 200,
    objectFit: "cover",
  },
  dotsContainer: {
    alignItems: "center",
    marginTop: normalize(5),
  },
  dot: {
    width: normalize(10),
    height: normalize(10),
    borderRadius: 10,
    margin: 5,
  },
});

export default BannerSlide;
