import BackBtn from "@components/BackBtn";
import { IconButton } from "@components/Button";
import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import WrapperImagePicker from "@components/WrapperImagePicker";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { deviceHeight, deviceWidth } from "@helper/utils";
import ImgIcon from "assets/svg/img-icon";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { styleGlobal } from "src/styles";

function CreatePostScreen() {
  const { theme } = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <BackBtn />

      <View style={{ flex: 1 }}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={{
            flex: 1,
            width: deviceWidth,
            height: deviceHeight,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      </View>

      <Row
        full
        around
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: normalize(20),
          paddingHorizontal: normalize(20),
        }}
      >
        <IconButton
          icon={<ImgIcon color={theme.primary} />}
          onPress={() => {}}
        />
        <WrapperImagePicker>
          <TouchableOpacity
            style={{
              ...styleGlobal.border,
              borderRadius: 1000,
              borderColor: theme.primary,
            }}
          >
            <View
              style={{
                width: normalize(40),
                height: normalize(40),
                backgroundColor: theme.primary,
                borderRadius: 1000,
                margin: normalize(2),
              }}
            />
          </TouchableOpacity>
        </WrapperImagePicker>
        <TouchableOpacity>
          <TextDefault bold size={normalize(16)} color={theme.primary}>
            Text
          </TextDefault>
        </TouchableOpacity>
      </Row>
    </View>
  );
}

export default CreatePostScreen;

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
