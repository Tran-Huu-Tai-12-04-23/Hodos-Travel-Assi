import LocationItem from "@components/LocationItem";
import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { navigate } from "@navigation/NavigationService";
import { APP_ROUTE } from "@navigation/route";
import React from "react";
import { ActivityIndicator, ScrollView, TouchableOpacity } from "react-native";
import { ILocation } from "src/services/hooks/location/dto";
import useLocationPagination from "src/services/hooks/location/useLocationPagination";
function BestDestination() {
  const { theme } = useTheme();
  const { data, isLoading, isFetching, refetch, fetchNextPage } =
    useLocationPagination({});

  return (
    <Row full direction="column" start style={{ flex: 1 }}>
      <Row
        full
        between
        style={{
          alignItems: "center",
          paddingHorizontal: normalize(20),
        }}
      >
        <TextDefault bold>Best destination</TextDefault>
        <TouchableOpacity onPress={() => navigate(APP_ROUTE.SEARCH_SCREEN)}>
          <TextDefault color={theme.hightLight}>View all</TextDefault>
        </TouchableOpacity>
      </Row>
      {isLoading && isFetching && (
        <Row style={{ padding: normalize(20) }} full center>
          <ActivityIndicator color={theme.primary} />
        </Row>
      )}
      <Separator height={10} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          paddingHorizontal: normalize(10),
        }}
      >
        {data &&
          data?.map((item: ILocation, index: React.Key | null | undefined) => (
            <LocationItem key={index} data={item} />
          ))}
      </ScrollView>
    </Row>
  );
}

export default BestDestination;
