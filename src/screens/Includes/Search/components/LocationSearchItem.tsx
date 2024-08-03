import ImageCustom from "@components/ImageCustom";
import { PressAnimate } from "@components/PressAnimate";
import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { deviceWidth } from "@helper/utils";
import { navigate } from "@navigation/NavigationService";
import { ROUTE_KEY } from "@navigation/route";
import React, { useCallback } from "react";
import { ILocation } from "src/Models/location.model";

function LocationSearchItem({
  data,
  index,
}: {
  data: ILocation;
  index: number;
}) {
  const { name, distanceInfo, lstImgs, address } = data;

  const thumbnails = useCallback(() => {
    return lstImgs && lstImgs.length > 0
      ? lstImgs[0]
      : "https://firebasestorage.googleapis.com/v0/b/vmpc-clone.appspot.com/o/2.svg?alt=media&token=4c0116de-d986-4de3-9014-fef22e44efba";
  }, [lstImgs]);

  return (
    <PressAnimate
      onPress={() => {
        navigate(ROUTE_KEY.DETAIL_LOCATION, {
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

export default LocationSearchItem;
