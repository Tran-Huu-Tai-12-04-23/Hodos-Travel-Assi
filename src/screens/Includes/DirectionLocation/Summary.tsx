import ButtonCustom from "@components/ButtonCustom";
import ImageCustom from "@components/ImageCustom";
import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import { btnPrimary } from "@constants/Colors";
import { useBottomSheet } from "@context/BottomSheetContext";
import { deviceWidth } from "@helper/utils";
import { IStep } from "@hooks/api/location/useFindRouteOfLocation";
import LocationOutIcon from "assets/svg/LocationOutlineIcon";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { ILocation } from "src/Models/location.model";
import { styleGlobal } from "src/styles";
import Steps from "./Steps";
function SummaryLocation({
  data,
  instructions,
  infoDistance,
}: {
  data: ILocation;
  instructions: IStep[];
  infoDistance: {
    distance: number;
    time: number;
  };
}) {
  const { openBottomSheet } = useBottomSheet();
  const thumbnails = useCallback(() => {
    return data.lstImgs && data.lstImgs.length > 0
      ? data.lstImgs[0]
      : "https://www.androidauthority.com/wp-content/uploads/2015/07/location_marker_gps_shutterstock.jpg";
  }, [data.lstImgs]);

  return (
    <Row
      start
      direction="column"
      style={[styles.container, styleGlobal.shadowForce]}
    >
      <Row full between>
        <Row colGap={5} style={{ alignItems: "center" }}>
          <ImageCustom
            link={thumbnails()}
            style={{
              borderRadius: 10,
              width: 100,
            }}
          />
          <Row direction="column" start full>
            <TextDefault bold style={{ fontSize: 14 }}>
              {data.name}
            </TextDefault>
            <TextDefault
              numberOfLines={2}
              style={{ fontSize: 14, flex: 6, maxWidth: deviceWidth - 140 }}
            >
              {data.description}
            </TextDefault>
          </Row>
        </Row>
      </Row>
      <Row
        start
        between
        style={{ padding: 10, alignItems: "center" }}
        colGap={20}
      >
        <Row
          center
          style={[
            styleGlobal.shadowForce,
            { padding: 5, backgroundColor: btnPrimary, borderRadius: 100 },
          ]}
        >
          <View style={[styles.point]} />
        </Row>
        <Row start direction="column" rowGap={5}>
          <TextDefault bold style={{ color: "gray" }}>
            Destination point
          </TextDefault>
          <TextDefault bold>Your location</TextDefault>
        </Row>
      </Row>

      <Separator
        height={1}
        style={{
          backgroundColor: "rgba(0,0,0,0.1)",
          marginLeft: 40,
          width: deviceWidth - 80,
        }}
      />
      <Row
        start
        between
        style={{ padding: 10, alignItems: "center" }}
        colGap={10}
      >
        <LocationOutIcon color={btnPrimary} />
        <Row start direction="column" rowGap={5}>
          <TextDefault bold style={{ color: "gray" }}>
            Destination point
          </TextDefault>
          <TextDefault bold>{data.address}</TextDefault>
        </Row>
      </Row>

      <ButtonCustom
        onPress={() => {
          openBottomSheet({
            content: (
              <Steps instructions={instructions} infoDistance={infoDistance} />
            ),
            snapPoints: ["90%"],
            title: "",
          });
        }}
        title={"STEPS"}
        primary
        minWidth={deviceWidth - 30}
        radius={10}
      />
    </Row>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 10,
    bottom: 10,
    left: 10,
    height: "auto",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
  },
  point: {
    padding: 2,
    borderRadius: 100,
    backgroundColor: "white",
  },
});

export default SummaryLocation;
