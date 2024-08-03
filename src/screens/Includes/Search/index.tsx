import ButtonCustom from "@components/ButtonCustom";
import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import TextInputCustom from "@components/TextInputCustom";
import { btnPrimary, primaryColor, whiteColor } from "@constants/Colors";
import usePaginationSearch from "@hooks/api/feature/usePaginationSearch";
import MainLayout from "@layout/MainLayout";
import { goBack } from "@navigation/NavigationService";
import { useRoute } from "@react-navigation/native";
import ArrowLeftIcon from "assets/svg/ArrowLeftIcon";
import LocationIcon from "assets/svg/LocationIcon";
import SaveFoodIcon from "assets/svg/SaveFood";
import { debounce } from "lodash";
import React, { Fragment, useCallback, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { IFood } from "src/Models/food.model";
import FoodSearchItem from "./components/FoodSearchItem";
import LocationSearchItem from "./components/LocationSearchItem";

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

  const renderSearchItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <Fragment key={item.id}>
        {item.type === SEARCH_TYPE.LOCATION && (
          <LocationSearchItem index={index} data={item} />
        )}
        {item.type === SEARCH_TYPE.FOOD && (
          <FoodSearchItem index={index} data={item as IFood} />
        )}
      </Fragment>
    );
  };
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
        <TouchableOpacity onPress={goBack} style={{ paddingLeft: 10 }}>
          <ArrowLeftIcon size={30} />
        </TouchableOpacity>
        <TextInputCustom
          defaultValue={searchQuery}
          onChangeText={handleTextChange}
          flex={8}
          placeholder="Where do you go?"
        />
      </Row>
      <Separator height={10} />
      <Row style={{ padding: 10 }} colGap={10}>
        {Object.values(SEARCH_TYPE).map((type) => (
          <ButtonCustom
            key={type}
            mode="contained"
            primary={typeSearch === type}
            onPress={() => setTypeSearch(type)}
            title={type}
            labelStyle={{
              fontSize: 12,
            }}
            style={{
              minHeight: 46,
              paddingHorizontal: 15,
            }}
            startIcon={
              type !== SEARCH_TYPE.ALL && type === SEARCH_TYPE.LOCATION ? (
                <LocationIcon
                  color={typeSearch === type ? "white" : btnPrimary}
                />
              ) : type === SEARCH_TYPE.FOOD ? (
                <SaveFoodIcon
                  color={typeSearch === type ? "white" : btnPrimary}
                />
              ) : null
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
          numColumns={2}
          refreshing={isRefetching}
          onEndReached={() => fetchNextPage()}
          onEndReachedThreshold={0.2}
          scrollEventThrottle={2}
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
          data={data}
          renderItem={renderSearchItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </MainLayout>
  );
};

export default SearchLocation;
