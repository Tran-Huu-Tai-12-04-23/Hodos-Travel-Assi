import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { inputColor } from "@constants/Colors";
import { getStatusBarHeight } from "@helper/utils";
import ArrowLeftIcon from "assets/svg/ArrowLeftIcon";
import React from "react";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styleGlobal } from "src/styles";
import { goBack } from "./NavigationService";

type PropsType = {
  title?: string;
  isBack?: boolean;
  style?: any;
};
export default function CustomHeader({
  title,
  style,
  isBack = true,
}: PropsType) {
  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 10,
        minHeight: 50,
        top: getStatusBarHeight(SafeAreaView) + 10,
        position: "absolute",
        left: 10,
        zIndex: 1000,
        ...style,
      }}
    >
      <Row
        start
        style={{
          alignContent: "center",
          alignItems: "center",
        }}
        full
      >
        {isBack && (
          <TouchableOpacity
            onPress={goBack}
            style={[
              styleGlobal.shadowForce,
              styleGlobal.center,
              {
                borderRadius: 100,
                flex: 5,
                backgroundColor: inputColor,
                height: 40,
                width: 40,
                padding: 20,
              },
            ]}
          >
            <ArrowLeftIcon />
          </TouchableOpacity>
        )}
        <TextDefault
          style={[
            styleGlobal.shadow,
            {
              width: "50%",
              flex: 5,
              fontSize: 20,
              textAlign: "left",
              fontWeight: "bold",
            },
          ]}
        >
          {title}
        </TextDefault>
      </Row>
    </SafeAreaView>
  );
}
