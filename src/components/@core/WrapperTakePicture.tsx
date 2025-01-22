import { useBottomSheet } from "@context/bottomSheetContext";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { Alert, Linking, TouchableOpacity } from "react-native";
import useUploadFile from "src/services/hooks/upload/useUploadFile";
function WrapperTakePicture({
  children,
  onResult,
}: {
  children: React.ReactNode;
  onResult?: (data: string) => void;
}) {
  const { onUpload } = useUploadFile();
  const { hideBottomSheet } = useBottomSheet();
  const handleTakePicture = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    console.log(status);
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
      formData.append("file", {
        uri: item.uri,
        name: item.fileName ?? new Date().getTime().toString(),
        type: `image/jpeg`,
      });
      await onUpload(formData)
        .then((res: any) => {
          onResult && onResult(res.data.url);
        })
        .catch((e) => {})
        .finally(() => {});
    }
  };
  return (
    <TouchableOpacity onPress={handleTakePicture}>{children}</TouchableOpacity>
  );
}

export default WrapperTakePicture;
