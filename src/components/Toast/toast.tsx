import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { normalize } from "@helper/helpers";
import CloseIcon from "assets/svg/close-icon";
import ErrorIcon from "assets/svg/toast/error-icon";
import InfoIcon from "assets/svg/toast/info-icon";
import SuccessIcon from "assets/svg/toast/success-icon";
import WarningIcon from "assets/svg/toast/warning-icon";
import React, { useMemo } from "react";
import { TouchableOpacity } from "react-native";
import { styleGlobal } from "src/styles";

export type ToastType = "success" | "error" | "warning" | "info";
function Toast({
  message,
  title,
  type = "info",
  onClose,
}: {
  message?: string;
  title: string;
  type?: ToastType;
  onClose?: () => void;
}) {
  const style = useMemo(() => {
    switch (type) {
      case "success":
        return { backgroundColor: "#F6FFF9", borderColor: "#48C1B5" };
      case "error":
        return {
          backgroundColor: "#FFF5F3",
          borderColor: "#E17D6C",
        };
      case "warning":
        return { backgroundColor: "#FFF8EC", borderColor: "#FFB545" };
      case "info":
        return { backgroundColor: "#F5F9FF", borderColor: "#4DB6EF" };
    }
  }, [type]);
  return (
    <Row
      start
      rowGap={5}
      full
      style={[
        {
          ...styleGlobal.border,
          borderColor: style.borderColor,
          borderRadius: normalize(10),
          padding: normalize(14),
          backgroundColor: style.backgroundColor,
          margin: 4,
          alignItems: "center",
        },
      ]}
      colGap={10}
    >
      {type === "success" && <SuccessIcon />}
      {type === "error" && <ErrorIcon />}
      {type === "info" && <InfoIcon />}
      {type === "warning" && <WarningIcon />}
      <Row
        style={{
          width: "80%",
        }}
        start
        direction="column"
      >
        <TextDefault numberOfLines={1} bold>
          {title}
        </TextDefault>
        {message && (
          <TextDefault
            style={{
              color: "gray",
            }}
          >
            {message}
          </TextDefault>
        )}
      </Row>
      <TouchableOpacity onPress={onClose}>
        <CloseIcon />
      </TouchableOpacity>
    </Row>
  );
}

export default Toast;
