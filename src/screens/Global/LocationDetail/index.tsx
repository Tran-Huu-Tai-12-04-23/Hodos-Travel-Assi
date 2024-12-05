import Carousel from "@components/Carousel";
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
      <Header title={"Chi tiết địa điểm"} />
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
              margin: normalize(10),
            }}
          >
            {data?.lstImgs && (
              <Carousel
                style={{
                  height: normalize(deviceHeight / 3),
                }}
                pages={data?.lstImgs?.map((item, index) => (
                  <Image
                    key={index}
                    resizeMode="cover"
                    source={{ uri: item }}
                    style={{
                      width: "100%",
                      height: normalize(deviceHeight / 3),
                      borderRadius: normalize(20),
                    }}
                  />
                ))}
              />
            )}
          </View>
          {isLoading && (
            <Row style={{ padding: normalize(20), flex: 1 }} full center>
              <ActivityIndicator color={theme.primary} />
            </Row>
          )}

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
