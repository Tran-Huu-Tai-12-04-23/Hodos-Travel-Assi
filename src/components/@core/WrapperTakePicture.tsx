import { useBottomSheet } from "@context/bottomSheetContext";
import { useLoading } from "@context/loadingGlobalContext";
import * as ImageManipulator from "expo-image-manipulator";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { Alert, Linking, TouchableOpacity } from "react-native";
import { ILocation } from "src/services/hooks/location/dto";
import usePredict from "src/services/hooks/predict/usePredict";
import useUploadFile from "src/services/hooks/upload/useUploadFile";

function WrapperTakePicture({
  children,
  onResult,
  isPredict = false,
  onResultPredict,
}: {
  children: React.ReactNode;
  onResult?: (data: string) => void;
  isPredict?: boolean;
  onResultPredict?: (val: ILocation[], preImg: string) => void;
}) {
  const { onUpload } = useUploadFile();
  const { onPredict } = usePredict();
  const { hideBottomSheet } = useBottomSheet();
  const { startLoading, stopLoading } = useLoading();
  const handleTakePicture = async () => {
    hideBottomSheet();
    startLoading();
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== ImagePicker.PermissionStatus.GRANTED) {
      Alert.alert(
        "Camera Permission",
        "Camera permission is required to take pictures. Please enable it in the settings.",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Open Settings",
            onPress: async () => {
              hideBottomSheet();
              Linking.openSettings();
            },
          },
        ]
      );

      return;
    }
    const result = await ImagePicker.launchCameraAsync();
    if (result.canceled) {
      return;
    }
    const asset = result.assets[0];
    if (asset != null) {
      const item = result.assets[0];
      const formData: any = new FormData();
      let uriArray = item.uri.split(".");
      let fileType = uriArray.pop();
      console.log(fileType);

      const resizedImage = await ImageManipulator.manipulateAsync(
        item.uri,
        [{ resize: { width: 800, height: 600 } }], // Set your desired size
        { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG }
      );
      stopLoading();
      formData.append("file", {
        uri: resizedImage.uri,
        name: item.fileName ?? new Date().getTime().toString(),
        type: `image/jpeg`,
      });
      if (!isPredict)
        await onUpload(formData)
          .then((res: any) => {
            onResult && onResult(res.data.url);
          })
          .catch((e) => {});
      else {
        await onPredict(formData)
          .then((res: any) => {
            onResultPredict &&
              onResultPredict(
                res?.data?.result as ILocation[],
                res?.data?.preImg
              );
          })
          .catch((e) => {
            onResultPredict && onResultPredict([], "");
          })
          .finally(() => {});
      }
    }
  };
  return (
    <TouchableOpacity onPress={handleTakePicture}>{children}</TouchableOpacity>
  );
}

export default WrapperTakePicture;
