import { IMG } from "assets/localImage";
import { Image } from "expo-image";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Animated,
  Dimensions,
  LayoutAnimation,
  PanResponder,
  ScrollView,
  UIManager,
  View,
} from "react-native";

type WrapperPullRefreshProps = {
  duration?: number;
  pullHeight?: number;
  isRefreshing: boolean;
  onRefresh: () => void;
  renderElement: JSX.Element;
};

const WrapperPullRefresh: React.FC<WrapperPullRefreshProps> = ({
  duration = 1500,
  pullHeight = 100,
  isRefreshing,
  onRefresh,
  renderElement,
}) => {
  const scrollY = useMemo(() => new Animated.Value(0), []);
  const refreshHeight = useMemo(() => new Animated.Value(0), []);

  const scrollViewRef = useMemo(() => React.createRef<ScrollView>(), []);

  const [isScrollFree, setIsScrollFree] = useState(false);
  const [showPullAnim, setShowPullAnim] = useState(false);

  const animateHeight = refreshHeight.interpolate({
    inputRange: [-pullHeight, 0],
    outputRange: [pullHeight, 0],
  });

  useEffect(() => {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  useEffect(() => {
    if (!isRefreshing) {
      Animated.spring(refreshHeight, {
        toValue: 0,
        useNativeDriver: false,
      }).start(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setShowPullAnim(false);
      });
    }
  }, [isRefreshing, refreshHeight]);

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => !isScrollFree,
        onMoveShouldSetPanResponder: () => !isScrollFree,
        onPanResponderMove: (e, gestureState) => {
          if (!isRefreshing) {
            if (gestureState.dy >= 20 && scrollY._value === 0) {
              const newHeight = -gestureState.dy * 0.35;
              if (Math.abs(newHeight - refreshHeight._value) > 2) {
                refreshHeight.setValue(newHeight);
                setShowPullAnim(true);
              }
            } else {
              scrollViewRef.current?.scrollTo({
                y: -1 * gestureState.dy,
                animated: true,
              });
              if (showPullAnim) {
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut
                );
                setShowPullAnim(false);
              }
            }
          }
        },
        onPanResponderRelease: () => handlePanResponderEnd(),
        onPanResponderTerminate: () => handlePanResponderEnd(),
      }),
    [isScrollFree, isRefreshing, scrollY, refreshHeight, showPullAnim]
  );

  const handlePanResponderEnd = useCallback(() => {
    if (!isRefreshing) {
      if (refreshHeight._value <= -pullHeight) {
        Animated.parallel([
          Animated.spring(refreshHeight, {
            toValue: -pullHeight,
            useNativeDriver: false,
          }),
        ]).start(() => {
          onRefresh();
        });
      } else {
        Animated.spring(refreshHeight, {
          toValue: 0,
          useNativeDriver: false,
        }).start(() => {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setShowPullAnim(false);
        });
      }

      if (scrollY._value > 0) {
        setIsScrollFree(true);
      }
    }
  }, [isRefreshing, pullHeight, onRefresh, refreshHeight, scrollY]);

  return (
    <View
      style={{ width: Dimensions.get("window").width }}
      {...panResponder.panHandlers}
    >
      <Animated.View
        style={{
          width: Dimensions.get("window").width,
          height: animateHeight,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {showPullAnim && (
          <Image
            source={IMG.loadingIcon}
            style={{
              width: 100,
              height: 100,
            }}
          />
        )}
      </Animated.View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        scrollEnabled={isScrollFree}
        onScroll={(event) =>
          scrollY.setValue(event.nativeEvent.contentOffset.y)
        }
        scrollEventThrottle={16}
        bounces={false}
      >
        {React.cloneElement(renderElement, { scrollEnabled: false })}
      </Animated.ScrollView>
    </View>
  );
};

export default WrapperPullRefresh;
