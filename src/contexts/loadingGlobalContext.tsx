import { useIsMutating } from "@tanstack/react-query";
import { IMG } from "assets/localImage";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import React, { createContext, useContext, useState } from "react";
import { Modal, StyleSheet } from "react-native";
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
      <Modal
        animationType="fade"
        transparent={true}
        visible={isLoading || isMuting > 0}
        onRequestClose={() => {}}
      >
        <BlurView intensity={10} tint="light" style={styles.blurContainer}>
          <Image source={IMG.loadingIcon} style={{ width: 100, height: 100 }} />
        </BlurView>
      </Modal>

      {children}
    </LoadingContext.Provider>
  );
};

const styles = StyleSheet.create({
  blurContainer: {
    overflow: "hidden",
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
