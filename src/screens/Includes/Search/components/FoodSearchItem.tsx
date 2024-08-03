import ImageCustom from "@components/ImageCustom";
import { PressAnimate } from "@components/PressAnimate";
import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { deviceWidth } from "@helper/utils";
import { navigate } from "@navigation/NavigationService";
import { ROUTE_KEY } from "@navigation/route";
import React, { useCallback } from "react";
import { IFood } from "src/Models/food.model";
const findImageLink = (imgs: string[]) => {
  if (!imgs || imgs.length === 0) {
    return "https://firebasestorage.googleapis.com/v0/b/vmpc-clone.appspot.com/o/2.svg?alt=media&token=4c0116de-d986-4de3-9014-fef22e44efba";
  }

  const nonEmptyImg = imgs.find((img) => img !== "");
  return nonEmptyImg
    ? nonEmptyImg
    : imgs[1] ||
        "https://firebasestorage.googleapis.com/v0/b/vmpc-clone.appspot.com/o/2.svg?alt=media&token=4c0116de-d986-4de3-9014-fef22e44efba";
};

function FoodSearchItem({ data, index }: { data: IFood; index: number }) {
  const { name, distanceInfo, lstImgs, address } = data;

  const thumbnails = useCallback(() => {
    return findImageLink(lstImgs);
  }, [lstImgs]);

  return (
    <PressAnimate
      onPress={() => {
        navigate(ROUTE_KEY.DETAIL_FOOD, {
          _id: data._id,
          distanceIF: distanceInfo,
        });
      }}
      style={{
        width: deviceWidth / 2 - 15,
        marginLeft: index % 2 !== 0 ? 10 : 0,
        marginBottom: 10,
        padding: 10,
      }}
    >
      <Row style={{ width: "100%" }} center direction="column" rowGap={5}>
        <ImageCustom
          link={thumbnails()}
          style={{ borderRadius: 10, height: 120, width: "100%" }}
        />
        <TextDefault numberOfLines={1} bold>
          {name}
        </TextDefault>
        <TextDefault numberOfLines={1}>{address}</TextDefault>
      </Row>
    </PressAnimate>
  );
}

export default FoodSearchItem;
