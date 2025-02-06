import { ButtonPrimary } from "@components/@core/Button";
import LocationItem from "@components/@core/LocationItem";
import NoDataView from "@components/@core/NoDataView";
import Row from "@components/@core/Row";
import Separator from "@components/@core/Separator";
import TextDefault from "@components/@core/TextDefault";
import { normalize } from "@helper/helpers";
import { deviceWidth } from "@helper/utils";
import MainLayout from "@layout/MainLayout";
import { goBack } from "@navigation/NavigationService";
import { useRoute } from "@react-navigation/native";
import ArrowLeftIcon from "assets/svg/arrow-left-icon";
import { Image } from "expo-image";
import React from "react";
import { ScrollView } from "react-native";
import * as Animatable from "react-native-animatable";
import { ILocation } from "src/services/hooks/location/dto";
import Header from "./Header";

function PredictResultScreen() {
  const { result, preImg } = useRoute()?.params as {
    result: ILocation[];
    preImg: string;
  };

  return (
    <MainLayout>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Row
          full
          direction="column"
          style={{
            padding: normalize(20),
          }}
        >
          {result &&
            result?.map((location, index) => {
              return (
                <LocationItem width={"100%"} data={location} key={index} />
              );
            })}

          {(!result || result?.length === 0) && (
            <>
              <Separator height={normalize(20)} />
              <NoDataView
                title={
                  <Row direction="column" rowGap={10} center>
                    <TextDefault>No result for this image</TextDefault>
                    <Image
                      source={preImg}
                      style={{
                        width: deviceWidth / 2,
                        height: deviceWidth / 2,
                        borderRadius: normalize(10),
                      }}
                    />
                  </Row>
                }
              />
            </>
          )}
        </Row>

        <Separator height={normalize(120)} />
      </ScrollView>

      <Row
        full
        style={{
          position: "absolute",
          bottom: normalize(30),
          left: 20,
          right: 20,
        }}
      >
        <Animatable.View
          delay={100}
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
        >
          <ButtonPrimary
            minWidth={deviceWidth - normalize(40)}
            title="Go Back"
            onPress={goBack}
            iconLeft={<ArrowLeftIcon color={"white"} size={44} />}
          />
        </Animatable.View>
      </Row>
    </MainLayout>
  );
}
export default PredictResultScreen;
