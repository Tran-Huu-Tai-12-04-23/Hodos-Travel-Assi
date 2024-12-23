import React, { useEffect, useRef, useState } from "react";
import { View, useWindowDimensions } from "react-native";
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import CustomImage from "./CustomeImage";

const Carousel = ({ data = [], autoPlay = false, onChange }: any) => {
  const scrollViewRef = useAnimatedRef<Animated.ScrollView>();
  const interval = useRef<NodeJS.Timeout | null>(null);
  const [newData, setNewData] = useState([
    { key: "spacer-left" },
    ...data,
    { key: "spacer-right" },
  ]);
  const { width } = useWindowDimensions();
  const SIZE = width * 0.7;
  const SPACER = (width - SIZE) / 2;
  const x = useSharedValue(0);
  const offSet = useSharedValue(0);
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);
  useEffect(() => {
    setNewData([{ key: "spacer-left" }, ...data, { key: "spacer-right" }]);
  }, [data]);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
    onMomentumEnd: (e) => {
      offSet.value = e.contentOffset.x;
    },
  });
  useEffect(() => {
    if (isAutoPlay === true) {
      let _offSet = offSet.value;
      interval.current = setInterval(() => {
        if (_offSet >= Math.floor(SIZE * (data.length - 1) - 10)) {
          _offSet = 0;
        } else {
          _offSet = Math.floor(_offSet + SIZE);
        }
        scrollViewRef?.current?.scrollTo({ x: _offSet, y: 0 });
      }, 2000);
    } else {
      interval?.current && clearInterval(interval?.current);
    }
    return () => {
      interval?.current && clearInterval(interval?.current);
    };
  }, [SIZE, SPACER, isAutoPlay, data.length, offSet.value, scrollViewRef]);

  return (
    <View>
      <Animated.ScrollView
        ref={scrollViewRef}
        onScroll={onScroll}
        onScrollBeginDrag={(e) => {
          setIsAutoPlay(false);
        }}
        onMomentumScrollEnd={() => {
          // setIsAutoPlay(true);
          const currentIndex = Math.round(offSet.value / SIZE);
          if (onChange) {
            onChange(currentIndex);
          }
        }}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={SIZE}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
      >
        {newData.map((item, index) => {
          return (
            <CustomImage
              key={index}
              index={index}
              item={item}
              x={x}
              size={SIZE}
              spacer={SPACER}
            />
          );
        })}
      </Animated.ScrollView>
    </View>
  );
};

export default Carousel;
