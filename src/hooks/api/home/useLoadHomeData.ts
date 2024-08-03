import { useQuery } from "@tanstack/react-query";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";
import { IFood } from "src/Models/food.model";
import { ILocation } from "src/Models/location.model";
import endpoints from "src/services/endpoints";
import rootApi from "src/services/rootApi";

export type variables = {
  location: [number, number];
};
type response = {
  data: {
    foods: IFood[];
    locations: ILocation[];
  };
};
const useLoadHomeData = (variables: variables) => {
  const { data, isLoading, refetch, error, isFetching } = useQuery({
    queryKey: [endpoints.LOAD_DATA_HOME, variables],
    queryFn: () =>
      rootApi.post<variables, response>(endpoints.LOAD_DATA_HOME, variables),
    onError: (err: { message: string }) => {
      Toast.show({
        title: err?.message,
        type: ALERT_TYPE.DANGER,
      });
    },
  });

  return {
    refetch,
    data: data?.data ?? { foods: [], locations: [] },
    isLoading: isLoading,
    error: error,
    isFetching,
  };
};

export default useLoadHomeData;
