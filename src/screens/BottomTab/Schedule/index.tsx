import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { deviceWidth } from "@helper/utils";
import MainLayout from "@layout/MainLayout";
import React from "react";
import { ActivityIndicator, ScrollView, TouchableOpacity } from "react-native";
import { ILocation } from "src/services/hooks/location/dto";
import useLocationPagination from "src/services/hooks/location/useLocationPagination";
import CalenderSelectDayOfWeek from "./CalenderSelectedDayOfWeek";
import Header from "./Header";
import Item from "./Item";

function ScheduleScreen() {
  const { data, isLoading } = useLocationPagination({});
  const { theme } = useTheme();

  return (
    <MainLayout>
      <Separator height={normalize(90)} />
      <Row
        full
        direction="column"
        style={{
          flex: 1,
          paddingHorizontal: normalize(20),
        }}
      >
        <CalenderSelectDayOfWeek />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, width: deviceWidth - 40 }}
        >
          <Row
            full
            between
            style={{
              alignItems: "center",
            }}
          >
            <TextDefault bold size={normalize(16)}>
              My schedule
            </TextDefault>
            <TouchableOpacity>
              <TextDefault color={theme.hightLight}>View all</TextDefault>
            </TouchableOpacity>
          </Row>
          <Separator height={normalize(10)} />
          <Row rowGap={normalize(10)} direction="column" full center>
            {isLoading && <ActivityIndicator color={theme.primary} />}
            {data &&
              data?.result?.map(
                (item: ILocation, index: React.Key | null | undefined) => (
                  <Item key={index} data={item} />
                )
              )}
          </Row>
        </ScrollView>
      </Row>
      <Header />
    </MainLayout>
  );
}

export default ScheduleScreen;
