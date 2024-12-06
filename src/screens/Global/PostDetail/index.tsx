import BackBtn from "@components/BackBtn";
import TextDefault from "@components/TextDefault";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { deviceHeight, deviceWidth } from "@helper/utils";
import { useRoute } from "@react-navigation/native";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { styleGlobal } from "src/styles";

function PostDetailScreen() {
  const { data } = useRoute()?.params as {
    data: any;
  };
  const { theme } = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <BackBtn />
      <SharedElement id={`post.${data.id}.image`}>
        <Image
          source={{
            uri: data.img,
          }}
          style={{
            flex: 1,
            position: "absolute",
            width: deviceWidth,
            height: deviceHeight,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      </SharedElement>
      <View style={styles.postStats}>
        <TextDefault style={[styles.postStat, { color: "white" }]}>
          ❤️
        </TextDefault>
        <TextDefault>{data.heart}</TextDefault>
        <TextDefault style={[styles.postStat, { color: "white" }]}>
          💬
        </TextDefault>
        <TextDefault>{data.comment}</TextDefault>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
        }}
      >
        <TextDefault style={[styles.postTitle, { color: "white" }]}>
          {data.title}
        </TextDefault>
      </View>
    </View>
  );
}

export default PostDetailScreen;

const styles = StyleSheet.create({
  postContainer: {
    borderRadius: normalize(10),
    overflow: "hidden",
    ...styleGlobal.shadow,
  },
  postImage: {
    width: "100%",
    height: deviceWidth,
  },
  postTitle: {
    fontSize: normalize(16),
    fontWeight: "bold",
    margin: normalize(10),
  },
  postStats: {
    flexDirection: "column",
    justifyContent: "center",
    columnGap: 20,
    position: "absolute",
    right: 10,
    top: "50%",
    alignItems: "center",
  },
  postStat: {
    fontSize: normalize(14),
    padding: 10,
  },
});
