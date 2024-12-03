import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { normalize } from "@helper/helpers";
import { IMG } from "assets/localImage";
import React from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";

const Cate = [
  {
    name: "Location",
    icon: IMG.architectImg,
  },
  {
    name: "Food",
    icon: IMG.foodImg,
  },
  {
    name: "Entertain",
    icon: IMG.entertainmentImg,
  },
  {
    name: "Park",
    icon: IMG.parkImg,
  },
  {
    name: "Beach",
    icon: IMG.beachImg,
  },
];
function Categories() {
  return (
    <Row full start direction="column" rowGap={10}>
      <TextDefault
        bold
        size={20}
        style={{
          paddingHorizontal: normalize(20),
        }}
      >
        Categories
      </TextDefault>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            columnGap: 20,
            paddingLeft: normalize(20),
          }}
        >
          {Cate.map((item, index) => (
            <TouchableOpacity key={index}>
              <Row direction="column" rowGap={5} center>
                <Row
                  style={{
                    borderRadius: 1000,
                    padding: normalize(15),
                    backgroundColor: "#F5F5F5",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    style={{
                      width: normalize(30),
                      height: normalize(30),
                    }}
                    source={item.icon}
                    alt={item.name}
                  />
                </Row>
                <TextDefault size={16} style={{ marginLeft: 10 }}>
                  {item.name}
                </TextDefault>
              </Row>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </Row>
  );
}

export default Categories;
