import { IconButton } from "@components/Button";
import TextDefault from "@components/TextDefault";
import { normalize } from "@helper/helpers";
import { navigate } from "@navigation/NavigationService";
import { APP_ROUTE } from "@navigation/route";
import EyeIcon from "assets/svg/eye-icon";
import { BlurView } from "expo-blur";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
const CustomImage = ({ item, x, index, size, spacer }: any) => {
  const style = useAnimatedStyle(() => {
    const scale = interpolate(
      x.value,
      [(index - 2) * size, (index - 1) * size, index * size],
      [0.8, 1, 0.8]
    );
    return {
      transform: [{ scale }],
    };
  });

  if (!item.img) {
    return <View style={{ width: spacer }} key={index} />;
  }
  return (
    <View style={{ width: size }} key={index}>
      <Animated.View style={[styles.imageContainer, style]}>
        <BlurView
          intensity={1000}
          tint="light"
          style={{
            borderRadius: normalize(60),
          }}
        >
          <Image
            source={{ uri: item.img }}
            style={[styles.image, { aspectRatio: 1.5 }]}
          />

          <View
            style={{
              position: "absolute",
              top: normalize(10),
              right: normalize(10),
            }}
          >
            <IconButton
              icon={<EyeIcon color="white" />}
              onPress={() =>
                navigate(APP_ROUTE.LOCATION_DETAIL, { id: item.id })
              }
            />
          </View>
          <View
            style={{
              padding: normalize(15),
            }}
          >
            <TextDefault bold size={normalize(16)} color="white">
              {item.name}
            </TextDefault>
            <TextDefault color="white">{item.address} </TextDefault>
          </View>
        </BlurView>
      </Animated.View>
    </View>
  );
};

export default CustomImage;

const styles = StyleSheet.create({
  imageContainer: {
    overflow: "hidden",
    rowGap: 10,
    borderRadius: normalize(20),
  },
  image: {
    width: "100%",
    borderTopLeftRadius: normalize(20),
    borderRadius: normalize(20),
    borderTopRightRadius: normalize(20),
  },
});
