import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { primaryColor } from "@constants/Colors";
import { useUserLocation } from "@context/userLocationContext";
import useLoadHomeData from "@hooks/api/home/useLoadHomeData";
import MainLayout from "@layout/MainLayout";
import * as Location from "expo-location";
import React, { useEffect } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { Toast } from "react-native-alert-notification";
import Features from "./Features";
import Header from "./Header";
import LstFood from "./LstFood";
import LstLocation from "./LstLocation";
import Search from "./Search";
function HomeScreen() {
  const { userLocation, setUserLocation } = useUserLocation();
  const { data, isLoading, refetch, isFetching } = useLoadHomeData({
    // location: [
    //   userLocation?.longitude || 37.785834,
    //   userLocation?.latitude || -122.406417,
    // ],
    location: [106.6880843, 10.7353702],
  });

  useEffect(() => {
    let watchId: any;
    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          Toast.show({
            title: "Permission to access location was denied",
          });
          return;
        }
        const location = await Location.getCurrentPositionAsync({
          accuracy: 4,
          timeInterval: 4,
          distanceInterval: 10,
        });

        if (location.coords)
          setUserLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
        // console.log("=====================Current Position:", location.coords);
        watchId = Location.watchPositionAsync(
          {
            accuracy: 4,
            timeInterval: 4,
            distanceInterval: 10,
          },

          (position) => {
            if (position.coords)
              setUserLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
          }
        );
      } catch (err) {
        console.warn(err);
      }
    };
    getLocation();
    return () => {
      Location.stopLocationUpdatesAsync(watchId);
    };
  }, []);

  return (
    <MainLayout style={{ paddingBottom: 0 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={refetch} />
        }
      >
        <Row direction="column" start full rowGap={10}>
          <Header />
          <TextDefault bold style={{ fontSize: 32, padding: 10 }}>
            Welcome to{"\n"}
            <TextDefault bold style={{ fontSize: 32, color: primaryColor }}>
              Ho Chi Minh City
            </TextDefault>
          </TextDefault>
          <Features />
          <Search />
          <LstLocation locations={data.locations} />
          <LstFood foods={data.foods} />
        </Row>
      </ScrollView>
    </MainLayout>
  );
}

export default HomeScreen;
