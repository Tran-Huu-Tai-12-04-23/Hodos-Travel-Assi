import ButtonCustom from "@components/ButtonCustom";
import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import { borderColor, whiteColor } from "@constants/Colors";
import { useModal } from "@context/ModalContext";
import { useUserLocation } from "@context/userLocationContext";
import { deviceHeight } from "@helper/utils";
import useSuggestFoodSchedule from "@hooks/api/feature/useSuggestFoodSchedule";
import LocationIcon from "assets/svg/LocationIcon";
import SearchIcon from "assets/svg/SearchIcon";
import SuggestIcon from "assets/svg/SuggestIcon";
import React, { useEffect, useState } from "react";
import { RefreshControl, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { styleGlobal } from "src/styles";
import FoodScheduleItem from "./FoodScheduleItem";

function FoodSchedule() {
  const { userLocation } = useUserLocation();
  const { openModal, hideModal } = useModal();
  const { data, isLoading, onSuggestFoodSchedule } = useSuggestFoodSchedule();
  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const handleSuggestSchedule = () => {
    setIsLoadingModal(true);
    userLocation &&
      onSuggestFoodSchedule({
        location: [userLocation?.longitude, userLocation?.latitude],
      });
    // openModal();
    openModal({
      content: (
        <Row style={{ padding: 20 }} center>
          <SearchIcon size={40} />
        </Row>
      ),
      title: "Wait...",
      nameAcceptButton: "Ok",
      nameCancelButton: "Cancel",
      onReject: () => {
        hideModal();
      },
      onAccept: async () => {
        hideModal();
      },
    });
  };

  useEffect(() => {
    if (!isLoading && data) {
      setIsLoadingModal(false);
      hideModal();
    }
  }, [data]);

  if (!data || isLoadingModal)
    return (
      <Row
        direction="column"
        full
        style={{ padding: 20, flex: 1, backgroundColor: whiteColor }}
        center
      >
        <LocationIcon size={200} />
        <TextDefault bold style={{ textAlign: "center", fontSize: 22 }}>
          You don't have food tour schedule
        </TextDefault>

        <Separator height={20} />
        <TextDefault>
          We will suggest schedule for you base your location. Keep your phone.
        </TextDefault>

        <Separator height={20} />
        <ButtonCustom
          primary
          onPress={handleSuggestSchedule}
          title={"Start suggest"}
          minWidth={200}
        />
      </Row>
    );

  return (
    <>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            onRefresh={handleSuggestSchedule}
            refreshing={isLoadingModal}
          />
        }
      >
        <Row
          direction="column"
          style={{
            padding: 10,
            backgroundColor: whiteColor,
            flex: 1,
            minHeight: deviceHeight,
            paddingTop: 20,
            position: "relative",
          }}
          rowGap={10}
          full
        >
          {data?.scheduleFoods?.schedule &&
            data?.scheduleFoods?.schedule?.map((food, index) => (
              <Row
                key={index}
                start
                between
                full
                colGap={20}
                style={{ position: "relative" }}
              >
                <View style={[styleGlobal.point]} />
                <FoodScheduleItem data={food} />
                <View
                  style={{
                    height:
                      index < data?.scheduleFoods?.schedule.length - 1
                        ? 240
                        : 0,
                    width: 5,
                    position: "absolute",
                    backgroundColor: borderColor,
                    borderStyle: "dashed",
                    left: 6,
                    top: 16,
                    borderRadius: 10,
                  }}
                />
              </Row>
            ))}
          <Separator height={20} />

          <ButtonCustom
            primary
            style={{ paddingHorizontal: 30 }}
            onPress={handleSuggestSchedule}
            title={"Refresh"}
            endIcon={<SuggestIcon size={20} color={"white"} />}
          />
          <Separator height={100} />
        </Row>
      </ScrollView>
    </>
  );
}

export default FoodSchedule;
