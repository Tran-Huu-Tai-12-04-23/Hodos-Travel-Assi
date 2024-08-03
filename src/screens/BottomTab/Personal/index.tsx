import Avatar from "@components/Avatar";
import ButtonCustom from "@components/ButtonCustom";
import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import { primaryColor } from "@constants/Colors";
import { useAuth } from "@context/authContext";
import { deviceWidth } from "@helper/utils";
import MainLayout from "@layout/MainLayout";
import CustomHeader from "@navigation/CustomHeader";
import { localImages } from "assets/localImage";
import * as Updates from "expo-updates";
import React from "react";
import {
  ALERT_TYPE,
  AlertNotificationDialog,
} from "react-native-alert-notification";

function PersonalScreen() {
  const { logout, user } = useAuth();

  return (
    <MainLayout isBack>
    
      <Row
        direction="column"
        full
        start
        rowGap={10}
        style={{ padding: 10, marginBottom: "auto" }}
      >
        <TextDefault
          bold
          style={{ fontSize: 24, color: primaryColor, marginTop: 100 }}
        >
          Hi,{" "}
          {user?.username
            ? user?.username?.substring(0, 1).toUpperCase() +
              user?.username?.substring(1).toLowerCase()
            : ""}
        </TextDefault>
        <Row center full>
          <Avatar
            style={{ width: 100, height: 100 }}
            link={localImages().avatarDefault}
          />
        </Row>
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
          onPress={logout}
          title={"Log Out"}
          primary
          full
        />
        <Row full direction="column">
          <TextDefault style={{ fontSize: 12 }}>
            Phiên bản:{" "}
            {Updates.runtimeVersion != null && Updates.runtimeVersion !== ""
              ? Updates.runtimeVersion
              : "1.0.0"}
          </TextDefault>
          <TextDefault style={{ fontSize: 12 }}>
            Updated At:{" "}
            {Updates.createdAt == null
              ? "1.0.0"
              : new Date(Updates.createdAt).toTimeString()}
          </TextDefault>
          <TextDefault style={{ fontSize: 12 }}>
            Env: {process.env.EXPO_PUBLIC_APP_VARIANT}
          </TextDefault>
        </Row>
      </Row>
    </MainLayout>
  );
}

export default PersonalScreen;
