import { useMutation } from "@tanstack/react-query";
import { endpoints } from "src/services/endpoints";
import rootApi from "src/services/rootApi";

type variables = {};

type response = {
  data: {
    fileUrl: string;
    fileName: string;
  };
};

const usePredict = () => {
  const { isPending, isError, data, error, mutateAsync, mutate } = useMutation({
    mutationFn: (variables: variables) => {
      return rootApi.post<variables, response>(endpoints.PREDICT, variables, {
        headers: {
          accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });
    },
  });

  return {
    isLoading: isPending,
    isError,
    data: data?.data,
    error,
    mutate,
    onPredict: mutateAsync,
  };
};

export default usePredict;
