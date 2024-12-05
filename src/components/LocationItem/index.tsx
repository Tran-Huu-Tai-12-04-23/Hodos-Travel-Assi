import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { normalize } from "@helper/helpers";
import { deviceWidth } from "@helper/utils";
import { navigate } from "@navigation/NavigationService";
import { APP_ROUTE } from "@navigation/route";
import { Image } from "expo-image";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { ILocation } from "src/services/hooks/location/dto";
function LocationItem({
  data,
  width,
}: {
  data: ILocation;
  width?: number | string;
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigate(APP_ROUTE.LOCATION_DETAIL, { id: data?.id });
      }}
      style={
        {
          width: width ? width : deviceWidth * 0.7,
        } as any
      }
    >
      <Row
        direction="column"
        start
        colGap={10}
        style={[
          {
            padding: normalize(5),
            borderRadius: normalize(10),
          },
        ]}
        rowGap={10}
      >
        <SharedElement id={`trip.${data.id}.image`} style={{ flex: 1 }}>
          <View
            style={{
              height: normalize(120),
              width: deviceWidth / 2 - normalize(20),
              borderRadius: normalize(10),
              overflow: "hidden",
            }}
          >
            <Image
              style={{
                height: normalize(120),
                width: "100%",
                borderRadius: normalize(10),
              }}
              source={{ uri: data?.img }}
            />
          </View>
        </SharedElement>

        <Row direction="column" start rowGap={5} full>
          <TextDefault bold size={normalize(12)} numberOfLines={1}>
            {data.name}
          </TextDefault>
          <TextDefault color="gray" numberOfLines={1}>
            {data.address}
          </TextDefault>

          <Row start colGap={10}>
            {data.distance && (
              <>
                <TextDefault bold style={{ color: "orange" }}>
                  {data.distance}
                </TextDefault>
                <TextDefault>/</TextDefault>
              </>
            )}
          </Row>
        </Row>
      </Row>
    </TouchableOpacity>
  );
}

export default LocationItem;
