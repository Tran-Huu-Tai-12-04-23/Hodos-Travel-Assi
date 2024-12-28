import { Image } from "expo-image";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
type Props = {
  url?: string;
  source?: any;
  size?: number;
};
function Avatar({ url, source, size = 50 }: Props) {
  return (
    <TouchableOpacity>
      <Image
        source={source ? source : { uri: url }}
        style={[
          styles.avatar,
          {
            width: size,
            height: size,
          },
        ]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
export default Avatar;
