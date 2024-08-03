import ButtonCustom from "@components/ButtonCustom";
import CustomBottomSheet from "@components/CustomBottomSheet";
import Icon from "@components/Icon";
import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import { btnPrimary, secondaryColor, whiteColor } from "@constants/Colors";
import { useUserLocation } from "@context/userLocationContext";
import BottomSheet from "@gorhom/bottom-sheet";
import MainLayout from "@layout/MainLayout";
import { useRoute } from "@react-navigation/native";
import { localImages } from "assets/localImage";
import LocationIcon from "assets/svg/LocationIcon";
import React, { useMemo, useRef, useState } from "react";
import { Dimensions, Linking, Platform, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapView, { LatLng, Region } from "react-native-maps";
import { MapDirectionsResponse } from "react-native-maps-directions";
import { DirectionsData } from "src/Models/map.dto";
import { styleGlobal } from "src/styles";
import Map from "./Map";
const { width, height } = Dimensions.get("window");
const LATITUDE_DELTA = 0.0922;
const ASPECT_RATIO =
  Dimensions.get("window").width / Dimensions.get("window").height;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// const GOOGLE_MAPS_APIKEY = "AIzaSyACFEyucHfjhPUl88GCY1spvYuHi8lNEUA";
const GOOGLE_MAPS_APIKEY = "AIzaSyACFEyucHfjhPUl88GCY1spvYuHi8lNEUA";

enum MODE_MAP {
  DRIVING = "DRIVING",
  BICYCLING = "BICYCLING",
  WALKING = "WALKING",
  TRANSIT = "TRANSIT",
}

const modes = [
  {
    name: "Driving",
    key: MODE_MAP.DRIVING.toString(),
    icon: localImages().motorbikeIcon,
  },
  {
    name: "Bicycling",
    key: MODE_MAP.BICYCLING.toString(),
    icon: localImages().bycicleIcon,
  },
  {
    name: "Transit",
    key: MODE_MAP.TRANSIT.toString(),
    icon: localImages().carIcon,
  },
  {
    name: "Walking",
    key: MODE_MAP.WALKING.toString(),
    icon: localImages().footIcon,
  },
];

const openOnMaps = async (lat: any, lng: any, label: string) => {
  const scheme = Platform.select({ ios: "maps:0,0?q=", android: "geo:0,0?q=" });
  const latLng = `${lat},${lng}`;

  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });

  if (!url) return alert("Can not open google map !");
  try {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`Cannot open URL: ${url}`);
    }
  } catch (error) {
    console.error("An error occurred", error);
  }
};

