import Avatar from "@components/Avatar";
import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { useTheme } from "@context/themContext";
import { FontAwesome6 } from "@expo/vector-icons";
import { normalize } from "@helper/helpers";
import { deviceWidth } from "@helper/utils";
import React from "react";
import { Platform, ScrollView, TouchableOpacity, View } from "react-native";
import { styleGlobal } from "src/styles";

const users = [
  {
    username: "Son Tung MTP",
    avatar:
      "https://ss-images.saostar.vn/wp700/pc/1655895094264/saostar-zemx7kpv9n1wnysy.jpg",
  },
  {
    username: "Jack(J97)",
    avatar:
      "https://lh3.googleusercontent.com/-jbWkpbQmmFE/Ye7I-x9iZcI/AAAAAAAAAyk/96V_aAkhvAgLBAf9eSG6yASfutCML1hrACNcBGAsYHQ/s0/jack3.png",
  },
  {
    username: "Dat G",
    avatar:
      "https://cdn.tuoitre.vn/zoom/700_700/471584752817336320/2024/5/8/datg-37fix-1715125509697637110838-134-0-1181-2000-crop-17151258802831147956621.jpeg",
  },
];
function Header() {
  const { theme } = useTheme();
  return (
    <View
      style={{
        alignItems: "center",
        paddingTop: Platform.OS === "ios" ? normalize(45) : 0,
        backgroundColor: theme.primary,
        borderBottomRightRadius: normalize(20),
        borderBottomLeftRadius: normalize(20),
        paddingBottom: normalize(10),
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Row
          full
          start
          colGap={10}
          style={{
            padding: normalize(10),
          }}
        >
          <TouchableOpacity>
            <Row direction="column" rowGap={5}>
              <View
                style={{
                  ...styleGlobal.border,
                  borderColor: theme.border,
                  borderRadius: normalize(100),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: theme.inputBackground,
                    width: normalize(40),
                    height: normalize(40),
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: normalize(100),
                    margin: normalize(2),
                  }}
                >
                  <FontAwesome6 name="add" size={24} color={theme.textSecond} />
                </View>
              </View>
              <TextDefault color="white">Add Post</TextDefault>
            </Row>
          </TouchableOpacity>

          {users.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={{ width: deviceWidth / 5 }}>
                <Row direction="column" rowGap={5}>
                  <View
                    style={{
                      ...styleGlobal.border,
                      borderColor: theme.hightLight,
                      borderRadius: normalize(100),
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Avatar size={normalize(46)} url={item.avatar} />
                  </View>

                  <TextDefault center color="white">
                    {item.username}
                  </TextDefault>
                </Row>
              </TouchableOpacity>
            );
          })}
        </Row>
      </ScrollView>
    </View>
  );
}

export default Header;
