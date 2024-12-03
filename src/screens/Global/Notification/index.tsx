import Row from "@components/Row";
import Separator from "@components/Separator";
import { normalize } from "@helper/helpers";
import MainLayout from "@layout/MainLayout";
import React from "react";
import { View } from "react-native";
import Filter from "./Filter";
import Header from "./Header";
import NotifyView from "./NotifyView";

function NotificationScreen() {
  return (
    <MainLayout>
      <Separator height={normalize(50)} />
      <View style={{ flex: 1 }}>
        <Row
          full
          direction="column"
          style={{
            paddingHorizontal: normalize(20),
          }}
        >
          <Header />
        </Row>
        <Filter />

        <NotifyView />
      </View>
    </MainLayout>
  );
}

export default NotificationScreen;
