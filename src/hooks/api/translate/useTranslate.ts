import { useMutation } from "@tanstack/react-query";
import {
  ALERT_TYPE,
  AlertNotificationDialog,
} from "react-native-alert-notification";
import endpoints from "src/services/endpoints";
import rootApi from "src/services/rootApi";

export type variables = {
  text: string;
};
export interface TranslationDTO {
  data: {
    translations: {
      translatedText: string;
    };
  };
}
type response = {
  data: TranslationDTO;
};
const useTranslate = () => {
  const {
    isLoading,
    isError,
    data,
    error,
    mutateAsync: onTranslate,
  } = useMutation({
    mutationFn: (variables: variables) => {
      return rootApi.post<variables, response>(
        endpoints.TRANSLATE,
        variables,
        {}
      );
    },
    onError: (e: any) => {
      AlertNotificationDialog.show({
        type: ALERT_TYPE.DANGER,
        title: "Error",
        textBody: e?.response?.data?.message,
      });
    },
    onSuccess: (data) => {},
  });

  return {
    data: data?.data ?? null,
    isLoading: isLoading,
    error: error,
    onTranslate,
  };
};

export default useTranslate;