const DirectionScreen: React.FC = () => {
  const { userLocation } = useUserLocation();
  const { params } = useRoute<any>();
  const { desLocation } = params as {
    desLocation: [number, number];
  };
  const [steps, setSteps] = useState<DirectionsData>([]);
  const [mode, setMode] = useState(MODE_MAP.TRANSIT.toString());
  const [informationDir, setInformationDir] = useState({
    distance: "",
    duration: "",
    start_address: "",
    end_address: "",
  });
  const [coordinates, setCoordinates] = useState<Array<LatLng>>([
    // {
    //   latitude: userLocation?.latitude ?? 10.7326452,
    //   longitude: userLocation?.longitude ?? 106.697189,
    // },
    {
      latitude: 10.7326452,
      longitude: 106.697189,
    },
    { latitude: desLocation[1], longitude: desLocation[0] },
  ]);

  const mapViewRef = useRef<MapView>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [region, setRegion] = useState<Region>({
    latitude: desLocation[1],
    longitude: desLocation[0],
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  const handleViewAreaMap = () => {
    mapViewRef?.current && mapViewRef?.current.animateToRegion(region, 1000);
  };
  const onReady = (result: MapDirectionsResponse) => {
    if (mapViewRef.current) {
      const { coordinates: routeCoordinates, legs } = result;
      // Access steps from the result object
      const steps = result?.legs[0]?.steps;
      setSteps(steps as unknown as DirectionsData);
      // ==============
      const region: Region = {
        latitude: routeCoordinates[0].latitude,
        longitude: routeCoordinates[0].longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      };
      setRegion(region);
      handleViewAreaMap();

      // ==========
      mapViewRef.current.fitToCoordinates(routeCoordinates, {
        edgePadding: {
          right: width / 10,
          bottom: height / 10,
          left: width / 10,
          top: height / 10,
        },
        animated: true,
      });

      if (legs) {
        legs.forEach((leg) => {
          setInformationDir({
            distance: leg.distance.text,
            duration: leg.duration.text,
            start_address: leg.start_address,
            end_address: leg.end_address,
          });
        });
      }
    }
  };

  const onError = (errorMessage: string) => {
    console.log(errorMessage);
  };

  const handleClosePress = () => bottomSheetRef?.current?.close();
  const handleOpenBottomSheet = () => bottomSheetRef?.current?.expand();
  const snapPoints = useMemo(() => [100, "25%", "50%", "90%"], []);

  return (
    <MainLayout isBack>
      <Map />
      <Row
        direction="column"
        full
        style={[
          styleGlobal.shadowForce,
          {
            position: "absolute",
            bottom: 0,
            padding: 10,
            backgroundColor: whiteColor,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
          },
        ]}
      >
        <Row full direction="column" style={{ padding: 10 }}>
          <Row
            full
            center
            style={{
              padding: 20,
              paddingHorizontal: 30,
              backgroundColor: "rgba(0,0,0,0.03)",
              borderRadius: 20,
            }}
          >
            <Row full direction="column">
              <Row start full style={{ alignItems: "center" }} colGap={10}>
                <Icon link={localImages().pointIcon} />
                <TextDefault bold>
                  {informationDir.start_address
                    ? informationDir.start_address
                    : "Destination Place"}
                </TextDefault>
              </Row>

              <Separator height={10} style={styleGlobal.borderBottom} />
              <Separator height={10} />

              <Row start full style={{ alignItems: "center" }} colGap={10}>
                <LocationIcon />
                <TextDefault bold>
                  {informationDir.end_address
                    ? informationDir.end_address
                    : "Destination Place"}
                </TextDefault>
              </Row>
            </Row>
            <Icon link={localImages().transactionIcon} />
          </Row>
        </Row>
        <Row start direction="column" full style={{ paddingHorizontal: 12 }}>
          <Row start colGap={20}>
            <TextDefault>Distance : </TextDefault>
            <TextDefault bold>{informationDir.distance}</TextDefault>
          </Row>
          <Row start colGap={20}>
            <TextDefault>Duration : </TextDefault>
            <TextDefault bold>{informationDir.duration}</TextDefault>
          </Row>
        </Row>

        <ScrollView style={{ flex: 1 }}>
          <Row
            colGap={10}
            between
            style={{ paddingVertical: 20, paddingHorizontal: 30 }}
          >
            {modes.map((modeMap) => (
              <TouchableOpacity
                key={modeMap.key}
                onPress={() => setMode(modeMap.key)}
              >
                <Row
                  direction="column"
                  center
                  style={[
                    {
                      padding: 10,
                      borderRadius: 10,
                      minHeight: 50,
                      minWidth: 50,
                    },
                    {
                      borderStyle: "solid",
                      borderColor: btnPrimary,
                      borderWidth: 1,
                    },
                    modeMap.key === mode && {
                      backgroundColor: secondaryColor,
                    },
                  ]}
                >
                  <Icon link={modeMap.icon} />
                </Row>
              </TouchableOpacity>
            ))}
          </Row>
        </ScrollView>

        <ButtonCustom
          onPress={handleOpenBottomSheet}
          title={"STEPS"}
          minWidth={140}
          style={{ padding: 10, fontWeight: "bold" }}
          primary
        />

        <Separator height={20} />
      </Row>

      <CustomBottomSheet
        onClose={handleClosePress}
        onOpen={handleOpenBottomSheet}
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        title={""}
      >
        <Row
          start
          direction="column"
          full
          style={{ rowGap: 10, paddingHorizontal: 20 }}
        >
          <Row start colGap={20}>
            <TextDefault>Distance : </TextDefault>
            <TextDefault bold>{informationDir.distance}</TextDefault>
          </Row>
          <Row start colGap={20}>
            <TextDefault>Duration : </TextDefault>
            <TextDefault bold>{informationDir.duration}</TextDefault>
          </Row>
          <TextDefault>This is the best way ...</TextDefault>

          <Separator height={10} style={styleGlobal.borderBottom} />
          <TextDefault>Steps</TextDefault>
          <Row start colGap={10} style={styleGlobal.borderBottom}>
            <Icon link={localImages().pointIcon} />
            <TextDefault style={{ flex: 8 }} bold>
              Vị trí của bạn
            </TextDefault>
          </Row>

          {steps.map((step, index) => (
            <Row
              full
              start
              direction="column"
              rowGap={2}
              style={[styleGlobal.borderBottom, { padding: 2 }]}
              key={index}
            >
              <Row start colGap={10}>
                <Icon link={localImages().destinationIcon} />
                <TextDefault style={{ flex: 8 }} bold>
                  {step.html_instructions}
                </TextDefault>
              </Row>
              <Row start colGap={4}>
                <TextDefault>{step.duration.text}</TextDefault>
                <TextDefault>-</TextDefault>
                <TextDefault>{step.distance.text}</TextDefault>
              </Row>
            </Row>
          ))}
        </Row>
      </CustomBottomSheet>
    </MainLayout>
  );
};

export default DirectionScreen;
