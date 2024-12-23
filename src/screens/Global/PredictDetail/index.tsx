import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { deviceWidth } from "@helper/utils";
import MainLayout from "@layout/MainLayout";
import CameraIcon from "assets/svg/camera-icon";
import ImageIcon from "assets/svg/image-icon";
import UploadIcon from "assets/svg/upload-icon";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { styleGlobal } from "src/styles";
import Header from "./Header";

const feature = [
  {
    name: "Select library image",
    icon: <ImageIcon />,
  },
  {
    name: "Take a photo",
    icon: <CameraIcon />,
  },
];

function PredictDetailScreen() {
  const { theme } = useTheme();
  return (
    <MainLayout>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Row
          full
          direction="column"
          style={{
            padding: normalize(20),
          }}
        >
          <Animatable.View delay={100} animation="fadeIn" easing="ease-out">
            <Row
              center
              style={{
                marginTop: normalize(20),
              }}
              colGap={normalize(20)}
            >
              <TouchableOpacity
                style={{
                  width: deviceWidth - normalize(40),
                  height: deviceWidth - normalize(40),
                  padding: normalize(10),
                  borderRadius: normalize(10),
                  backgroundColor: theme.backgroundSecond,
                  ...styleGlobal.shadow,
                }}
              >
                <Row
                  center
                  rowGap={10}
                  full
                  style={{ height: "100%" }}
                  direction="column"
                >
                  <UploadIcon />
                  <TextDefault>Select Your Library or Take it</TextDefault>
                </Row>
              </TouchableOpacity>
            </Row>
          </Animatable.View>
          {/* <Animatable.View delay={100} animation="fadeIn" easing="ease-out">
            <Row
              center
              style={{
                marginTop: normalize(20),
              }}
              colGap={normalize(20)}
            >
              {feature.map((item, index) => (
                <TouchableOpacity key={index}>
                  <Row direction="column" rowGap={10}>
                    <Row
                      center
                      style={{
                        width: normalize(deviceWidth / 4),
                        borderRadius: normalize(10),
                        backgroundColor: theme.background,
                        ...styleGlobal.shadow,
                      }}
                    >
                      {item.icon}
                    </Row>
                    <TextDefault size={normalize(12)} bold>
                      {item.name}
                    </TextDefault>
                  </Row>
                </TouchableOpacity>
              ))}
            </Row>
          </Animatable.View> */}
        </Row>
        <Separator height={normalize(120)} />
      </ScrollView>

      {/* <Row
        full
        style={{
          position: "absolute",
          bottom: normalize(30),
          left: 20,
          right: 20,
        }}
      >
        <Animatable.View
          delay={100}
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
        >
          <ButtonPrimary
            minWidth={deviceWidth - normalize(40)}
            title="Predict"
            onPress={() => {}}
            iconLeft={<SearchIcon />}
          />
        </Animatable.View>
      </Row> */}
    </MainLayout>
  );
}
export default PredictDetailScreen;
