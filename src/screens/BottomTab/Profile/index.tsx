import Row from "@components/Row";
import Separator from "@components/Separator";
import { useAuth } from "@context/authContext";
import { normalize } from "@helper/helpers";
import MainLayout from "@layout/MainLayout";

import Avatar from "@components/Avatar";
import { ButtonLink, ButtonOutlined, ButtonPrimary } from "@components/Button";
import TextDefault from "@components/TextDefault";
import { useToast } from "@context/toastContext";
import AppIcon from "assets/svg/app-icon";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ProfileHeader from "./Components/ProfileHeader";

function ProfileScreen() {
  const { showToast } = useToast();
  const { logout, user } = useAuth();
  return (
    <MainLayout>
      <ProfileHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Separator height={normalize(100)} />
        {user && (
          <Row direction="column" full style={[styles.wrapper]} rowGap={20}>
            <Row full>
              <Avatar size={normalize(100)} source={{ uri: user?.avatar }} />
              <Row direction="column" start>
                <TextDefault size={normalize(18)} bold>
                  {user?.username}
                </TextDefault>
                <ButtonLink
                  title="Edit profile"
                  onPress={() => {
                    showToast({
                      type: "INFO",
                      message: "Not available yet!",
                      title: "Feature",
                    });
                  }}
                />
              </Row>
            </Row>
            <ButtonPrimary minWidth={"100%"} title="Logout" onPress={logout} />
            <ButtonOutlined
              minWidth={"100%"}
              title="Block account"
              onPress={() => {
                showToast({
                  type: "INFO",
                  message: "Not available yet!",
                  title: "Feature",
                });
              }}
            />

            <AppIcon />
            <TextDefault>v1.0.0</TextDefault>
          </Row>
        )}
        {!user && (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextDefault>You're not login!</TextDefault>
          </View>
        )}
        <Separator height={normalize(100)} />
      </ScrollView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  avatar: {
    position: "absolute",
    top: -normalize(50),
  },
  wrapper: {
    borderRadius: normalize(20),
    padding: normalize(20),
    justifyContent: "flex-start",
  },
});

export default ProfileScreen;
