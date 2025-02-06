import { useBottomSheet } from "@context/bottomSheetContext";
import { useLoading } from "@context/loadingGlobalContext";
import * as ImageManipulator from "expo-image-manipulator";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { Alert, Linking, TouchableOpacity } from "react-native";
import { ILocation } from "src/services/hooks/location/dto";
import usePredict from "src/services/hooks/predict/usePredict";
import useUploadFile from "src/services/hooks/upload/useUploadFile";
function WrapperSelectImageFromLib({
  children,
  onResult,
  isPredict = false,
  onResultPredict,
}: {
  children: React.ReactNode;
  onResult?: (data: string) => void;
  onResultPredict?: (data: ILocation[], preImg: string) => void;
  isPredict?: boolean;
}) {
  const { onUpload } = useUploadFile();
  const { onPredict } = usePredict();
  const { startLoading, stopLoading } = useLoading();
  const { hideBottomSheet } = useBottomSheet();
  const handleSelectImgFromLib = async () => {
    hideBottomSheet();
    startLoading();
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== ImagePicker.PermissionStatus.GRANTED) {
      Alert.alert(
        "Library Permission",
        "Library permission is required to select images. Please enable it in the settings.",
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

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // allowsEditing: true,
      // aspect: [4, 3],
      // quality: 1,
    });

    if (!result.canceled) {
      const item = result.assets[0];
      const formData: any = new FormData();
      let uriArray = item.uri.split(".");
      let fileType = uriArray.pop();

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

      /** nếu không là cờ phân tích thì nó lấy link từ ảnh */
      if (!isPredict)
        await onUpload(formData)
          .then((res: any) => {
            onResult && onResult(res?.data?.url);
          })
          .catch((e) => {
            console.log(e);
          })
          .finally(() => {});
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
    <TouchableOpacity onPress={handleSelectImgFromLib}>
      {children}
    </TouchableOpacity>
  );
}

export default WrapperSelectImageFromLib;
