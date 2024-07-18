import Avatar from "@components/Avatar";
import ButtonCustom from "@components/ButtonCustom";
import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import { primaryColor } from "@constants/Colors";
import { useAuth } from "@context/authContext";
import { deviceWidth } from "@helper/utils";
import MainLayout from "@layout/MainLayout";
import React from "react";
import { Text } from "react-native";
import {
  ALERT_TYPE,
  AlertNotificationDialog,
} from "react-native-alert-notification";

function PersonalScreen() {
  const { user } = useAuth();
  return (
    <MainLayout>
      <Row
        direction="column"
        full
        center
        rowGap={10}
        style={{ padding: 10, marginTop: "auto", marginBottom: "auto" }}
      >
        <Text>Hi, </Text>
        <TextDefault bold style={{ fontSize: 24, color: primaryColor }}>
          {user?.username
            ? user?.username?.substring(0, 1).toUpperCase() +
              user?.username?.substring(1).toLowerCase()
            : ""}
        </TextDefault>
        <Avatar
          style={{ width: 100, height: 100 }}
          link={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTWcCiaYRwLtYTSP7wf3wgPCo-ExPN2OZtFu16Hbx8Qg&s",
          }}
        />
        <Separator height={10} />
        <Row direction="column" full center rowGap={10}>
          <ButtonCustom
            minWidth={deviceWidth - 40}
            onPress={() => {
              AlertNotificationDialog.show({
                type: ALERT_TYPE.WARNING,
                title: "Error",
                textBody: "Feature not available yet.",
              });
            }}
            title={"Reset password "}
            mode="outlined"
            full
          />
          <ButtonCustom
            minWidth={deviceWidth - 40}
            onPress={() => {
              AlertNotificationDialog.show({
                type: ALERT_TYPE.WARNING,
                title: "Error",
                textBody: "Feature not available yet.",
              });
            }}
            title={"Update profile"}
            mode="outlined"
            full
          />
          <ButtonCustom
            minWidth={deviceWidth - 40}
            onPress={() => {
              AlertNotificationDialog.show({
                type: ALERT_TYPE.WARNING,
                title: "Error",
                textBody: "Feature not available yet.",
              });
            }}
            title={"Settings "}
            mode="outlined"
            full
          />
        </Row>
      </Row>
      <Row
        style={{ marginTop: "auto", marginBottom: 20 }}
        direction="column"
        rowGap={10}
      >
        <ButtonCustom
          minWidth={deviceWidth - 40}
          onPress={() => {
            AlertNotificationDialog.show({
              type: ALERT_TYPE.WARNING,
              title: "Error",
              textBody: "An update is not available yet!.",
            });
          }}
          title={"Check update"}
          primary
          full
        />
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
      </Row>
    </MainLayout>
  );
}

export default PersonalScreen;
