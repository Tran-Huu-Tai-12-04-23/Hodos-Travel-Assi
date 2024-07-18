import React, { useState, useCallback } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useRoute } from "@react-navigation/native";
import { debounce } from "lodash";
import MainLayout from "@layout/MainLayout";
import TextInputCustom from "@components/TextInputCustom";
import ButtonCustom from "@components/ButtonCustom";
import Icon from "@components/Icon";
import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import LocationItem from "@components/LocationItem";
import FoodItem from "@components/FoodItem";
import { deviceWidth } from "@helper/utils";
import { localImages } from "assets/localImage";
import { whiteColor, primaryColor } from "@constants/Colors";
import usePaginationSearch from "@hooks/api/feature/usePaginationSearch";
import { goBack } from "@navigation/NavigationService";

export enum SEARCH_TYPE {
  ALL = "ALL",
  FOOD = "FOOD",
  LOCATION = "LOCATION",
}

const SearchLocation = () => {
  const { params } = useRoute<any>();
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(params?.query || "");
  const [typeSearch, setTypeSearch] = useState<SEARCH_TYPE>(SEARCH_TYPE.ALL);

  const debouncedOnChangeText = useCallback(
    debounce((text: string) => {
      setSearchQuery(text);
      setIsLoading(false);
    }, 500),
    []
  );

  const { data, refetch, isRefetching, fetchNextPage, hasNextPage, isError } =
    usePaginationSearch({
      type: typeSearch,
      query: searchQuery,
      skip: 0,
      take: 10,
    });

  const handleTextChange = (text: string) => {
    setSearchQuery(text);
    setIsLoading(true);
    debouncedOnChangeText(text);
  };

  const renderSearchItem = ({ item, index }: { item: any; index: number }) => (
    <Row full key={index}>
      {item.type === SEARCH_TYPE.LOCATION && (
        <LocationItem key={index} width={deviceWidth - 40} data={item} />
      )}
      {item.type === SEARCH_TYPE.FOOD && (
        <FoodItem key={index} width={deviceWidth - 40} data={item} />
      )}
    </Row>
  );

  return (
    <MainLayout
      style={{
        background: whiteColor,
        paddingTop: 10,
        paddingBottom: 0,
        paddingHorizontal: 10, // Corrected property name
      }}
    >
      <Row between wrap colGap={20}>
        <TouchableOpacity onPress={goBack}>
          <Icon
            link={localImages().arrBackIcon}
            style={{ width: 14, height: 14 }}
          />
        </TouchableOpacity>
        <TextInputCustom
          defaultValue={searchQuery}
          onChangeText={handleTextChange}
          flex={8}
          placeholder="Where do you go?"
        />
      </Row>

      <Separator height={10} />
      <Row style={{ padding: 10 }} colGap={20}>
        {Object.values(SEARCH_TYPE).map((type) => (
          <ButtonCustom
            key={type}
            mode="contained"
            primary={typeSearch === type}
            onPress={() => setTypeSearch(type)}
            title={type}
            startIcon={
              type !== SEARCH_TYPE.ALL && (
                <Icon
                  link={
                    type === SEARCH_TYPE.LOCATION
                      ? localImages().locationIcon
                      : localImages().foodIcon
                  }
                  style={{ height: 18 }}
                />
              )
            }
          />
        ))}
      </Row>

      {isError ? (
        <Row direction="column" center style={{ padding: "10%" }} rowGap={20}>
          <TextDefault bold>Error occurred while searching.</TextDefault>
        </Row>
      ) : isLoading || isRefetching || data === null ? (
        <Row direction="column" center style={{ padding: "10%" }} rowGap={20}>
          <TextDefault bold>Searching...</TextDefault>
          <ActivityIndicator color={primaryColor} />
        </Row>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          onRefresh={refetch}
          refreshing={isRefetching}
          onEndReached={() => fetchNextPage()}
          onEndReachedThreshold={0.2}
          scrollEventThrottle={2}
          ItemSeparatorComponent={() => <Separator height={20} />}
          ListFooterComponent={() =>
            hasNextPage ? (
              <ActivityIndicator color={primaryColor} />
            ) : (
              <Separator height={10} />
            )
          }
          ListEmptyComponent={() =>
            isLoading ? (
              <ActivityIndicator color={primaryColor} />
            ) : (
              <Row direction="column" full center>
                <TextDefault>No result</TextDefault>
              </Row>
            )
          }
          style={{ paddingTop: 10, padding: 10 }}
          data={data}
          renderItem={renderSearchItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </MainLayout>
  );
};

export default SearchLocation;
