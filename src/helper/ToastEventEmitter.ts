import { DeviceEventEmitter } from "react-native";

export const showToast = (message: string) => {
  DeviceEventEmitter.emit("showToast", message);
};
export const listenForToast = (callback: (message: string) => void) => {
  const subscription = DeviceEventEmitter.addListener("showToast", callback);
  return () => subscription.remove();
};
