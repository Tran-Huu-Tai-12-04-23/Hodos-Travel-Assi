import FoodView from "@components/FoodView";
import GifImage from "@components/Gif";
import LocationView from "@components/LocationView";
import { PressAnimate } from "@components/PressAnimate";
import { btnPrimary } from "@constants/Colors";
import { useBottomSheet } from "@context/BottomSheetContext";
import { useModal } from "@context/ModalContext";
import { useUserLocation } from "@context/userLocationContext";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { deviceWidth } from "@helper/utils";
import usePredictImage from "@hooks/api/feature/usePredictImage";
import { navigate } from "@navigation/NavigationService";
import { ROUTE_KEY } from "@navigation/route";
import { GIF_LINK } from "assets/Gif";
import SearchIcon from "assets/svg/SearchIcon";
import * as ImagePicker from "expo-image-picker";
import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import {
  ALERT_TYPE,
  AlertNotificationDialog,
  AlertNotificationToast,
} from "react-native-alert-notification";
import { uploadImageAsync } from "src/config/firebaseWeb";
import { styleGlobal } from "src/styles";
import ButtonCustom from "../ButtonCustom";
import Row from "../Row";

const _renderBottomChooseImg = (
  onPressTakePicture: () => void,
  onPressCamera: () => void
) => {
  return (
    <Row
      rowGap={10}
      direction="column"
      full
      style={[styleGlobal.borderTop, { padding: 10, marginTop: 10 }]}
    >
      <ButtonCustom
        onPress={onPressTakePicture}
        title={"Choose from library"}
        full
        minWidth={deviceWidth - 40}
        startIcon={<Ionicons name="library" size={24} color="black" />}
      />
      <ButtonCustom
        minWidth={deviceWidth - 40}
        primary
        onPress={onPressCamera}
        title={"Take new picture"}
        startIcon={<FontAwesome name="camera" size={24} color="white" />}
      />
    </Row>
  );
};

function QuickSearchingButton() {
  const { openModal, hideModal } = useModal();
  const { data, error, isLoading, onPredict } = usePredictImage();
  const { userLocation } = useUserLocation();
  const { openBottomSheet, hideBottomSheet } = useBottomSheet();

  const onPressTakePicture = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== ImagePicker.PermissionStatus.GRANTED) {
      AlertNotificationToast.show({
        title: "Library access permission denied",
        type: ALERT_TYPE.DANGER,
      });
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync();
    if (result.canceled) {
      return;
    }
    const asset = result.assets[0];
    if (!asset) return;
    try {
      hideBottomSheet();
      openModal({
        content: (
          <Row style={{ padding: 20 }} center>
            <GifImage source={GIF_LINK.FIND_LOCATION} />
          </Row>
        ),
        title:
          "Application predicting this image that you provided! waiting ...",
        nameAcceptButton: "Ok",
        nameCancelButton: "Cancel",
        onReject: () => {
          hideModal();
        },
        onAccept: async () => {
          hideModal();
        },
      });
      const image_url = await uploadImageAsync(asset.uri);
      if (userLocation)
        onPredict({
          image_url,
          location: [userLocation?.longitude, userLocation?.latitude],
        });
      else onPredict({ image_url });
    } catch (error) {
      console.log(error);
    }
  };
  const onPressCamera = async () => {
    // Request camera permissions
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== ImagePicker.PermissionStatus.GRANTED) {
      AlertNotificationDialog.show({
        title: "Camera permission denied. ",
        type: ALERT_TYPE.DANGER,
      });
      return;
    }

    // Launch camera and capture image
    const result = await ImagePicker.launchCameraAsync({ base64: true });

    if (result.canceled) {
      return;
    }

    const asset = result.assets[0];
    if (!asset) {
      return;
    }

    try {
      hideBottomSheet();
      openModal({
        content: (
          <Row style={{ padding: 20 }} center>
            <GifImage source={GIF_LINK.FIND_LOCATION} />
          </Row>
        ),
        title:
          "Application predicting this image that you provided! waiting ...",
        nameAcceptButton: "Ok",
        nameCancelButton: "Cancel",
        onReject: () => {
          hideModal();
        },
        onAccept: async () => {
          hideModal();
        },
      });
      const image_url = await uploadImageAsync(asset.uri);
      if (userLocation)
        onPredict({
          image_url,
          location: [userLocation?.longitude, userLocation?.latitude],
        });
      else onPredict({ image_url });
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpen = () => {
    openBottomSheet({
      content: _renderBottomChooseImg(onPressTakePicture, onPressCamera),
      title: "Search for img!",
      snapPoints: [180],
    });
  };

  useEffect(() => {
    if (!isLoading && data)
      openModal({
        content: (
          <>
            {data?.food ? (
              <TouchableOpacity
                onPress={() => {
                  navigate(ROUTE_KEY.DETAIL_FOOD, {
                    _id: data?.food?._id,
                    distanceIF: data?.food?.distanceInfo,
                  });
                  hideModal();
                }}
              >
                <FoodView data={data?.food} />
              </TouchableOpacity>
            ) : data?.location ? (
              <TouchableOpacity
                onPress={() => {
                  navigate(ROUTE_KEY.DETAIL_LOCATION, {
                    _id: data?.location?._id,
                    distanceIF: data?.location?.distanceInfo,
                  });
                  hideModal();
                }}
              >
                <LocationView data={data?.location} />
              </TouchableOpacity>
            ) : null}
          </>
        ),
        title: "Predicting done!",
        nameAcceptButton: "Ok",
        nameCancelButton: "Cancel",
        onReject: () => {
          hideModal();
        },
        onAccept: async () => {
          hideModal();
        },
      });
  }, [isLoading]);

  useEffect(() => {
    if (error) {
      hideBottomSheet();
    }
  }, [error]);
  return (
    <PressAnimate
      onPress={handleOpen}
      style={{
        backgroundColor: "rgba(0,0,0,0.03)",
        padding: 10,
        borderRadius: 10,
      }}
    >
      <SearchIcon color={btnPrimary} size={32} />
    </PressAnimate>
  );
}

export default QuickSearchingButton;
