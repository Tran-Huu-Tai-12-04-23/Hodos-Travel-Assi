import ImageCustom from "@components/ImageCustom";
import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { borderColor, hightLightColor, priceColor } from "@constants/Colors";
import Helper, { vndToUsd } from "@helper/helpers";
import { navigate } from "@navigation/NavigationService";
import { ROUTE_KEY } from "@navigation/route";
import React, { memo, useCallback } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IFood } from "src/Models/food.model";

type PropsType = {
  width: any;
  data: IFood;
};
function FoodItem({ width = 250, data }: PropsType) {
  const { _id, name, distanceInfo, lstImgs, address, rangePrice } = data;

  const thumbnails = useCallback(() => {
    return lstImgs && lstImgs?.length > 0
      ? lstImgs[0]
      : "https://www.androidauthority.com/wp-content/uploads/2015/07/location_marker_gps_shutterstock.jpg";
  }, [lstImgs]);

  const [min, max] = rangePrice;
  return (
    <TouchableOpacity
      onPress={() =>
        navigate(ROUTE_KEY.DETAIL_FOOD, {
          _id: _id,
          distanceIF: distanceInfo,
        })
      }
    >
      <Row
        direction="column"
        style={[
          {
            width: width,
            borderTopEndRadius: 10,
            borderTopStartRadius: 10,
            overflow: "hidden",
          },
        ]}
      >
        <ImageCustom link={thumbnails()} style={{ width }} />
        <Row
          style={{
            backgroundColor: borderColor,
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
              {rangePrice && (
                <>
                  <Row start colGap={4} wrap>
                    <TextDefault style={{ color: priceColor }} bold>
                      {Helper.formatVND(+rangePrice[0])}
                    </TextDefault>
                    <TextDefault style={{ color: priceColor }}>-</TextDefault>
                    <TextDefault style={{ color: priceColor }} bold>
                      {Helper.formatVND(+rangePrice[1])}
                    </TextDefault>
                  </Row>
                  <Row start colGap={4} wrap>
                    <TextDefault bold>
                      {"($" + vndToUsd(+rangePrice[0])}
                    </TextDefault>
                    <TextDefault>-</TextDefault>
                    <TextDefault bold>
                      {"$" + vndToUsd(+rangePrice[1]) + ")"}
                    </TextDefault>
                  </Row>
                </>
              )}
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

export default memo(FoodItem);
