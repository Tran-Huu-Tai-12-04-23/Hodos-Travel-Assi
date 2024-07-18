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
import ImgBackgroundLayout from "@layout/ImgBackgroundLayout";
import CustomHeader from "@navigation/CustomHeader";
import { navigate } from "@navigation/NavigationService";
import { ROUTE_KEY } from "@navigation/route";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styleGlobal } from "src/styles";
export default function LoginScreen() {
  const { isLoading, data, onLogin } = useLogin();
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
    <ImgBackgroundLayout>
      <ScrollView
        contentContainerStyle={[
          styleGlobal.scrollContainer,
          {
            alignContent: "center",
          },
        ]}
      >
        <CustomHeader title="" />

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
          <Row full direction="column">
            <TextDefault>
              Version: <TextDefault bold>1.0.0</TextDefault>
            </TextDefault>
            <TextDefault>
              Environment: <TextDefault bold>Develop</TextDefault>
            </TextDefault>
            <TextDefault>
              UpdateAt: <TextDefault bold>5:33 Am 1/6/2024</TextDefault>
            </TextDefault>
          </Row>
        </Container>
      </ScrollView>
    </ImgBackgroundLayout>
  );
}
