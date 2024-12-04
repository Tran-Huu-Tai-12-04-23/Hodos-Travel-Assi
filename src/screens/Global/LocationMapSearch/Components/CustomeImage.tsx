import TextDefault from "@components/TextDefault";
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
        <Image
          source={{ uri: item.img }}
          style={[styles.image, { aspectRatio: 1.5 }]}
        />
        <TextDefault bold>{item.name}</TextDefault>
      </Animated.View>
    </View>
  );
};

export default CustomImage;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 34,
    overflow: "hidden",
    rowGap: 10,
    backgroundColor: "white",
    padding: 10,
    paddingBottom: 20,
  },
  image: {
    width: "100%",
    borderRadius: 24,
  },
});
