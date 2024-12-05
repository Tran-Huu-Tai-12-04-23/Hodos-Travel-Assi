import { ExpoConfig } from "@expo/config";
import dotenv from "dotenv";

dotenv.config();

const envs = {
  development: {
    EXPO_PUBLIC_APP_VARIANT: "development",
    EXPO_PUBLIC_APP_NAME: "Hodos DEV",
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
  envs["production"];

if (!EXPO_PUBLIC_BUNDLE_ID) {
  throw new Error("EXPO_PUBLIC_BUNDLE_ID is not defined");
}

if (!EXPO_PUBLIC_APP_NAME) {
  throw new Error("EXPO_PUBLIC_APP_NAME is not defined");
}

if (!EXPO_PUBLIC_APP_VARIANT) {
  throw new Error("EXPO_PUBLIC_APP_VARIANT is not defined");
}

const IOSGoogleServices = {
  development: "./metadata/GoogleService-Info-dev.plist",
  production: "./metadata/GoogleService-Info-pro.plist",
};

const AndroidGoogleServices = {
  development: "./metadata/google-services-dev.json",
  production: "./metadata/google-services-pro.json",
};

export default (): ExpoConfig => ({
  orientation: "portrait",
  userInterfaceStyle: "automatic",
  name: EXPO_PUBLIC_APP_NAME,
  slug: "hodos",
  version: "1.0.1",
  icon: "./assets/icon.png",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "cover",
  },
  assetBundlePatterns: ["**/*"],
  web: {
    favicon: "./assets/favicon.png",
  },
  owner: "huutaidev",
  extra: {
    eas: {
      projectId: "3c1da8bb-1305-4bac-a8d3-2df33b10bb8d",
    },
  },
  runtimeVersion: "1.0.0",
  updates: {
    enabled: true,
    fallbackToCacheTimeout: 60_000,
    checkAutomatically: "ON_LOAD",
    url: "https://u.expo.dev/3c1da8bb-1305-4bac-a8d3-2df33b10bb8d",
  },
  ios: {
    bundleIdentifier: EXPO_PUBLIC_BUNDLE_ID,
    buildNumber: "1",
    infoPlist: {
      CFBundleAllowMixedLocalizations: true,
    },
    config: {
      usesNonExemptEncryption: false,
      googleMapsApiKey: "AIzaSyAvGEN00rga0fODH-EwKK6kFLwP894s-ds",
    },
    googleServicesFile: IOSGoogleServices["production"],
    entitlements: {
      "aps-environment": "production",
    },
  },
  android: {
    versionCode: 1,
    package: EXPO_PUBLIC_BUNDLE_ID,
    userInterfaceStyle: "automatic",
    permissions: ["INTERNET", "ACCESS_NETWORK_STATE", "WAKE_LOCK"],
    googleServicesFile: AndroidGoogleServices["production"],
    config: {
      googleMaps: {
        apiKey: "AIzaSyAvGEN00rga0fODH-EwKK6kFLwP894s-ds",
      },
    },
  },
  plugins: [
    [
      "expo-build-properties",
      {
        ios: {
          useFrameworks: "static",
        },
      },
    ],
    "@react-native-firebase/app",
    "@react-native-firebase/auth",
    [
      "expo-secure-store",
      {
        faceIDPermission:
          "Allow $(PRODUCT_NAME) to access your Face ID biometric data.",
      },
    ],
    [
      "expo-font",
      {
        fonts: ["./assets/fonts/Roboto.ttf"],
      },
    ],
  ],
});
