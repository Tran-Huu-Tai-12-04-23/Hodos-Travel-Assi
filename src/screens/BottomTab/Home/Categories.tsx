import Row from "@components/Row";
import { normalize } from "@helper/helpers";
import { deviceWidth } from "@helper/utils";
import { IMG } from "assets/localImage";
import PredictIcon from "assets/svg/cate/predict-icon";
import { Image } from "expo-image";
import React from "react";
import { TouchableOpacity } from "react-native";
const Cate = [
  {
    name: "Location",
    icon: IMG.architectImg,
  },
  {
    name: "Food",
    icon: IMG.foodImg,
  },
  {
    name: "Entertain",
    icon: IMG.entertainmentImg,
  },
  {
    name: "Park",
    icon: IMG.parkImg,
  },
  {
    name: "Beach",
    icon: IMG.beachImg,
  },
];
function Categories() {
  return (
    <Row full between wrap rowGap={10}>
      <TouchableOpacity>
        <PredictIcon />
      </TouchableOpacity>
      <Row direction="column" rowGap={10}>
        <TouchableOpacity>
          <Image
            source={IMG.chatBox}
            style={{
              width: deviceWidth / 2 - normalize(5),
              height: deviceWidth / 3 - normalize(21),
              borderRadius: normalize(10),
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={IMG.findLocation}
            style={{
              width: deviceWidth / 2 - normalize(5),
              height: deviceWidth / 3 - normalize(21),
              borderRadius: normalize(10),
            }}
          />
        </TouchableOpacity>
      </Row>
    </Row>
  );
}

export default Categories;
