import Row from "@components/Row";
import { normalize } from "@helper/helpers";
import { deviceWidth } from "@helper/utils";
import { navigate } from "@navigation/NavigationService";
import { APP_ROUTE } from "@navigation/route";
import { IMG } from "assets/localImage";
import PredictIcon from "assets/svg/cate/predict-icon";
import { Image } from "expo-image";
import React from "react";
import { TouchableOpacity } from "react-native";

function Categories() {
  return (
    <Row full between wrap rowGap={10}>
      <TouchableOpacity onPress={() => navigate(APP_ROUTE.PREDICT)}>
        <PredictIcon />
      </TouchableOpacity>
      <Row direction="column" rowGap={10}>
        <TouchableOpacity onPress={() => navigate(APP_ROUTE.CHAT_BOX)}>
          <Image
            source={IMG.chatBox}
            style={{
              width: deviceWidth / 2 - normalize(10),
              height: deviceWidth / 3 - normalize(10),
              borderRadius: normalize(10),
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={IMG.findLocation}
            style={{
              width: deviceWidth / 2 - normalize(10),
              height: deviceWidth / 3 - normalize(20),
              borderRadius: normalize(10),
            }}
          />
        </TouchableOpacity>
      </Row>
    </Row>
  );
}

export default Categories;
