import LocationItem from "@components/LocationItem";
import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { CARD_LENGTH, SPACING } from "@constants/Colors";
import React, { useState } from "react";
import Animated from "react-native-reanimated";
import { ILocation } from "src/Models/location.model";

function LstLocation({ locations }: { locations: ILocation[] }) {
  const [scrollX, setScrollX] = useState(0);

  return (
    <Row direction="column" start full rowGap={5}>
      <TextDefault style={{ fontSize: 12, paddingHorizontal: 10 }}>
        Places nearest
      </TextDefault>
      <Animated.View style={{ maxHeight: 220 }}>
        <Animated.FlatList
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          decelerationRate={0.8}
          snapToInterval={CARD_LENGTH + SPACING * 2}
          disableIntervalMomentum={true}
          disableScrollViewPanResponder={true}
          snapToAlignment={"center"}
          data={locations}
          horizontal={true}
          renderItem={({ item, index }) => {
            return (
              <LocationItem
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
      </Animated.View>
    </Row>
  );
}

export default LstLocation;
