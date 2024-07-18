import React, { FC, ReactNode } from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { styleGlobal } from "src/styles";

interface Props extends RNTextProps {
  children: ReactNode;
  bold?: boolean;
  entering?: any;
  numberOfLines?: any;
}

const TextDefault: FC<Props> = ({
  entering,
  children,
  style,
  bold,
  numberOfLines,
  ...rest
}) => {
  return (
    <RNText
      numberOfLines={numberOfLines}
      style={[styleGlobal.text, { fontWeight: bold ? "800" : "normal" }, style]}
    >
      {children}
    </RNText>
  );
};

export default TextDefault;
