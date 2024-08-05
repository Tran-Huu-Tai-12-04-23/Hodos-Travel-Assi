import { useQuery } from "@tanstack/react-query";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";
import { vietmapAPI } from "src/services/rootApi";

export type variables = {
  currentLocation: [number, number];
  targetLocation: [number, number];
};

export type ICoordinates = [number, number][];
export type IStep = {
  distance: number;
  heading: number;
  sign: number;
  interval: [number, number];
  text: string;
  time: number;
  street_name: string;
  last_heading: string;
};
export type IFindRoute = {
  data: {
    license: string;
    code: string;
    message: string;
    paths: [
      {
        distance: number;
        weight: number;
        time: number;
        transfers: number;
        points_encoded: false;
        bbox: number[];
        points: {
          type: string;
          coordinates: ICoordinates;
        };
        instructions: IStep[];
        snapped_waypoints: {
          type: string;
          coordinates: [number, number][];
        };
      }
    ];
  };
};
const useFindRouteOfLocation = (variables: variables) => {
  const link = `/route?point=${variables.currentLocation[0]},${variables.currentLocation[1]}&point=${variables.targetLocation[0]},${variables.targetLocation[1]}&apikey=9cbf0bc15d3901b7e043d8f76be8d73f370a82fe629a2d46&points_encoded=false`;
  const { data, isLoading, error } = useQuery({
    queryKey: [link, variables],
    queryFn: () =>
      vietmapAPI.get<variables, IFindRoute>(link, {
        params: variables,
      }),
    onError: (err: { message: string }) => {
      Toast.show({
        title: err?.message,
        type: ALERT_TYPE.DANGER,
      });
    },
    onSuccess: (data) => {},
  });

  return {
    data: data?.data?.code === "OK" ? data?.data : null,
    isLoading: isLoading,
    error: error,
  };
};

export default useFindRouteOfLocation;
