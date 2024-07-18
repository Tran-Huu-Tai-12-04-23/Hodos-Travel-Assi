import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { borderColor } from "@constants/Colors";
import { navigate } from "@navigation/NavigationService";
import { ROUTE_KEY } from "@navigation/route";
import React, { memo, useCallback } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ILocation } from "src/Models/location.model";
import ImageCustom from "@components/ImageCustom";

type PropsType = {
  width: any;
  data: ILocation;
};
function LocationItem({ width = 250, data }: PropsType) {
  const { name, distanceInfo, lstImgs, address } = data;

  const thumbnails = useCallback(() => {
    return lstImgs && lstImgs.length > 0
      ? lstImgs[0]
      : "https://www.androidauthority.com/wp-content/uploads/2015/07/location_marker_gps_shutterstock.jpg";
  }, [lstImgs]);

  return (
    <TouchableOpacity
      onPress={() => {
        navigate(ROUTE_KEY.DETAIL_LOCATION, {
          _id: data._id,
          distanceIF: distanceInfo,
        });
      }}
    >
      <Row
        direction="column"
        style={[{ width: width, height: 170, borderRadius: 30 }]}
      >
        <ImageCustom
          link={thumbnails()}
          style={{ borderRadius: 10, height: 120, width }}
        />
        <Row
          style={{
            backgroundColor: borderColor,
            padding: 10,
            transform: [{ translateY: -25 }],
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
    </TouchableOpacity>
  );
}

export default memo(LocationItem);
