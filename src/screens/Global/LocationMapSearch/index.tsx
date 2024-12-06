import { IconButton } from "@components/Button";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { deviceWidth } from "@helper/utils";
import MainLayout from "@layout/MainLayout";
import { goBack } from "@navigation/NavigationService";
import ArrowLeftIcon from "assets/svg/arrow-left-icon";
import SearchIcon from "assets/svg/search-icon";
import { Image } from "expo-image";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Marker, Polygon } from "react-native-maps";

import Row from "@components/Row";
import useFindRoute, {
  IFindRoute,
  IPoints,
} from "src/services/hooks/location/useFindRoute";
import useLocationPagination from "src/services/hooks/location/useLocationPagination";
import { styleGlobal } from "src/styles";
import Carousel from "./Components/Carousel";

const currentLocation = {
  latitude: 10.7934898722325,
  longitude: 106.77495892535461,
};
const LocationMapSearchScreen = () => {
  const [currentIdxLocation, setCurrentIdxLocation] = React.useState(0);
  const { theme } = useTheme();
  const mapRef = React.useRef<MapView>(null);
  const { data, isLoading } = useLocationPagination({});
  const [isLoadingView, setIsLoadingView] = React.useState(true);
  const { onFind, isPending: isLoadingFindRoute } = useFindRoute();
  const [routes, setRoutes] = React.useState<IPoints[]>([]);
  const handleFocus = async (location: any) => {
    mapRef.current?.animateCamera({
      center: {
        latitude: parseFloat(location.coordinates?.split(",")[0]),
        longitude: parseFloat(location.coordinates?.split(",")[1]),
      },
      zoom: 15,
    });

    await onFind({
      origin: {
        lat: currentLocation.latitude,
        lng: currentLocation.longitude,
      },
      destination: {
        lat: parseFloat(location.coordinates?.split(",")[0]),
        lng: parseFloat(location.coordinates?.split(",")[1]),
      },
    }).then((res: { data: IFindRoute }) => {
      setRoutes(res?.data?.data);
    });
  };

  useEffect(() => {
    const location = data[currentIdxLocation];
    if (location) {
      handleFocus(location);
    }
  }, [currentIdxLocation]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoadingView(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <MainLayout>
      {!isLoadingView && (
        <MapView
          zoomEnabled
          ref={mapRef}
          style={[styles.map]}
          initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          {data && data[currentIdxLocation] && (
            <Marker
              coordinate={{
                latitude: parseFloat(
                  data[currentIdxLocation].coordinates?.split(",")[0]
                ),
                longitude: parseFloat(
                  data[currentIdxLocation].coordinates?.split(",")[1]
                ),
              }}
              title={data[currentIdxLocation].name}
              description={data[currentIdxLocation].description}
            >
              <TouchableOpacity onPress={() => {}}>
                <View style={styles.customMarker}>
                  <Image
                    source={{ uri: data[currentIdxLocation].img }}
                    style={[styles.markerImage, { borderColor: theme.primary }]}
                  />
                </View>
              </TouchableOpacity>
            </Marker>
          )}
          <Marker
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
            title={"Your location"}
          >
            <View
              style={[
                styles.customMarker,
                {
                  backgroundColor: theme.primary,
                  ...styleGlobal.shadow,
                },
              ]}
            >
              <Image
                source={{
                  uri: "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474119Flf/hinh-nen-jack-97-full-hd_011645903.jpg",
                }}
                style={[styles.markerImage, { borderColor: theme.second }]}
              />
            </View>
          </Marker>
          {/* vẽ  đường dựa vào lst kinh độ vỹ độ  */}
          {routes && routes?.length > 0 && (
            <Polygon
              coordinates={[
                // {
                //   latitude: currentLocation.latitude,
                //   longitude: currentLocation.longitude,
                // },
                ...routes[0].coordinates,
                // {
                //   latitude: data[currentIdxLocation].coordinates?.split(",")[0],
                //   longitude: data[currentIdxLocation].coordinates?.split(",")[1],
                // },
              ]}
              fillColor="rgba(0, 200, 0, 0)"
              strokeColor={theme.primary}
              strokeWidth={2}
              tappable={true}
            />
          )}
        </MapView>
      )}

      <View
        style={{
          width: deviceWidth - 40,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          columnGap: 5,
          marginTop: normalize(50),
          marginHorizontal: 20,
          position: "absolute",
          top: 0,
        }}
      >
        {isLoadingView && <ActivityIndicator />}
        <Row
          full
          between
          colGap={10}
          style={{
            alignItems: "center",
          }}
        >
          <IconButton
            icon={<ArrowLeftIcon color={theme.textSecond} />}
            onPress={goBack}
          />
          <TextInput
            placeholder="Tìm kiếm"
            placeholderTextColor={theme.text}
            style={{
              flex: 1,
              height: 40,
              backgroundColor: theme.inputBackground,
              borderRadius: 100,
              padding: 10,
              paddingHorizontal: 20,
            }}
          />
          <IconButton
            icon={<SearchIcon color={theme.textSecond} />}
            onPress={function (): void {}}
          />
        </Row>
      </View>
      {data && (
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            columnGap: 5,
            position: "absolute",
            bottom: 20,
            left: 0,
            right: 0,
          }}
        >
          <Carousel
            onChange={(idx: number) => {
              setCurrentIdxLocation(idx);
            }}
            data={data}
          />
        </View>
      )}
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  customMarker: {
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    overflow: "hidden",
  },
  markerImage: {
    width: normalize(40),
    height: normalize(40),
    borderRadius: 20,

    ...styleGlobal.border,
    borderWidth: 2,
    backgroundColor: "white",
  },
});

export default LocationMapSearchScreen;
