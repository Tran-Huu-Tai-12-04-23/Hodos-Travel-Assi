import { useUserLocation } from "@context/userLocationContext";
import useFindDetailFood from "@hooks/api/food/useFindDetailFood";
import useFindRouteOfLocation from "@hooks/api/location/useFindRouteOfLocation";
import MainLayout from "@layout/MainLayout";
import { useRoute } from "@react-navigation/native";
import React from "react";
import LoadingScreen from "src/webroot/LoadingScreen";
import Map from "./Map";
import SummaryFood from "./Summary";

// const GOOGLE_MAPS_APIKEY = "AIzaSyACFEyucHfjhPUl88GCY1spvYuHi8lNEUA";
// const GOOGLE_MAPS_APIKEY = "AIzaSyACFEyucHfjhPUl88GCY1spvYuHi8lNEUA";
const DirectionFoodScreen: React.FC = () => {
  const {
    foodId,
    desLocation,
  }: {
    desLocation: [number, number];
    foodId: string;
  } = useRoute<any>().params;
  const { data, isLoading } = useFindDetailFood({ locationId: foodId });
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
      {data?.currentFood && dataRoute?.paths[0].instructions && (
        <SummaryFood
          infoDistance={{
            distance: dataRoute?.paths[0].distance,
            time: dataRoute?.paths[0].time,
          }}
          data={data?.currentFood}
          instructions={dataRoute?.paths[0].instructions}
        />
      )}
    </MainLayout>
  );
};

export default DirectionFoodScreen;
