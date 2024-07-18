import React from "react";
import { Image } from "react-native";

function Avatar({
  link,
  size,
  style,
}: {
  link: any;
  size?: number;
  style?: any;
}) {
  return (
    <Image
      source={link}
      style={[
        {
          width: size ? size : 45,
          height: size ? size : 45,
          borderRadius: 100,
        },
        style,
      ]}
    />
  );
}

export default Avatar;
