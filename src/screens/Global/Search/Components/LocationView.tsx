import LocationItem from "@components/LocationItem";
import Row from "@components/Row";
import Separator from "@components/Separator";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { deviceWidth } from "@helper/utils";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { ILocation } from "src/services/hooks/location/dto";
import useLocationPagination from "src/services/hooks/location/useLocationPagination";

function LocationView() {
  const { theme } = useTheme();
  const { data, isLoading, isFetching, fetchNextPage, refetch } =
    useLocationPagination({});
  const renderItem = ({ item }: { item: ILocation }) => (
    <LocationItem width={deviceWidth / 2 - 40} data={item} />
  );

  return (
    <Row direction="column" start full style={styles.container}>
      {isLoading && isFetching && (
        <Row style={{ padding: normalize(20) }} full center>
          <ActivityIndicator color={theme.primary} />
        </Row>
      )}
      <FlashList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        onRefresh={refetch}
        refreshing={isFetching}
        onEndReached={() => () => fetchNextPage()}
        ItemSeparatorComponent={() => (
          <Separator height={10} style={{ width: normalize(10) }} />
        )}
        ListFooterComponent={() =>
          isLoading && !isFetching ? (
            <ActivityIndicator color={theme.primary} />
          ) : null
        }
        ListHeaderComponent={() => <Separator height={20} />}
        ListEmptyComponent={() =>
          isFetching && !isLoading ? (
            <ActivityIndicator color={theme.primary} />
          ) : null
        }
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        ListFooterComponentStyle={{ marginBottom: normalize(20) }}
        estimatedItemSize={200}
      />
    </Row>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },
  pagerView: {
    flex: 1,
  },
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LocationView;
