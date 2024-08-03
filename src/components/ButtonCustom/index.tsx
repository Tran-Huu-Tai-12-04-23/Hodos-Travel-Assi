import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { blackColor, btnPrimary, whiteColor } from "@constants/Colors";
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styleGlobal } from "src/styles";

type ButtonProps = {
  startIcon?: any;
  endIcon?: any;
  onPress: () => void;
  isLoading?: boolean;
  isEdit?: boolean;
  mode?: "text" | "outlined" | "contained" | "elevated" | "contained-tonal";
  radius?: number;
  title: string;
  background?: any;
  textColor?: any;
  labelStyle?: any;
  style?: {};
  primary?: boolean;
  full?: boolean;
  bold?: boolean;
  shadow?: boolean;
  minWidth?: any;
  flex?: number;
  entering?: any;
};
function ButtonCustom(props: ButtonProps) {
  const {
    background,
    startIcon,
    endIcon,
    onPress,
    radius = 100,
    title,
    isLoading,
    isEdit,
    bold,
    mode = "text",
    textColor,
    labelStyle = {},
    style = {},
    primary = false,
    full = false,
    shadow = false,
    minWidth = 80,
    flex,
    entering,
  } = props;

  const [styleCus, setStyleCus] = useState<
    { color: string; backgroundColor: string } | any
  >({
    color: whiteColor,
    backgroundColor: btnPrimary,
  });

  useEffect(() => {
    if (background || textColor) {
      setStyleCus({
        ...styleCus,
        backgroundColor: background,
        textColor: textColor,
      });
      return;
    }

    if (primary) {
      setStyleCus({
        backgroundColor: btnPrimary,
        color: whiteColor,
      });
      return;
    }

    switch (mode) {
      case "outlined": {
        setStyleCus({
          ...styleGlobal.border,
          borderColor: btnPrimary,
          backgroundColor: "transparent",
          color: btnPrimary,
        });
        return;
      }
      case "contained": {
        setStyleCus({
          backgroundColor: "rgba(0,0,0,0.1)",
          color: blackColor,
        });
        return;
      }
      case "text": {
        setStyleCus({
          backgroundColor: "transparent",
          color: blackColor,
        });

        return;
      }
      default: {
        setStyleCus({
          backgroundColor: whiteColor,
        });
      }
    }
  }, [mode, primary]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          width: full ? "100%" : "auto",
        },
      ]}
    >
      <Row
        center
        style={[
          shadow && styleGlobal.shadowForce,
          {
            columnGap: 10,
            borderRadius: radius,
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "transparent",
            width: full ? "100%" : "auto",
            minWidth: minWidth,
            padding: 10,
            flex: flex,
            ...labelStyle,
            ...styleCus,
            ...style,
          },
        ]}
      >
        {isLoading && (
          <>
            <ActivityIndicator color={btnPrimary} />
            <TextDefault style={{ color: "white" }}>Loading ....</TextDefault>
          </>
        )}
        {!isLoading && startIcon}
        {!isLoading && title && (
          <TextDefault
            style={{
              color: styleCus?.color,
              fontWeight: bold ? "bold" : "normal",
              ...labelStyle,
            }}
          >
            {title ?? ""}
          </TextDefault>
        )}
        {!isLoading && endIcon}
      </Row>
    </TouchableOpacity>
  );
}

export default ButtonCustom;
