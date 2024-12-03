import BackBtn from "@components/BackBtn";
import { ButtonLink, ButtonPrimary } from "@components/Button";
import { Input } from "@components/Input";
import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import { LoginRequireInput } from "@constants/Require";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import MainLayout from "@layout/MainLayout";
import { navigate } from "@navigation/NavigationService";
import { AUTH_ROUTE } from "@navigation/route";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import useLogin from "src/services/hooks/auth/useLogin";

interface LoginBody {
  username: string;
  password: string;
  usernameReq: string;
  passwordReq: string;
}
const InitState: LoginBody = {
  username: "",
  password: "",
  usernameReq: "",
  passwordReq: "",
};
export default function LoginScreen() {
  const { theme } = useTheme();
  const [userInput, setUserInput] = useState<LoginBody>(InitState);
  const { onLogin, isLoading } = useLogin();
  const handleSubmit = async (body: LoginBody) => {
    await onLogin(body);
  };
  const handleLogin = async () => {
    let isHasError = false;
    const newUserInput = { ...userInput };

    if (!userInput.username) {
      newUserInput.usernameReq = LoginRequireInput.emailUsername;
      isHasError = true;
    }
    if (!userInput.password) {
      newUserInput.passwordReq = LoginRequireInput.password;
      isHasError = true;
    }

    setUserInput(newUserInput);

    if (isHasError) return;
    await handleSubmit(userInput);
  };

  const handleChangeInput = (key: string, value: string) => {
    setUserInput({
      ...userInput,
      usernameReq: "",
      passwordReq: "",
      [key]: value,
    });
  };

  return (
    <MainLayout>
      <KeyboardAwareScrollView
        bottomOffset={50}
        contentContainerStyle={styles.flex}
      >
        <Separator height={normalize(50)} />
        <BackBtn />
        <Separator height={normalize(50)} />

        <Row
          direction="column"
          full
          rowGap={normalize(10)}
          style={{
            paddingHorizontal: normalize(20),
          }}
        >
          <TextDefault size={normalize(18)}>Sign in now</TextDefault>
          <TextDefault center style={{ color: theme.textSecond }}>
            Please sign in to continue our app
          </TextDefault>
          <Separator height={normalize(20)} />

          <Input
            placeholder="Username or email"
            text={userInput.username}
            onChangeText={(text) => handleChangeInput("username", text)}
            error={userInput.usernameReq}
          />
          <Separator height={normalize(0)} />
          <Input
            isPassword
            placeholder="Your password"
            text={userInput.password}
            onChangeText={(text) => handleChangeInput("password", text)}
            error={userInput.passwordReq}
          />

          {/* <Row end full>
            <ButtonLink title="Forgot password?" onPress={() => {}} />
          </Row> */}
          <Separator height={normalize(20)} />
          <ButtonPrimary
            onPress={handleLogin}
            title="Sign in"
            minWidth={"100%"}
            isLoading={isLoading}
          />
          <Separator height={normalize(20)} />
          <Row
            center
            full
            style={{
              paddingLeft: normalize(40),
            }}
            colGap={10}
          >
            <TextDefault center style={{ color: theme.textSecond }}>
              Don't have an account?{" "}
            </TextDefault>
            <ButtonLink
              title="Sign up"
              onPress={() => navigate(AUTH_ROUTE.REGISTER)}
            />
          </Row>
        </Row>
      </KeyboardAwareScrollView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
