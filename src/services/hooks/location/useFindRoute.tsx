import { useMutation } from "@tanstack/react-query";
import { LatLng } from "react-native-maps";
import { endpoints } from "src/services/endpoints";
import rootApi from "src/services/rootApi";

type Response = any;

export interface IFindRoute {
  data: IPoints[];
}
export interface IRoute {
  distance: number;
  weight: number;
  time: number;
  transfers: number;
  points_encoded: boolean;
  bbox: number[];
  points: IPoints;
  instructions: Instruction[];
  snapped_waypoints: SnappedWaypoints;
}

export interface IPoints {
  type: string;
  coordinates: LatLng[];
}

export interface Instruction {
  distance: number;
  heading: number;
  sign: number;
  interval: number[];
  text: string;
  time: number;
  street_name: string;
  last_heading: any;
}

export interface SnappedWaypoints {
  type: string;
  coordinates: number[][];
}

const useFindRoute = () => {
  const { mutate, mutateAsync, data, isPending, error } = useMutation<
    Response,
    Error,
    {
      origin: { lat: number; lng: number };
      destination: { lat: number; lng: number };
    }
  >({
    mutationFn: (params) =>
      rootApi.post<any, any>(endpoints.FIND_ROUTE, params),
  });

  return {
    mutate,
    onFind: mutateAsync,
    data: data?.data ?? null,
    isPending,
    error,
  };
};

export default useFindRoute;
