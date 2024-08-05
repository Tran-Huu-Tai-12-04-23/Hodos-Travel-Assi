import ButtonCustom from "@components/ButtonCustom";
import Row from "@components/Row";
import Separator from "@components/Separator";
import SlideImage from "@components/SlideImage";
import TextDefault from "@components/TextDefault";
import { btnPrimary, hightLightColor, whiteColor } from "@constants/Colors";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { deviceHeight } from "@helper/utils";
import useFindDetailLocation from "@hooks/api/location/useFindDetailLocation";
import MainLayout from "@layout/MainLayout";
import { navigate } from "@navigation/NavigationService";
import { ROUTE_KEY } from "@navigation/route";
import { useRoute } from "@react-navigation/native";
import Vietmap from "@vietmap/vietmap-gl-react-native";
import React, { useState } from "react";
import { Modal, Platform, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import ImageViewer from "react-native-image-zoom-viewer";
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
        <Row
          style={{
            height: 300,
            borderBottomEndRadius: 20,
            borderBottomStartRadius: 20,
            overflow: "hidden",
          }}
          full
        >
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
            backgroundColor: whiteColor,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            paddingHorizontal: 10,
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

          <View
            style={{
              width: "100%",
              height: 200,
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <Vietmap.MapView
              styleURL={
                "https://maps.vietmap.vn/api/maps/dark/styles.json?apikey=9cbf0bc15d3901b7e043d8f76be8d73f370a82fe629a2d46"
              }
              style={{ flex: 1 }}
              logoEnabled={false}
            >
              <Vietmap.Camera
                zoomLevel={13}
                followZoomLevel={13}
                followUserLocation={false}
                centerCoordinate={coordinates.coordinates}
              />
              <Vietmap.MarkerView coordinate={coordinates.coordinates}>
                <Vietmap.Callout title={address} />
              </Vietmap.MarkerView>
            </Vietmap.MapView>
          </View>
        </Row>
        <LstLocation locations={data?.nearLocations || []} />

        <Separator height={100} />
      </ScrollView>
      <ButtonCustom
        primary
        onPress={() =>
          navigate(ROUTE_KEY.DIRECTION_LOCATION, {
            desLocation: [longitude, latitude],
            locationId: _id,
          })
        }
        title={""}
        full
        style={{
          padding: 10,
          position: "absolute",
          maxWidth: 50,
          bottom: 10,
          right: 10,
        }}
        endIcon={
          <MaterialIcons name="directions" size={36} color={whiteColor} />
        }
      />
    </MainLayout>
  );
}
