import { btnPrimary } from "@constants/Colors";
import { ICoordinates } from "@hooks/api/location/useFindRouteOfLocation";
import { default as Vietmap } from "@vietmap/vietmap-gl-react-native";
import DriverMotorIcon from "assets/svg/DriverMotorIcon";
import React, { useRef } from "react";
import { StyleSheet } from "react-native";
export default function Map({
  points,
  currentLocation,
}: {
  points: ICoordinates;
  currentLocation: [number, number];
  targetLocation: [number, number];
}) {
  const mapRef = useRef<any>(null);

  return (
    <>
      <Vietmap.MapView
        ref={mapRef}
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
          centerCoordinate={currentLocation}
        />
        <Vietmap.PointAnnotation
          id="annotation-hidden"
          coordinate={currentLocation}
          style={{ backgroundColor: "white", zIndex: 100000 }}
        >
          <DriverMotorIcon />
        </Vietmap.PointAnnotation>
        <Vietmap.ShapeSource
          id="lineSource"
          shape={{ type: "LineString", coordinates: points }}
        >
          <Vietmap.LineLayer
            id="lineLayer"
            style={{
              lineColor: btnPrimary,
              lineWidth: 6,
              lineJoin: "round",
              lineCap: "round",
            }}
          />
        </Vietmap.ShapeSource>
        {/* <Vietmap.MarkerView coordinate={currentLocation}></Vietmap.MarkerView> */}
      </Vietmap.MapView>
    </>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  map: {
    flex: 1,
  },

  touchableContainer: {
    borderColor: "black",
    borderWidth: 1.0,
    borderRadius: 100,
  },
  touchable: {
    backgroundColor: "blue",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
