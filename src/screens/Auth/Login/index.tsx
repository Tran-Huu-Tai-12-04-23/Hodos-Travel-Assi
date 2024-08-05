import ButtonCustom from "@components/ButtonCustom";
import Container from "@components/Container";
import PasswordInputCustom from "@components/PasswordInputCustom";
import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import TextInputCustom from "@components/TextInputCustom";
import Title from "@components/Title";
import { btnPrimary, primaryColor } from "@constants/Colors";
import useLogin from "@hooks/api/auth/useLogin";
import MainLayout from "@layout/MainLayout";
import { navigate } from "@navigation/NavigationService";
import { ROUTE_KEY } from "@navigation/route";

import React, { useState } from "react";
import { ScrollView } from "react-native";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styleGlobal } from "src/styles";

export default function LoginScreen() {
  const { isLoading, onLogin } = useLogin();
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleChangeInput = (key: string, value: string) => {
    setInput((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const handleLogin = () => {
    if (!input.username || !input.password) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: "Error",
        textBody: "Please provided full information!",
      });
      return;
    }
    onLogin(input);
  };

  return (
    <MainLayout isBack>
      <ScrollView
        contentContainerStyle={[
          styleGlobal.scrollContainer,
          {
            alignContent: "center",
          },
        ]}
      >
        <Separator height={20} />
        <Container>
          <Row
            style={{ marginTop: "auto", marginBottom: "auto" }}
            start
            direction="column"
            rowGap={20}
          >
            <Title style={{ fontSize: 40 }}>Login</Title>
            <TextInputCustom
              value={input.username}
              onChangeText={(text) => handleChangeInput("username", text)}
              label="Username"
            />
            <PasswordInputCustom
              value={input.password}
              onChangeText={(text) => handleChangeInput("password", text)}
              label="Password"
            />
            <Row center full>
              <TouchableOpacity>
                <TextDefault style={{ color: btnPrimary, textAlign: "center" }}>
                  Forgot password?
                </TextDefault>
              </TouchableOpacity>
            </Row>
            <Row full center>
              <ButtonCustom
                isLoading={isLoading}
                bold
                mode="contained"
                full
                style={{ padding: 14, width: 200 }}
                primary
                title="LOGIN"
                onPress={handleLogin}
              />
            </Row>
            <Row center full colGap={10}>
              <TextDefault style={[styleGlobal.label]}>
                ADon’t have an account?
              </TextDefault>
              <TouchableOpacity onPress={() => navigate(ROUTE_KEY.REGISTER)}>
                <TextDefault bold style={{ color: primaryColor }}>
                  Sign Up
                </TextDefault>
              </TouchableOpacity>
            </Row>
            <Separator height={20} />
          </Row>
        </Container>
      </ScrollView>
    </MainLayout>
  );
}
