import { useModal } from "@context/ModalContext";
import { useMutation } from "@tanstack/react-query";
import {
  ALERT_TYPE,
  AlertNotificationDialog,
} from "react-native-alert-notification";
import { IFood } from "src/Models/food.model";
import { ILocation } from "src/Models/location.model";
import endpoints from "src/services/endpoints";
import rootApi from "src/services/rootApi";

export type variables = {
  image_url: string;
  location?: [number, number];
};
type response = {
  data: {
    location: ILocation | null;
    food: IFood | null;
    meta: [number, number] | null; // user location
  };
};
const usePredictImageLocation = () => {
  const { hideModal } = useModal();
  const {
    isLoading,
    isError,
    data,
    error,
    mutateAsync: onPredict,
  } = useMutation({
    mutationFn: (variables: variables) => {
      return rootApi.post<variables, response>(
        endpoints.PREDICT_IMG_LOCATION,
        variables,
        {}
      );
    },
    onError: (e: any) => {
      hideModal();
      AlertNotificationDialog.show({
        type: ALERT_TYPE.DANGER,
        title: "Error",
        textBody:
          e?.response?.data?.message ||
          "Can not predict image, Try again with another image",
      });
    },
    onSuccess: (data) => {},
  });

  return {
    data: data?.data ?? null,
    isLoading: isLoading,
    error: error,
    onPredictLocation: onPredict,
  };
};

export default usePredictImageLocation;
