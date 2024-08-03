import { PressAnimate } from "@components/PressAnimate";
import QuickSearchingButton from "@components/QuickSearchingButton";
import Row from "@components/Row";
import { btnPrimary } from "@constants/Colors";
import { deviceWidth } from "@helper/utils";
import { navigate } from "@navigation/NavigationService";
import { ROUTE_KEY } from "@navigation/route";
import MapIcon from "assets/svg/MapIcon";
import MicIcon from "assets/svg/MicIcon";
import React from "react";

const FEATURES = [
  {
    name: "Schedule",
    action: () => {
      navigate(ROUTE_KEY.SCHEDULE);
    },
    icon: <MapIcon color={btnPrimary} size={32} />,
  },
  {
    name: "Translate",
    icon: <MicIcon color={btnPrimary} size={32} />,
    action: () => {
      navigate(ROUTE_KEY.TEXT_TO_SPEAK);
    },
  },
];
function Features() {
  return (
    <Row
      style={[
        {
          padding: 10,
          paddingHorizontal: 20,
          backgroundColor: "white",
          marginHorizontal: 5,
          width: deviceWidth - 40,
          borderRadius: 10,
        },
      ]}
      center
      colGap={30}
    >
      <QuickSearchingButton />
      {FEATURES.map((item, index) => (
        <PressAnimate
          onPress={item.action}
          style={{
            backgroundColor: "rgba(0,0,0,0.03)",
            padding: 10,
            borderRadius: 10,
          }}
          key={index}
        >
          {item.icon}
        </PressAnimate>
      ))}
    </Row>
  );
}

export default Features;
