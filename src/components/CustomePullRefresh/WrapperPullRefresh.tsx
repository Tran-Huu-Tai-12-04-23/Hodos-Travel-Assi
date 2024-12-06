import { IMG } from "assets/localImage";
import { Image } from "expo-image";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Animated,
  Dimensions,
  Easing,
  LayoutAnimation,
  PanResponder,
  ScrollView,
  UIManager,
  View,
} from "react-native";

const vw = Dimensions.get("window").width * 0.01;
const vh = Dimensions.get("window").height * 0.01;

type WrapperPullRefreshProps = {
  duration?: number;
  pullHeight?: number;
  isRefreshing: boolean;
  onRefresh: () => void;
  backgroundColor?: string;
  renderElement: JSX.Element;
};

const WrapperPullRefresh: React.FC<WrapperPullRefreshProps> = ({
  duration = 1500,
  pullHeight = 10 * vh,
  isRefreshing,
  onRefresh,
  backgroundColor,
  renderElement,
}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const refreshHeight = useRef(new Animated.Value(0)).current;

  const initAnimationProgress = useRef(new Animated.Value(0)).current;
  const repeatAnimationProgress = useRef(new Animated.Value(0)).current;
  const finalAnimationProgress = useRef(new Animated.Value(0)).current;

  const scrollViewRef = useRef<ScrollView>(null);

  const [isScrollFree, setIsScrollFree] = useState(false);
  const [showPullAnim, setShowPullAnim] = useState(false);
  const [isRefreshAnimationStarted, setIsRefreshAnimationStarted] =
    useState(false);
  const [isRefreshAnimationEnded, setIsRefreshAnimationEnded] = useState(false);

  const animateHeight = refreshHeight.interpolate({
    inputRange: [-pullHeight, 0],
    outputRange: [pullHeight, 0],
  });

  const animateProgress = refreshHeight.interpolate({
    inputRange: [-pullHeight, 0],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  useEffect(() => {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  useEffect(() => {
    if (isRefreshing && !showPullAnim) {
      handleRefresh();
    }
  }, [isRefreshing, showPullAnim]);

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => !isScrollFree,
        onMoveShouldSetPanResponder: () => !isScrollFree,
        onPanResponderMove: (e, gestureState) => {
          if (!isRefreshing) {
            if (gestureState.dy >= 0 && scrollY._value === 0) {
              refreshHeight.setValue(-1 * gestureState.dy * 0.35);
              setShowPullAnim(true);
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
    [isScrollFree, isRefreshing]
  );

  const handlePanResponderEnd = useCallback(() => {
    if (!isRefreshing) {
      if (refreshHeight._value <= -pullHeight) {
        Animated.parallel([
          Animated.spring(refreshHeight, {
            toValue: -pullHeight,
            useNativeDriver: false,
          }),
          Animated.timing(initAnimationProgress, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
          }),
        ]).start(() => {
          initAnimationProgress.setValue(0);
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setIsRefreshAnimationStarted(true);
          setShowPullAnim(false);
          startRepeatAnimation();
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
  }, [isRefreshing, pullHeight]);

  const startRepeatAnimation = useCallback(() => {
    repeatAnimationProgress.setValue(0);
    Animated.timing(repeatAnimationProgress, {
      toValue: 1,
      easing: Easing.linear,
      duration,
      useNativeDriver: false,
    }).start(() => {
      if (isRefreshing) {
        startRepeatAnimation();
      } else {
        repeatAnimationProgress.setValue(0);
        endAnimation();
      }
    });
  }, [isRefreshing, duration]);

  const endAnimation = useCallback(() => {
    setIsRefreshAnimationEnded(true);
    Animated.sequence([
      Animated.timing(finalAnimationProgress, {
        toValue: 1,
        easing: Easing.linear,
        duration,
        useNativeDriver: false,
      }),
      Animated.spring(refreshHeight, {
        toValue: 0,
        bounciness: 12,
        useNativeDriver: false,
      }),
    ]).start(() => {
      finalAnimationProgress.setValue(0);
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setIsRefreshAnimationEnded(false);
      setIsRefreshAnimationStarted(false);
      setShowPullAnim(false);
    });
  }, [duration]);

  const handleRefresh = useCallback(() => {
    Animated.parallel([
      Animated.spring(refreshHeight, {
        toValue: -pullHeight,
        bounciness: 12,
        useNativeDriver: false,
      }),
      Animated.timing(initAnimationProgress, {
        toValue: 1,
        duration,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ]).start(() => {
      initAnimationProgress.setValue(0);
      setIsRefreshAnimationStarted(true);
      setShowPullAnim(false);
      startRepeatAnimation();
    });
  }, [pullHeight, duration]);

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
        {isRefreshing && !isRefreshAnimationStarted && (
          <Image
            source={IMG.loadingIcon}
            style={{
              width: 100,
              height: 100,
            }}
          />
        )}
        {isRefreshAnimationStarted && !isRefreshAnimationEnded && (
          <Image
            source={IMG.loadingIcon}
            style={{
              width: 100,
              height: 100,
            }}
          />
        )}
        {isRefreshAnimationEnded && (
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
