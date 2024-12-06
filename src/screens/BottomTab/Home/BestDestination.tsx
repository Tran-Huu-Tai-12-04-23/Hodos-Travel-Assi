import LocationItem from "@components/LocationItem";
import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { deviceWidth } from "@helper/utils";
import { navigate } from "@navigation/NavigationService";
import { APP_ROUTE } from "@navigation/route";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { ILocation } from "src/services/hooks/location/dto";
function BestDestination({ data }: { data: ILocation[] }) {
  const { theme } = useTheme();

  return (
    <Row full direction="column" start style={{ flex: 1 }}>
      <Row
        full
        between
        style={{
          alignItems: "center",
          paddingHorizontal: normalize(10),
        }}
      >
        <TextDefault bold>Best destination</TextDefault>
        <TouchableOpacity onPress={() => navigate(APP_ROUTE.SEARCH_SCREEN)}>
          <TextDefault color={theme.hightLight}>View all</TextDefault>
        </TouchableOpacity>
      </Row>
      <Separator height={10} />
      <View style={{ flex: 1, width: deviceWidth }}>
        <FlashList
          estimatedItemSize={200}
          data={data}
          numColumns={2}
          keyExtractor={(item: ILocation, index: number) => index.toString()}
          renderItem={({ item }: { item: ILocation }) => (
            <LocationItem data={item} width={"100%"} />
          )}
          contentContainerStyle={{
            paddingHorizontal: normalize(10),
          }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </Row>
  );
}

export default BestDestination;
