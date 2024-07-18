import ButtonCustom from "@components/ButtonCustom";
import Container from "@components/Container";
import PasswordInputCustom from "@components/PasswordInputCustom";
import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import TextInputCustom from "@components/TextInputCustom";
import Title from "@components/Title";
import { primaryColor } from "@constants/Colors";
import { useLoading } from "@context/loadingGlobalContext";
import useRegister from "@hooks/api/auth/useRegister";
import ImgBackgroundLayout from "@layout/ImgBackgroundLayout";
import CustomHeader from "@navigation/CustomHeader";
import { navigate } from "@navigation/NavigationService";
import { ROUTE_KEY } from "@navigation/route";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { ALERT_TYPE, Toast } from "react-native-alert-notification";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styleGlobal } from "src/styles";

export default function RegisterScreen() {
  const { startLoading, stopLoading } = useLoading();
  const [input, setInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const { isLoading, onRegister } = useRegister();

  const handleChangeInput = (key: string, value: string) => {
    setInput((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const handleRegister = () => {
    if (!input.confirmPassword || !input.password || !input.username) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: "Error",
        textBody: "Please provided full information!",
      });
      return;
    }
    if (input.password !== input.confirmPassword) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: "Error",
        textBody: "Confirm password not match!",
      });
      return;
    }
    startLoading();
    setTimeout(() => {
      stopLoading();
      onRegister({ password: input.password, username: input.username });
    }, 1000);
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
            <Title style={{ fontSize: 40 }}>Register</Title>

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
            <PasswordInputCustom
              value={input.confirmPassword}
              onChangeText={(text) =>
                handleChangeInput("confirmPassword", text)
              }
              label="Confirm Password"
            />
            <Row full center>
              <ButtonCustom
                isLoading={isLoading}
                bold
                mode="contained"
                full
                style={{ padding: 14, width: 200 }}
                primary
                title="REGISTER"
                onPress={handleRegister}
              />
            </Row>
            <Row center full colGap={10}>
              <TextDefault style={[styleGlobal.label]}>
                You already an account?
              </TextDefault>
              <TouchableOpacity onPress={() => navigate(ROUTE_KEY.LOGIN)}>
                <TextDefault bold style={{ color: primaryColor }}>
                  Sign In
                </TextDefault>
              </TouchableOpacity>
            </Row>
            <Separator height={20} />
          </Row>
        </Container>
      </ScrollView>
    </ImgBackgroundLayout>
  );
}
