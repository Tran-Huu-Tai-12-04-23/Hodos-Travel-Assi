import React from "react";
import { ScrollView } from "react-native";
import Row from "./Row";
import Skeleton from "./Skeleton";

function HorizontalSkeleton() {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ height: 250 }}
    >
      <Row start colGap={20}>
        <Skeleton key={1} />
        <Skeleton key={2} />
        <Skeleton key={3} />
      </Row>
    </ScrollView>
  );
}

export default HorizontalSkeleton;
