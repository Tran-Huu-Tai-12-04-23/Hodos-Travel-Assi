import { ExpoConfig } from "@expo/config";
import dotenv from "dotenv";

dotenv.config();

const envs = {
  development: {
    EXPO_PUBLIC_APP_VARIANT: "development",
    EXPO_PUBLIC_APP_NAME: "Hodos Dev",
    EXPO_PUBLIC_BUNDLE_ID: "com.genny.hodos.dev",
    EXPO_PUBLIC_API: "",
  },
  production: {
    EXPO_PUBLIC_APP_VARIANT: "production",
    EXPO_PUBLIC_APP_NAME: "Hodos",
    EXPO_PUBLIC_BUNDLE_ID: "com.genny.hodos.prod",
    EXPO_PUBLIC_API: "",
  },
};

const { EXPO_PUBLIC_APP_VARIANT, EXPO_PUBLIC_APP_NAME, EXPO_PUBLIC_BUNDLE_ID } =
  envs[(process.env.NODE_ENV as keyof typeof envs) || "production"];

if (EXPO_PUBLIC_BUNDLE_ID == null) {
  throw new Error("EXPO_PUBLIC_BUNDLE_ID is not defined");
}

if (EXPO_PUBLIC_APP_NAME == null) {
  throw new Error("EXPO_PUBLIC_APP_NAME is not defined");
}

if (EXPO_PUBLIC_APP_VARIANT == null) {
  throw new Error("EXPO_PUBLIC_APP_VARIANT is not defined");
}

export default (): ExpoConfig => ({
  orientation: "portrait",
  userInterfaceStyle: "automatic",
  name: EXPO_PUBLIC_APP_NAME,
  slug: "hodos",
  version: "2.0.1",
  icon: "./assets/logo.png",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "cover",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  web: {
    favicon: "./assets/favicon.png",
  },
  owner: "huutaidev",
  extra: {
    eas: {
      projectId: "f24d885a-f8e1-4c5f-8ddf-f46fbc9a8397",
    },
  },
  runtimeVersion: "2.0.0",
  updates: {
    enabled: true,
    fallbackToCacheTimeout: 60_000,
    checkAutomatically: "ON_LOAD",
    url: "https://u.expo.dev/f24d885a-f8e1-4c5f-8ddf-f46fbc9a8397",
  },
  ios: {
    bundleIdentifier: EXPO_PUBLIC_BUNDLE_ID,
    buildNumber: "1",
    infoPlist: {
      CFBundleAllowMixedLocalizations: true,
      NSLocationWhenInUseUsageDescription:
        "When in use permissions description",
    },
    config: {
      usesNonExemptEncryption: false,
      googleMapsApiKey: "AIzaSyACFEyucHfjhPUl88GCY1spvYuHi8lNEUA",
    },
  },
  android: {
    versionCode: 1,
    package: EXPO_PUBLIC_BUNDLE_ID,
    userInterfaceStyle: "automatic",
    config: {
      googleMaps: {
        apiKey: "AIzaSyACFEyucHfjhPUl88GCY1spvYuHi8lNEUA",
      },
    },
  },
  plugins: [
    [
      "@react-native-voice/voice",
      {
        microphonePermission: "Allow travel app to access your microphone",
        speechRecogntionPermission:
          "Allow travel app to securely recognize user speech",
      },
    ],
    [
      "expo-build-properties",
      {
        ios: {
          useFrameworks: "static",
        },
      },
    ],
  ],
});
