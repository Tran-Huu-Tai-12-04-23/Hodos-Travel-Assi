import React from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

type PressAbleScaleProps = {
  children?: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export const PressAnimate: React.FC<PressAbleScaleProps> = ({
  children,
  onPress,
  style,
}) => {
  const scale = useSharedValue(1);

  const gesture = Gesture.Tap()
    .maxDuration(10000)
    .onTouchesDown(() => {
      scale.value = withTiming(0.6);
    })
    .onTouchesUp(() => {
      if (onPress) {
        runOnJS(onPress)();
      }
    })
    .onFinalize(() => {
      scale.value = withTiming(1);
    });

  const rButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  }, []);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[style, rButtonStyle]}>{children}</Animated.View>
    </GestureDetector>
  );
};
