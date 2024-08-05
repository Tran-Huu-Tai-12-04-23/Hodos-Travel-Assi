import ImageCustom from "@components/ImageCustom";
import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { SIDECARD_LENGTH, SPACING, priceColor } from "@constants/Colors";
import Helper, { vndToUsd } from "@helper/helpers";
import { navigate } from "@navigation/NavigationService";
import { ROUTE_KEY } from "@navigation/route";
import React, { memo, useCallback } from "react";
import { TouchableOpacity, View } from "react-native";
import { IFood } from "src/Models/food.model";
import { styleGlobal } from "src/styles";

type PropsType = {
  width: any;
  data: IFood;
  index: number;
  scrollX: number;
};
function FoodItem({ width = 250, data, index, scrollX }: PropsType) {
  const { _id, name, distanceInfo, lstImgs, address, rangePrice } = data;

  const thumbnails = useCallback(() => {
    return lstImgs && lstImgs?.length > 0
      ? lstImgs[0]
      : "https://www.androidauthority.com/wp-content/uploads/2015/07/location_marker_gps_shutterstock.jpg";
  }, [lstImgs]);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{ backgroundColor: "white" }}
      onPress={() => {
        navigate(ROUTE_KEY.DETAIL_FOOD, {
          _id: _id,
          distanceIF: distanceInfo,
        });
      }}
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
              maxHeight: 120,
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
      </View>
    </TouchableOpacity>
  );
}

export default memo(FoodItem);
