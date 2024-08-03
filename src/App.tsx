import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "expo-dev-client";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import BottomSheetProvider from "@context/BottomSheetContext";
import ModalProvider from "@context/ModalContext";
import { AuthProvider } from "@context/authContext";
import { LoadingProvider } from "@context/loadingGlobalContext";
import { UserLocationProvider } from "@context/userLocationContext";
import Vietmap from "@vietmap/vietmap-gl-react-native";
import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { AlertNotificationRoot } from "react-native-alert-notification";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { useLoadedAssets } from "./hooks/useLoadedAssets";
import Navigation from "./navigation";
const queryClient = new QueryClient();
Vietmap.setApiKey("9cbf0bc15d3901b7e043d8f76be8d73f370a82fe629a2d46");
export default function App() {
  const isLoadingComplete = useLoadedAssets();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <AlertNotificationRoot>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <PaperProvider>
              <LoadingProvider>
                <BottomSheetProvider>
                  <AuthProvider>
                    <UserLocationProvider>
                      <ModalProvider>
                        <KeyboardAvoidingView
                          style={{ flex: 1 }}
                          behavior={
                            Platform.OS === "ios" ? "padding" : "height"
                          }
                        >
                          <SafeAreaProvider>
                            <StatusBar style="dark" />
                            <Navigation />
                          </SafeAreaProvider>
                        </KeyboardAvoidingView>
                      </ModalProvider>
                    </UserLocationProvider>
                  </AuthProvider>
                </BottomSheetProvider>
              </LoadingProvider>
            </PaperProvider>
          </GestureHandlerRootView>
        </AlertNotificationRoot>
      </QueryClientProvider>
    );
  }
}
