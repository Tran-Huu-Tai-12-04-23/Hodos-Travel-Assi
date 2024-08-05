import TabComponent from "@components/TabComponent";
import { whiteColor } from "@constants/Colors";
import { deviceHeight } from "@helper/utils";
import MainLayout from "@layout/MainLayout";
import React from "react";
import { Platform, SafeAreaView } from "react-native";
import FoodSchedule from "./FoodSchedule";
import LocationSchedule from "./LocationSchedule";

function ScheduleScreen() {
  return (
    <MainLayout
      isBack
      style={{
        backgroundColor: whiteColor,
        minHeight: deviceHeight,
        padding: 10,
      }}
    >
      <SafeAreaView
        style={{ flex: 1, marginBottom: Platform.OS === "ios" ? 70 : 20 }}
      >
        <TabComponent
          tabs={[<LocationSchedule />, <FoodSchedule />]}
          names={["Location Schedule", "Food Schedule"]}
        />
      </SafeAreaView>
    </MainLayout>
  );
}

export default ScheduleScreen;
