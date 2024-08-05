import { useUserLocation } from "@context/userLocationContext";
import useFindDetailLocation from "@hooks/api/location/useFindDetailLocation";
import useFindRouteOfLocation from "@hooks/api/location/useFindRouteOfLocation";
import MainLayout from "@layout/MainLayout";
import { useRoute } from "@react-navigation/native";
import React from "react";
import LoadingScreen from "src/webroot/LoadingScreen";
import Map from "./Map";
import SummaryLocation from "./Summary";

// const GOOGLE_MAPS_APIKEY = "AIzaSyACFEyucHfjhPUl88GCY1spvYuHi8lNEUA";
// const GOOGLE_MAPS_APIKEY = "AIzaSyACFEyucHfjhPUl88GCY1spvYuHi8lNEUA";
const DirectionLocationScreen: React.FC = () => {
  const {
    locationId,
    desLocation,
  }: {
    desLocation: [number, number];
    locationId: string;
  } = useRoute<any>().params;
  const { data, isLoading } = useFindDetailLocation({ locationId });
  const { userLocation } = useUserLocation();
  const { data: dataRoute, isLoading: isLoadingFindRoute } =
    useFindRouteOfLocation({
      currentLocation: [
        userLocation?.latitude || 0,
        userLocation?.longitude || 0,
      ],
      targetLocation: [desLocation[1], desLocation[0]],
    });

  if (isLoading || isLoadingFindRoute) return <LoadingScreen />;

  return (
    <MainLayout isBack>
      {dataRoute && (
        <Map
          points={dataRoute?.paths[0].points.coordinates}
          currentLocation={[
            userLocation?.longitude || 0,
            userLocation?.latitude || 0,
          ]}
          targetLocation={[desLocation[1], desLocation[0]]}
        />
      )}
      {data?.currentLocation && dataRoute?.paths[0].instructions && (
        <SummaryLocation
          infoDistance={{
            distance: dataRoute?.paths[0].distance,
            time: dataRoute?.paths[0].time,
          }}
          data={data?.currentLocation}
          instructions={dataRoute?.paths[0].instructions}
        />
      )}
    </MainLayout>
  );
};

export default DirectionLocationScreen;
