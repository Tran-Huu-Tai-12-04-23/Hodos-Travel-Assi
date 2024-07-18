import React, { FC, ReactNode } from "react";
import { TextProps as RNTextProps, Text } from "react-native";
import { styleGlobal } from "src/styles";

interface Props extends RNTextProps {
  children: ReactNode;
  entering?: any;
}

const Title: FC<Props> = ({ entering, children, style, ...rest }) => {
  return (
    <Text style={[styleGlobal.title, style]} {...rest}>
      {children}
    </Text>
  );
};

export default Title;
