import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import ArrowRightIcon from "assets/svg/arrow-right-icon";
import LocationIcon from "assets/svg/location-icon";
import React from "react";
import { Image } from "react-native";
import { ILocation } from "src/services/hooks/location/dto";
import { styleGlobal } from "src/styles";

function Item({ data }: { data: ILocation }) {
  const { theme } = useTheme();
  return (
    <Row
      full
      between
      style={{
        padding: 10,
        backgroundColor: theme.background,
        borderRadius: normalize(10),
        ...styleGlobal.shadow,
      }}
    >
      <Image
        source={{ uri: data.lstImgs?.split(",")[0] }}
        style={{
          width: normalize(80),
          height: normalize(80),
          borderRadius: normalize(10),
          flex: 0.3,
        }}
      />

      <Row direction="column" start rowGap={10} style={{ flex: 0.5 }}>
        <Row start colGap={5}>
          <TextDefault color={theme.textSecond}>26 Jaunuary 2024</TextDefault>
        </Row>
        <TextDefault bold size={normalize(14)}>
          {data?.name}
        </TextDefault>
        <Row start colGap={5}>
          <LocationIcon />
          <TextDefault numberOfLines={1} color={theme.textSecond}>
            {data?.address}
          </TextDefault>
        </Row>
      </Row>

      <Row center style={{ flex: 0.1 }}>
        <ArrowRightIcon />
      </Row>
    </Row>
  );
}

export default Item;
