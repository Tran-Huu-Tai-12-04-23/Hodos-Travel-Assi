import { useAuth } from "@context/authContext";
import { useToast } from "@context/toastContext";
import Helper from "@helper/helpers";
import { navigate } from "@navigation/NavigationService";
import { APP_ROUTE } from "@navigation/route";
import { useMutation } from "@tanstack/react-query";
import { IUser } from "src/dto";
import { endpoints } from "src/services/endpoints";
import rootApi from "src/services/rootApi";

type LoginParams = {
  username: string;
  password: string;
};
type LoginResponse = {
  data: {
    accessToken: string;
    refreshToken: string;
    user: IUser;
    enumData: any;
  };
};

const useLogin = () => {
  const { showToast } = useToast();
  const { login } = useAuth();
  const { isPending, isError, data, error, mutateAsync } = useMutation({
    mutationFn: (variables: LoginParams) => {
      return rootApi.post<LoginParams, LoginResponse>(
        endpoints.LOGIN,
        variables
      );
    },
    onError: (e: any) => {
      console.log(e);
      showToast({
        title: "Login failed!",
        type: "ERROR",
        message: e?.response?.data?.message || "Đã có lỗi xảy ra",
      });
    },
    onSuccess: async (data) => {
      showToast({
        title: "Login",
        type: "SUCCESS",
        message: "Successfully!",
      });
      await Helper.saveToken(data.data.accessToken);
      await login({ user: data.data.user, enumData: data.data.enumData });
      navigate(APP_ROUTE.BOTTOM_TAB);
    },
  });
  return {
    isLoading: isPending,
    isError,
    data,
    error,
    onLogin: mutateAsync,
  };
};

export default useLogin;
