import NotifyItem from "@components/NotifyItem";
import Row from "@components/Row";
import SwipeWrapper from "@components/SwipeWrapper";
import { normalize } from "@helper/helpers";
import { deviceHeight } from "@helper/utils";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { StyleSheet } from "react-native";

function NotifyView() {
  const renderItem = ({ item }: { item: any }) => (
    <SwipeWrapper>
      <NotifyItem />
    </SwipeWrapper>
  );
  return (
    <Row direction="column" start full style={[styles.container]}>
      <FlashList
        showsVerticalScrollIndicator={false}
        // onRefresh={refetch}
        // refreshing={isFetching}
        // onEndReached={() => () => fetchNextPage()}
        // ListFooterComponent={() =>
        //   isLoading && !isFetching ? (
        //     <ActivityIndicator color={COLORS.primary} />
        //   ) : null
        // }
        // ListEmptyComponent={() =>
        //   isFetching && !isLoading ? (
        //     <ActivityIndicator color={COLORS.primary} />
        //   ) : null
        // }
        data={[1, 2, 3, 4, 5, 6]}
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
    minHeight: deviceHeight / 2,
    // padding: normalize(10),
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 0.8,
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

export default NotifyView;
