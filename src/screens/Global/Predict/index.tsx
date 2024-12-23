import { ButtonPrimary } from "@components/Button";
import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import { useBottomSheet } from "@context/bottomSheetContext";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { deviceWidth } from "@helper/utils";
import MainLayout from "@layout/MainLayout";
import { IMG } from "assets/localImage";
import CameraIcon from "assets/svg/camera-icon";
import ImageIcon from "assets/svg/image-icon";
import SearchIcon from "assets/svg/search-icon";
import React from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import Header from "./Header";

const feature = [
  {
    name: "Find location",
    icon: (
      <Image
        source={IMG.locationPredict}
        style={{
          width: normalize(40),
          height: normalize(40),
        }}
      />
    ),
  },
  {
    name: "Find delicious food",
    icon: (
      <Image
        style={{
          width: normalize(40),
          height: normalize(40),
        }}
        source={IMG.foodPredict}
      />
    ),
  },
];

const features = [
  "Analyze photos to identify dishes or locations",
  "Provides information about the identified items, including reviews, ratings, and related places nearby.",
  "Allows you to upload an image of food or a location, and it suggests related dishes, recipes, or places to visit.",
  "Upload images of food or places to match with reviews and recommendations for restaurants and landmarks in Ho Chi Minh City.",
  "A reverse image search tool that can identify locations or food images and link them to relevant sites",
  "Identifies food or landmarks based on keywords or images and provides user reviews, ratings, and recommendations for places in the city.",
];

const options = [
  {
    name: "Select library image",
    icon: <ImageIcon />,
  },
  {
    name: "Take a photo",
    icon: <CameraIcon />,
  },
];

function PredictScreen() {
  const { theme } = useTheme();
  const { openBottomSheet, hideBottomSheet } = useBottomSheet();

  const handlePredict = () => {
    openBottomSheet({
      content: (
        <Animatable.View delay={100} animation="fadeIn" easing="ease-out">
          <Row direction="column" start full colGap={normalize(20)}>
            {options.map((item, index) => (
              <TouchableOpacity key={index}>
                <Row
                  full
                  colGap={20}
                  style={{
                    alignItems: "center",
                  }}
                  start
                  rowGap={10}
                >
                  {item.icon}
                  <TextDefault size={normalize(12)} bold>
                    {item.name}
                  </TextDefault>
                </Row>
              </TouchableOpacity>
            ))}
          </Row>
        </Animatable.View>
      ),
      snapPoints: [normalize(150)],
    });
  };
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
              full
              center
              style={{
                marginTop: normalize(20),
              }}
              colGap={normalize(20)}
            >
              {feature.map((item, index) => (
                <Row key={index} direction="column" rowGap={10}>
                  {item.icon}
                  <TextDefault size={normalize(14)} bold>
                    {item.name}
                  </TextDefault>
                </Row>
              ))}
            </Row>
          </Animatable.View>
        </Row>
        <Row
          full
          direction="column"
          style={{
            paddingHorizontal: normalize(20),
          }}
        >
          <Row
            full
            center
            direction="column"
            style={{
              marginTop: normalize(20),
            }}
            colGap={normalize(20)}
            start
            rowGap={10}
          >
            {features.map((item, index) => (
              <Animatable.View
                key={index}
                delay={100 * index + 100}
                animation="fadeIn"
                easing="ease-out"
                style={{
                  padding: normalize(10),
                  borderRadius: normalize(10),
                  backgroundColor: theme.inputBackground,
                  width: "100%",
                }}
              >
                <TextDefault size={normalize(12)}>{item}</TextDefault>
              </Animatable.View>
            ))}
          </Row>
        </Row>

        <Separator height={normalize(120)} />
      </ScrollView>

      <Row
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
            onPress={handlePredict}
            iconLeft={<SearchIcon />}
          />
        </Animatable.View>
      </Row>
    </MainLayout>
  );
}
export default PredictScreen;
