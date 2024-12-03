import { useToast } from "@context/toastContext";
import { navigate } from "@navigation/NavigationService";
import { AUTH_ROUTE } from "@navigation/route";
import { useMutation } from "@tanstack/react-query";
import { IUser } from "src/dto";
import { endpoints } from "src/services/endpoints";
import rootApi from "src/services/rootApi";

type RegisterParams = {
  username: string;
  password: string;
};
type RegisterResponse = {
  data: {
    accessToken: string;
    refreshToken: string;
    user: IUser;
    enumData: any;
  };
};

const useRegister = () => {
  const { showToast } = useToast();
  const { isPending, isError, data, error, mutateAsync } = useMutation({
    mutationFn: (variables: RegisterParams) => {
      return rootApi.post<RegisterParams, RegisterResponse>(
        endpoints.REGISTER,
        variables
      );
    },
    onError: (e: any) => {
      console.log(e);
      showToast({
        title: "Register failed!",
        type: "ERROR",
        message: e?.response?.data?.message || "Đã có lỗi xảy ra",
      });
    },
    onSuccess: async () => {
      showToast({
        title: "Register",
        type: "SUCCESS",
        message: "Successfully!",
      });
      navigate(AUTH_ROUTE.LOGIN);
    },
  });
  return {
    isLoading: isPending,
    isError,
    data,
    error,
    onRegister: mutateAsync,
  };
};

export default useRegister;
