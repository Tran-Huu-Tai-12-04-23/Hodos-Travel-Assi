import FoodView from "@components/FoodView";
import LocationView from "@components/LocationView";
import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import { whiteColor } from "@constants/Colors";
import { deviceHeight } from "@helper/utils";
import { IPredictRes } from "@hooks/api/feature/usePredictImage";
import MainLayout from "@layout/MainLayout";
import { navigate } from "@navigation/NavigationService";
import { ROUTE_KEY } from "@navigation/route";
import { useRoute } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

function ResultAfterPredict() {
  const { data } = useRoute().params as {
    data: IPredictRes;
  };
  return (
    <MainLayout
      style={{
        padding: 0,
        minHeight: deviceHeight,
        flex: 1,
        backgroundColor: whiteColor,
      }}
      isBack
    >
      <ScrollView style={{ flex: 10 }} showsVerticalScrollIndicator={false}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Row
            direction="column"
            full
            rowGap={10}
            style={{
              padding: 20,
            }}
          >
            <Separator height={40} />

            <TextDefault bold style={{ fontSize: 18 }}>
              List of closest results
            </TextDefault>

            {data?.isLocation && (
              <Row full direction="column" rowGap={10}>
                <TextDefault bold style={{ fontSize: 16 }}>
                  Locations
                </TextDefault>
                {data?.locations.map((location, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      navigate(ROUTE_KEY.DETAIL_LOCATION, {
                        _id: location._id,
                      })
                    }
                  >
                    <View>
                      <LocationView
                        data={location}
                        key={location?._id || index}
                      />
                    </View>
                  </TouchableOpacity>
                ))}
              </Row>
            )}

            {data?.isFood && (
              <Row full direction="column" rowGap={10}>
                <TextDefault bold style={{ fontSize: 16 }}>
                  Foods
                </TextDefault>
                {data?.foods.map((food, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      navigate(ROUTE_KEY.DETAIL_FOOD, {
                        _id: food._id,
                      })
                    }
                  >
                    <View>
                      <FoodView data={food} key={food?._id || index} />
                    </View>
                  </TouchableOpacity>
                ))}
              </Row>
            )}
            {data?.foods?.length === 0 && data?.locations?.length === 0 && (
              <TextDefault bold style={{ fontSize: 22 }}>
                No result found! Try again with another image
              </TextDefault>
            )}
          </Row>
        </ScrollView>
      </ScrollView>
    </MainLayout>
  );
}

export default ResultAfterPredict;
