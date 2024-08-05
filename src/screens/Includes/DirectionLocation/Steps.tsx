import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import { btnPrimary } from "@constants/Colors";
import Helper from "@helper/helpers";
import { IStep } from "@hooks/api/location/useFindRouteOfLocation";
import LocationIcon from "assets/svg/LocationIcon";
import LocationOutIcon from "assets/svg/LocationOutlineIcon";
import React from "react";
import { ScrollView } from "react-native";
import { styleGlobal } from "src/styles";

function Steps({
  instructions,
  infoDistance,
}: {
  instructions: IStep[];
  infoDistance: {
    distance: number;
    time: number;
  };
}) {
  const objTime = Helper.convertMilliseconds(infoDistance.time);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, width: "100%" }}
    >
      <Row
        start
        direction="column"
        full
        style={{ rowGap: 10, paddingHorizontal: 20, flex: 1 }}
      >
        <Row start colGap={20}>
          <TextDefault>Distance : </TextDefault>
          <TextDefault bold>{infoDistance.distance / 1000}kms</TextDefault>
        </Row>
        <Row start colGap={20}>
          <TextDefault>Duration : </TextDefault>
          <TextDefault bold>
            {objTime.hours > 0 && objTime.hours + "H"} {objTime.minutes} minutes
          </TextDefault>
        </Row>
        <Separator height={10} style={styleGlobal.borderBottom} />
        <TextDefault>Instructions</TextDefault>
        <Row start colGap={10} style={styleGlobal.borderBottom}>
          <LocationIcon />
          <TextDefault style={{ flex: 8 }} bold>
            Vị trí của bạn
          </TextDefault>
        </Row>

        {instructions.map((item, index) => {
          const obTime = Helper.convertMilliseconds(item.time);
          return (
            <Row
              key={index}
              full
              start
              direction="column"
              rowGap={2}
              style={[styleGlobal.borderBottom, { padding: 10 }]}
            >
              <Row start colGap={10}>
                <LocationOutIcon color={btnPrimary} />
                <TextDefault bold>
                  {item.text.substring(0, 1).toUpperCase() +
                    item.text.substring(1)}
                </TextDefault>
              </Row>
              <Row start colGap={4}>
                <TextDefault>
                  {(item.distance / 1000).toFixed(2)} kms
                </TextDefault>
                <TextDefault>-</TextDefault>
                <TextDefault>
                  {obTime.hours > 0 && obTime.hours + " hours"} {obTime.minutes}{" "}
                  minutes {obTime.seconds} seconds
                </TextDefault>
              </Row>
            </Row>
          );
        })}
      </Row>
    </ScrollView>
  );
}

export default Steps;
