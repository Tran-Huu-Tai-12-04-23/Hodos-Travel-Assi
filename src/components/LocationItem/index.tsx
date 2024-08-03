import ImageCustom from "@components/ImageCustom";
import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { CARD_LENGTH, SIDECARD_LENGTH, SPACING } from "@constants/Colors";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { navigate } from "@navigation/NavigationService";
import { ROUTE_KEY } from "@navigation/route";
import React, { useCallback } from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { ILocation } from "src/Models/location.model";
import { styleGlobal } from "src/styles";

type PropsType = {
  width: any;
  data: ILocation;
  index: number;
  scrollX: number;
};
export default function LocationItem({
  width = 350,
  data,
  index,
  scrollX,
}: PropsType) {
  const { name, distanceInfo, lstImgs, address } = data;
  const size = useSharedValue(0.8);

  const inputRange = [
    (index - 1) * CARD_LENGTH,
    index * CARD_LENGTH,
    (index + 1) * CARD_LENGTH,
  ];

  size.value = interpolate(
    scrollX,
    inputRange,
    [0.8, 1, 0.8],
    Extrapolate.CLAMP
  );

  size.value = interpolate(
    scrollX,
    inputRange,
    [0.8, 1, 0.8],
    Extrapolate.CLAMP
  );

  const opacity = useSharedValue(1);
  const opacityInputRange = [
    (index - 1) * CARD_LENGTH,
    index * CARD_LENGTH,
    (index + 1) * CARD_LENGTH,
  ];
  opacity.value = interpolate(
    scrollX,
    opacityInputRange,
    [0.5, 1, 0.5],
    Extrapolate.CLAMP
  );

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scaleY: size.value }],
      opacity: opacity.value,
    };
  });

  const thumbnails = useCallback(() => {
    return lstImgs && lstImgs.length > 0
      ? lstImgs[0]
      : "https://www.androidauthority.com/wp-content/uploads/2015/07/location_marker_gps_shutterstock.jpg";
  }, [lstImgs]);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        navigate(ROUTE_KEY.DETAIL_LOCATION, {
          _id: data._id,
          distanceIF: distanceInfo,
        });
      }}
      style={{ backgroundColor: "white" }}
    >
      <Animated.View
        style={[
          cardStyle,
          styleGlobal.shadowForce,
          {
            width: width,
            borderRadius: 10,
            backgroundColor: "white",
            maxHeight: 200,
          },
          {
            marginLeft: index == 0 ? SIDECARD_LENGTH * 0.2 : SPACING,
            marginRight: SPACING,
          },
        ]}
      >
        <Row direction="column" full>
          <ImageCustom
            link={thumbnails()}
            style={{ borderRadius: 10, height: 120, width }}
          />
          <Row
            style={{
              padding: 10,
              borderBottomEndRadius: 10,
              borderBottomStartRadius: 10,
            }}
          >
            <Row start full direction="column" style={{ overflow: "hidden" }}>
              <TextDefault
                bold
                style={{ fontSize: 18, overflow: "hidden" }}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {name}
              </TextDefault>
              <Row direction="column" start colGap={4}>
                <TextDefault numberOfLines={1} ellipsizeMode="tail">
                  {address}
                </TextDefault>
                <Row colGap={20}>
                  <TextDefault bold>
                    {distanceInfo && distanceInfo.distanceInKilometers + "kms"}
                  </TextDefault>
                </Row>
              </Row>
            </Row>
          </Row>
        </Row>
      </Animated.View>
    </TouchableOpacity>
  );
}
