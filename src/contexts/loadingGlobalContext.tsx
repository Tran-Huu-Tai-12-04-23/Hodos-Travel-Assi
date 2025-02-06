import { useIsMutating } from "@tanstack/react-query";
import React, { createContext, useContext, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
interface LoadingContextValue {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextValue | undefined>(
  undefined
);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within an LoadingProvider");
  }
  return context;
};

interface PropsType {
  children: React.ReactNode;
}
export const LoadingProvider = ({ children }: PropsType) => {
  const [isLoading, setIsLoading] = useState(false);

  const isMuting = useIsMutating();
  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {(isLoading || isMuting > 0) && (
        <View style={styles.blurContainer}>
          <ActivityIndicator size={"large"} color={"#48BAEC"} />
        </View>
      )}
      {children}
    </LoadingContext.Provider>
  );
};

const styles = StyleSheet.create({
  blurContainer: {
    zIndex: 100000,
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    position: "absolute",
  },
});
