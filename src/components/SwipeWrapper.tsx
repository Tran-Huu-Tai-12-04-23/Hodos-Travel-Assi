import { useTheme } from "@context/themContext";
import ArchiveIcon from "assets/svg/archive-icon";
import CheckIcon from "assets/svg/check-icon";
import React from "react";
import { Animated, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

const SwipeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  const renderLeftActions = (
    progress: any,
    dragX: {
      interpolate: (arg0: {
        inputRange: number[];
        outputRange: number[];
      }) => any;
    }
  ) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <RectButton
        style={[
          styles.leftAction,
          {
            backgroundColor: theme.primary,
          },
        ]}
        onPress={() => {}}
      >
        <Animated.View
          style={{
            flexDirection: "row",
            alignItems: "center",
            transform: [{ translateX: trans }],
            backgroundColor: theme.primary,
          }}
        >
          <ArchiveIcon size={32} color={theme.background} />
        </Animated.View>
      </RectButton>
    );
  };

  const renderRightActions = (
    progress: any,
    dragX: {
      interpolate: (arg0: {
        inputRange: number[];
        outputRange: number[];
      }) => any;
    }
  ) => {
    const trans = dragX.interpolate({
      inputRange: [-101, -100, -50, 0],
      outputRange: [1, 0, 0, -20],
    });
    return (
      <RectButton
        style={[
          styles.rightAction,
          {
            backgroundColor: theme.success,
          },
        ]}
        onPress={() => {}}
      >
        <Animated.View
          style={{
            flexDirection: "row",
            alignItems: "center",
            transform: [{ translateX: trans }],
            backgroundColor: theme.success,
          }}
        >
          <CheckIcon size={32} color={theme.background} />
        </Animated.View>
      </RectButton>
    );
  };

  return (
    <Swipeable
      renderLeftActions={renderLeftActions}
      renderRightActions={renderRightActions}
    >
      {children}
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    justifyContent: "center",
  },
  rightAction: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  actionText: {
    color: "white",
    fontWeight: "600",
    padding: 20,
  },
});

export default SwipeWrapper;
