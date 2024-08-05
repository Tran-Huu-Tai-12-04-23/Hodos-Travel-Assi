import FoodItem from "@components/FoodItem";
import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { CARD_LENGTH, SPACING } from "@constants/Colors";
import React, { useState } from "react";
import Animated from "react-native-reanimated";
import { IFood } from "src/Models/food.model";

function LstFood({ foods }: { foods: IFood[] }) {
  const [scrollX, setScrollX] = useState(0);
  return (
    <Row direction="column" start full rowGap={5}>
      <TextDefault style={{ fontSize: 12, paddingHorizontal: 10 }}>
        Foods nearest
      </TextDefault>
      <Animated.FlatList
        contentContainerStyle={{
          padding: 10,
        }}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.9}
        snapToInterval={CARD_LENGTH + SPACING * 2}
        disableIntervalMomentum={true}
        disableScrollViewPanResponder={true}
        snapToAlignment={"center"}
        data={foods}
        horizontal={true}
        renderItem={({ item, index }) => {
          return (
            <FoodItem
              key={index}
              width={CARD_LENGTH}
              data={item}
              index={index}
              scrollX={scrollX}
            />
          );
        }}
        keyExtractor={(item, index) => index.toString()}
        onScroll={(event) => {
          setScrollX(event.nativeEvent.contentOffset.x);
        }}
      />
    </Row>
  );
}

export default LstFood;
