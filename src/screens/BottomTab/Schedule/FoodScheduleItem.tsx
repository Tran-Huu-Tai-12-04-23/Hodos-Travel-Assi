import ButtonCustom from "@components/ButtonCustom";
import ImageCustom from "@components/ImageCustom";
import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import { priceColor } from "@constants/Colors";
import { vndToUsd } from "@helper/helpers";
import { deviceWidth } from "@helper/utils";
import { navigate } from "@navigation/NavigationService";
import { ROUTE_KEY } from "@navigation/route";
import React, { useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { IFood } from "src/Models/food.model";

function FoodSchedule({
  data,
}: {
  data: {
    from: IFood;
    to: IFood;
    distance: any;
  };
}) {
  const { from, to, distance } = data;

  const thumbnails = useCallback(() => {
    return to?.lstImgs?.length > 0 ? to.lstImgs[0] : "  ";
  }, [to]);
  return (
    <Row start direction="column" style={[{ borderRadius: 30 }]}>
      <TouchableOpacity
        onPress={() => {
          navigate(ROUTE_KEY.DETAIL_FOOD, {
            _id: to._id,
            distanceIF: distance,
          });
        }}
      >
        <ImageCustom
          link={thumbnails()}
          style={{ borderRadius: 10, width: deviceWidth - 80, height: 120 }}
        />
      </TouchableOpacity>
      <Row start full direction="column" style={{ overflow: "hidden" }}>
        <TextDefault
          bold
          style={{ fontSize: 18, width: "70%", overflow: "hidden" }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {to?.name}
        </TextDefault>
        <Row
          direction="column"
          style={{ width: "70%", overflow: "hidden" }}
          start
          colGap={4}
        >
          <TextDefault numberOfLines={1} ellipsizeMode="tail">
            {to?.address}
          </TextDefault>
          <Row start colGap={4}>
            <TextDefault style={{ color: priceColor, fontSize: 16 }} bold>
              {vndToUsd(to?.rangePrice[0] ?? 0) + "$"}{" "}
            </TextDefault>
            <TextDefault style={{ color: priceColor }}>-</TextDefault>
            <TextDefault style={{ color: priceColor, fontSize: 16 }} bold>
              {vndToUsd(to?.rangePrice[1] ?? 0) + "$"}{" "}
            </TextDefault>
          </Row>
          {distance && (
            <TextDefault bold>
              {distance?.distanceInKilometers + "kms"}
            </TextDefault>
          )}
        </Row>

        <Separator height={10} />
        <ButtonCustom
          mode="outlined"
          style={{ paddingHorizontal: 30 }}
          onPress={() =>
            navigate(ROUTE_KEY.DIRECTION_FOOD, {
              desLocation: to.coordinates.coordinates,
              foodId: to._id,
            })
          }
          title={"Director"}
        />
        <Separator height={10} />
      </Row>
    </Row>
  );
}

export default FoodSchedule;
