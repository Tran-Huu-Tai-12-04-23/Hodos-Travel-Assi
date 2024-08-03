import ButtonCustom from "@components/ButtonCustom";
import Row from "@components/Row";
import Separator from "@components/Separator";
import SlideImage from "@components/SlideImage";
import TextDefault from "@components/TextDefault";
import {
  blackColor,
  btnPrimary,
  hightLightColor,
  mainBg,
  whiteColor,
} from "@constants/Colors";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { deviceHeight } from "@helper/utils";
import useFindDetailLocation from "@hooks/api/location/useFindDetailLocation";
import MainLayout from "@layout/MainLayout";
import { navigate } from "@navigation/NavigationService";
import { ROUTE_KEY } from "@navigation/route";
import { useRoute } from "@react-navigation/native";
import { localImages } from "assets/localImage";
import React, { useState } from "react";
import { Modal, Platform, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ImageViewer from "react-native-image-zoom-viewer";
import MapView, { Marker } from "react-native-maps";
import LstLocation from "src/screens/BottomTab/Home/LstLocation";
import { styleGlobal } from "src/styles";
import LoadingScreen from "src/webroot/LoadingScreen";
import NotFoundIdentity from "src/webroot/NotFoundIdentity";
import { infoArea } from "../_mock";

export default function DetailLocationScreen() {
  const [isExpand, setIsExpand] = useState(false);
  const [isViewerImg, setIsViewerImg] = useState(false);
  const { params } = useRoute();
  const { _id, distanceIF } = params as {
    _id: string;
    distanceIF: {
      distanceInKilometers: number;
      distanceInMeters: number;
    };
  };
  if (!_id) {
    return <NotFoundIdentity title="Location ID not found!" />;
  }
  const { data, isLoading } = useFindDetailLocation({ locationId: _id });
  if (isLoading) {
    return <LoadingScreen />;
  }
  if (!data) {
    return <NotFoundIdentity title="Location not found!" />;
  }

  const {
    coordinates,
    lstImgs = [],
    name,
    address,
    description,
  } = data.currentLocation;

  const [longitude, latitude] = coordinates?.coordinates ?? [-1, -1];

  const infoMap = infoArea(latitude, longitude);

  return (
    <MainLayout
      style={{
        padding: 0,
        minHeight: deviceHeight,
        flex: 1,
        backgroundColor: whiteColor,
      }}
      isBack
    >
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 10 }}>
        <Row style={{ height: 300 }} full>
          <SlideImage
            images={lstImgs}
            onPressImage={() => setIsViewerImg(true)}
          />
        </Row>

        <Modal visible={isViewerImg}>
          <AntDesign
            style={{
              position: "absolute",
              top: Platform.OS == "ios" ? 100 : 10,
              right: 10,
              zIndex: 1000,
            }}
            onPress={() => setIsViewerImg(false)}
            name="closecircleo"
            size={24}
            color="white"
          />
          <ImageViewer
            imageUrls={lstImgs.map((img) => {
              return { url: img };
            })}
          />
        </Modal>

        <Row
          style={{
            minHeight: "80%",
            backgroundColor: whiteColor,
            transform: [{ translateY: -100 }],
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            paddingHorizontal: 20,
            paddingVertical: 14,
          }}
          full
          start
          direction="column"
        >
          <TextDefault style={styleGlobal.textHeader}>{name}</TextDefault>
          <TextDefault bold>{address}</TextDefault>
          <TextDefault style={{ color: hightLightColor }}>
            {distanceIF?.distanceInKilometers} kms from you.
          </TextDefault>
          <TextDefault>
            {description?.substring(
              0,
              isExpand ? description.toString().length : 100
            )}
          </TextDefault>
          <TouchableOpacity onPress={() => setIsExpand(!isExpand)}>
            <TextDefault
              bold
              style={{
                color: btnPrimary,
                fontSize: 18,
                textDecorationLine: "underline",
              }}
            >
              {isExpand ? "Less" : "More"}
            </TextDefault>
          </TouchableOpacity>
          <Separator height={20} />
          {/* <Row start colGap={20}>
            <ButtonCustom
              style={{ padding: 5 }}
              primary
              onPress={() => {}}
              title={"Review"}
            />
          </Row> */}
          <Separator height={20} />

          <View
            style={{
              width: "100%",
              height: 200,
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <MapView
              initialRegion={{
                latitude: infoMap.LATITUDE,
                longitude: infoMap.LONGITUDE,
                latitudeDelta: infoMap.LATITUDE_DELTA,
                longitudeDelta: infoMap.LONGITUDE_DELTA,
              }}
              style={{ width: "100%", height: 200, borderRadius: 20 }}
            >
              <Marker
                coordinate={{
                  latitude: infoMap.LATITUDE,
                  longitude: infoMap.LONGITUDE,
                }}
                title="You location"
                description="Origin Point"
                pinColor={blackColor}
                icon={localImages().originIcon}
              />
            </MapView>
          </View>

          <Separator height={30} />
          <TextDefault bold>Nearby Locations</TextDefault>
          <Separator height={20} />
          <LstLocation locations={data?.nearLocations || []} />

          <Separator height={10} />
        </Row>
      </ScrollView>
      <Row
        full
        center
        colGap={20}
        style={[
          {
            backgroundColor: mainBg,
            flex: 0.1,
            maxHeight: 60,
            marginBottom: Platform.OS === "ios" ? 60 : 30,
          },
        ]}
      >
        <ButtonCustom
          onPress={() => {}}
          title={"Save"}
          labelStyle={{ color: "black" }}
          style={{ padding: 10, width: 100 }}
          textColor={btnPrimary}
          background={whiteColor}
        />
        <ButtonCustom
          primary
          onPress={() =>
            navigate(ROUTE_KEY.DIRECTION, {
              desLocation: [longitude, latitude],
            })
          }
          title={"Director"}
          full
          style={{ width: 200, padding: 10 }}
          endIcon={
            <MaterialIcons name="directions" size={20} color={whiteColor} />
          }
        />
      </Row>
    </MainLayout>
  );
}
