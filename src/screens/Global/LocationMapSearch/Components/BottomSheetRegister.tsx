import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { deviceWidth } from "@helper/utils";
import LocationIcon from "assets/svg/location-icon";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
const MAX_VALUE = deviceWidth;
const MIN_VALUE = 0;
function BottomSheetRegister({}: {}) {
  const { theme } = useTheme();
  const offset = useSharedValue(-MAX_VALUE);

  const pan = Gesture.Pan()
    .onChange((event) => {
      offset.value = Math.min(offset.value + event.changeY, MAX_VALUE);
    })
    .onEnd(() => {
      if (offset.value < -MAX_VALUE / 2) {
        offset.value = withTiming(-MAX_VALUE);
      } else {
        offset.value = withTiming(MIN_VALUE);
      }
    });

  const bottomSheetStyle = useAnimatedStyle(() => {
    if (offset.value > MIN_VALUE) return { transform: [{ translateY: 0 }] };
    return {
      transform: [{ translateY: offset.value }],
    };
  });

  const contentHideStyle = useAnimatedStyle(() => {
    const opacity = interpolate(-offset.value, [MIN_VALUE, MAX_VALUE], [0, 1]);
    return {
      opacity: opacity,
    };
  });
  const contentContrastHideStyle = useAnimatedStyle(() => {
    const opacity = interpolate(-offset.value, [MIN_VALUE, MAX_VALUE], [1, 0]);
    const height = interpolate(-offset.value, [MIN_VALUE, MAX_VALUE], [100, 0]);
    return {
      opacity: opacity,
      height,
    };
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <Animated.View
        style={[
          styles.sliderTrack,
          bottomSheetStyle,
          {
            backgroundColor: theme.background,
          },
        ]}
      >
        <GestureDetector gesture={pan}>
          <Row
            full
            direction="column"
            rowGap={10}
            style={{
              paddingHorizontal: 10,
            }}
          >
            <Animated.View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: deviceWidth,
                height: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  if (offset.value >= MIN_VALUE)
                    offset.value = withTiming(-MAX_VALUE);
                  else {
                    offset.value = withTiming(0);
                  }
                }}
              >
                <Animated.View
                  style={[
                    styles.sliderHandle,
                    {
                      backgroundColor: "red",
                    },
                  ]}
                />
              </TouchableOpacity>
            </Animated.View>

            <Animated.View style={[contentHideStyle, { width: "100%" }]}>
              <Row full between>
                <Row colGap={4}>
                  <LocationIcon />
                  <TextDefault>Địa điểm:</TextDefault>
                </Row>
                <TextDefault bold>Quận 1 , phố đi bộ Nguyễn Huệ</TextDefault>
              </Row>
              <Separator height={10} />
              <Separator height={10} />
              <Row direction="column" rowGap={10} full>
                <Row start full>
                  <TextDefault bold>Tải lên video cần quảng cáo</TextDefault>
                </Row>
              </Row>
              <Separator height={10} />
            </Animated.View>
          </Row>
        </GestureDetector>
      </Animated.View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "transparent",
    position: "absolute",
    bottom: -930,
    height: 1000,
  },
  sliderHandle: {
    width: 60,
    height: normalize(10),
    borderRadius: 20,
    padding: normalize(2),
  },
  sliderTrack: {
    width: deviceWidth,
    height: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 10,
  },
});

export default BottomSheetRegister;
