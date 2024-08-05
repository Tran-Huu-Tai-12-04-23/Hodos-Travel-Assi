import ImageCustom from "@components/ImageCustom";
import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { SIDECARD_LENGTH, SPACING } from "@constants/Colors";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { navigate } from "@navigation/NavigationService";
import { ROUTE_KEY } from "@navigation/route";
import React, { useCallback } from "react";
import { View } from "react-native";
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
      <View
        style={[
          styleGlobal.shadowForce,
          {
            width: width,
            borderRadius: 10,
            backgroundColor: "white",
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
      </View>
    </TouchableOpacity>
  );
}
