import BackBtn from "@components/BackBtn";
import { ButtonLink, ButtonPrimary } from "@components/Button";
import { Input } from "@components/Input";
import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import { RegisterRequireInput } from "@constants/Require";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import MainLayout from "@layout/MainLayout";
import { navigate } from "@navigation/NavigationService";
import { AUTH_ROUTE } from "@navigation/route";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import useRegister from "src/services/hooks/auth/useRegister";
interface RegisterBody {
  username: string;
  password: string;
  email: string;
  confirmPassword: string;
  usernameReq: string;
  emailReq: string;
  passwordReq: string;
  confirmPasswordReq: string;
  confirmPasswordMatchReq: string;
}
const initState = {
  username: "",
  password: "",
  email: "",
  confirmPassword: "",
  usernameReq: "",
  emailReq: "",
  passwordReq: "",
  confirmPasswordReq: "",
  confirmPasswordMatchReq: "",
};
export default function RegisterScreen() {
  const { theme } = useTheme();
  const { onRegister } = useRegister();
  const [userInput, setUserInput] = useState<RegisterBody>(initState);

  const handleRegister = async () => {
    let isHasError = false;
    const newUserInput = { ...userInput };

    if (!userInput.username) {
      newUserInput.usernameReq = RegisterRequireInput.username;
      isHasError = true;
    }
    if (!userInput.email) {
      newUserInput.emailReq = RegisterRequireInput.email;
      isHasError = true;
    }
    if (!userInput.password) {
      newUserInput.passwordReq = RegisterRequireInput.password;
      isHasError = true;
    }
    if (!userInput.confirmPassword) {
      newUserInput.confirmPasswordReq = RegisterRequireInput.confirmPassword;
      isHasError = true;
    }
    if (userInput.password !== userInput.confirmPassword) {
      newUserInput.confirmPasswordMatchReq =
        RegisterRequireInput.confirmPasswordMatch;
      isHasError = true;
    }

    setUserInput(newUserInput);

    if (isHasError) return;
    onRegister(userInput);
  };

  const handleChangeInput = (key: string, value: string) => {
    setUserInput({
      ...userInput,
      usernameReq: "",
      emailReq: "",
      passwordReq: "",
      confirmPasswordReq: "",
      confirmPasswordMatchReq: "",
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
          <TextDefault size={normalize(18)}>Sign up now</TextDefault>
          <TextDefault center style={{ color: theme.textSecond }}>
            Please fill the details and create account
          </TextDefault>
          <Separator height={normalize(20)} />

          <Input
            placeholder="Username"
            text={userInput.username}
            onChangeText={(text) => handleChangeInput("username", text)}
            error={userInput.usernameReq}
          />
          <Separator height={normalize(0)} />
          <Input
            placeholder="Email"
            text={userInput.email}
            error={userInput.emailReq}
            onChangeText={(text) => handleChangeInput("email", text)}
          />
          <Separator height={normalize(0)} />
          <Input
            isPassword
            placeholder="Your password"
            text={userInput.password}
            onChangeText={(text) => handleChangeInput("password", text)}
            error={userInput.passwordReq}
          />
          <Separator height={normalize(0)} />
          <Input
            isPassword
            placeholder="Confirm your password"
            text={userInput.confirmPassword}
            onChangeText={(text) => handleChangeInput("confirmPassword", text)}
            error={
              userInput.confirmPasswordReq || userInput.confirmPasswordMatchReq
            }
          />

          <Row start full>
            <TextDefault
              style={{
                color: theme.textSecond,
              }}
            >
              Password must be 8 character?
            </TextDefault>
          </Row>
          <Separator height={normalize(20)} />
          <ButtonPrimary
            onPress={handleRegister}
            title="Sign Up"
            minWidth={"100%"}
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
              Already have an account
            </TextDefault>
            <ButtonLink
              title="Sign In"
              onPress={() => navigate(AUTH_ROUTE.LOGIN)}
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
