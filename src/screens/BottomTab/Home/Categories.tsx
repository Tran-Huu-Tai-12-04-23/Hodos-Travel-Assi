import Row from "@components/@core/Row";
import { navigate } from "@navigation/NavigationService";
import { APP_ROUTE } from "@navigation/route";
import PredictIcon from "assets/svg/cate/predict-icon";
import React from "react";
import { TouchableOpacity } from "react-native";

function Categories() {
  return (
    <Row full between wrap rowGap={10}>
      <TouchableOpacity onPress={() => navigate(APP_ROUTE.PREDICT)}>
        <PredictIcon />
      </TouchableOpacity>
    </Row>
  );
}

export default Categories;
