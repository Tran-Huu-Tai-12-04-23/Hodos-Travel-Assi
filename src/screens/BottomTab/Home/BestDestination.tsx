import LocationItem from "@components/LocationItem";
import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { deviceWidth } from "@helper/utils";
import { navigate } from "@navigation/NavigationService";
import { APP_ROUTE } from "@navigation/route";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
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
      <View style={{ width: deviceWidth, paddingHorizontal: normalize(10) }}>
        <View style={styles.gridContainer}>
          {data.map((item, index) => (
            <View key={index.toString()} style={styles.gridItem}>
              <LocationItem data={item} width={"100%"} />
            </View>
          ))}
        </View>
      </View>
    </Row>
  );
}
const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: normalize(20),
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "48%", // Adjust the width to fit two items per row with some spacing
    marginBottom: normalize(10),
  },
});
export default BestDestination;
