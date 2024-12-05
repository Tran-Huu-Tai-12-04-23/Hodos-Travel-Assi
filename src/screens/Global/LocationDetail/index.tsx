import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { deviceHeight, deviceWidth } from "@helper/utils";
import MainLayout from "@layout/MainLayout";
import { useRoute } from "@react-navigation/native";
import LocationIcon from "assets/svg/location-icon";
import { Image } from "expo-image";
import React from "react";
import {
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { SharedElement } from "react-navigation-shared-element";
import useLocationDetail from "src/services/hooks/location/useLocationDetail";
import Header from "./Header";
function LocationDetailScreen() {
  const { id } = useRoute().params as {
    id: string;
  };
  const { data, isLoading } = useLocationDetail(id);
  const { theme } = useTheme();
  const [isMore, setIsMore] = React.useState(true);

  return (
    <MainLayout isSafe>
      <Animatable.View
        animation="fadeIn"
        delay={100}
        duration={400}
        easing="ease-in-out"
      >
        <Header title={"Chi tiết địa điểm"} />
      </Animatable.View>
      <Row
        full
        direction="column"
        style={{
          flex: 1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <View
            style={{
              height: normalize(deviceHeight / 3),
            }}
          >
            <SharedElement id={`trip.${id}.image`}>
              <Image
                resizeMode="cover"
                source={{ uri: data?.lstImgs[0] }}
                style={{
                  width: deviceWidth,
                  height: normalize(deviceHeight / 3),
                }}
              />
            </SharedElement>
          </View>
          {isLoading && (
            <Row style={{ padding: normalize(20), flex: 1 }} full center>
              <ActivityIndicator color={theme.primary} />
            </Row>
          )}
          <Separator height={10} />
          <Animatable.View
            animation="fadeIn"
            delay={300}
            duration={400}
            easing="ease-in-out"
          >
            <View
              style={{
                flex: 0.4,
                overflow: "hidden",
                paddingHorizontal: normalize(15),
                width: deviceWidth,
                flexDirection: "column",
                rowGap: 10,
              }}
            >
              <TextDefault bold size={normalize(20)}>
                {data?.name}
              </TextDefault>
              <Row
                start
                full
                colGap={5}
                style={{
                  paddingRight: normalize(20),
                }}
              >
                <LocationIcon size={normalize(20)} />
                <TextDefault>{data?.address}</TextDefault>
              </Row>
              <TextDefault color={theme.textSecond}>
                {isMore
                  ? data?.description
                  : data?.description?.substring(0, 100)}
              </TextDefault>
              <TouchableOpacity onPress={() => setIsMore(!isMore)}>
                <TextDefault color={theme.hightLight}>Read more</TextDefault>
              </TouchableOpacity>
              <Separator height={normalize(50)} />
            </View>
          </Animatable.View>
        </ScrollView>
      </Row>
      {/* <Row
        center
        full
        style={{
          marginTop: "auto",
          position: "absolute",
          bottom: normalize(20),
        }}
      >
        <ButtonPrimary minWidth={"90%" as any} title="Map" onPress={() => {}} />
      </Row> */}
    </MainLayout>
  );
}

export default LocationDetailScreen;
