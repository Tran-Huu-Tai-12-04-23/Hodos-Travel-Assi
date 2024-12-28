import { useBottomSheet } from "@context/bottomSheetContext";
import * as ImagePicker from "expo-image-picker";
import React from "react";
import { Alert, Linking, TouchableOpacity } from "react-native";
import useUploadFile from "src/services/hooks/upload/useUploadFile";

function WrapperSelectImageFromLib({
  children,
  onResult,
}: {
  children: React.ReactNode;
  onResult?: (data: string) => void;
}) {
  const { onUpload } = useUploadFile();
  const { hideBottomSheet } = useBottomSheet();
  const handleSelectImgFromLib = async () => {
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
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
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
          onResult && onResult(res?.data?.url);
        })
        .catch((e) => {})
        .finally(() => {});
    }
  };
  return (
    <TouchableOpacity onPress={handleSelectImgFromLib}>
      {children}
    </TouchableOpacity>
  );
}

export default WrapperSelectImageFromLib;
