import ImageCustom from "@components/ImageCustom";
import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { priceColor } from "@constants/Colors";
import Helper, { vndToUsd } from "@helper/helpers";
import React, { memo, useMemo } from "react";
import { IFood } from "src/Models/food.model";

type PropsType = {
  data: IFood;
};
function FoodView({ data }: PropsType) {
  const { name, distanceInfo, rangePrice, lstImgs, address } = data;

  const thumbnails = useMemo(() => {
    return lstImgs && lstImgs.length > 0
      ? lstImgs[0]
      : "https://www.androidauthority.com/wp-content/uploads/2015/07/location_marker_gps_shutterstock.jpg";
  }, [lstImgs]);

  return (
    <Row direction="column" style={[{ width: "100%", borderRadius: 30 }]}>
      <ImageCustom
        link={thumbnails}
        style={{ borderRadius: 10, width: "100%", height: 120 }}
      />
      <Row>
        <Row start full direction="column" style={{ overflow: "hidden" }}>
          <TextDefault
            bold
            style={{ fontSize: 18, width: "70%", overflow: "hidden" }}
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
  );
}

export default memo(FoodView);
