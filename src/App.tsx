import AppLoading from "@components/AppLoading";
import { AuthProvider } from "@context/authContext";
import BottomSheetProvider from "@context/bottomSheetContext";
import { LoadingProvider } from "@context/loadingGlobalContext";
import { ThemeProvider } from "@context/themContext";
import { ToastProvider } from "@context/toastContext";
import useFonts from "@helper/hooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { StatusBar } from "react-native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useLoadedAssets } from "./hooks/useLoadedAssets";
import Navigation from "./navigation";

const queryClient = new QueryClient();
export default function App() {
  const fontsLoaded = useFonts();

  const isLoadingComplete = useLoadedAssets();
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaProvider>
            <KeyboardProvider>
              <ThemeProvider>
                <BottomSheetProvider>
                  <ToastProvider>
                    <AuthProvider>
                      <LoadingProvider>
                        <Navigation />
                        <StatusBar barStyle={"light-content"} />
                      </LoadingProvider>
                    </AuthProvider>
                  </ToastProvider>
                </BottomSheetProvider>
              </ThemeProvider>
            </KeyboardProvider>
          </SafeAreaProvider>
        </GestureHandlerRootView>
      </QueryClientProvider>
    );
  }
}
