import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import TextDefault from "./TextDefault";
import Row from "./Row";
import { btnPrimary, whiteColor } from "@constants/Colors";
import ButtonCustom from "./ButtonCustom";
import { styleGlobal } from "src/styles";

type CustomModalProps = {
  children?: React.ReactNode;
  isModalVisible: boolean;
  toggleModal?: () => void;
  onReject?: () => void;
  onAccept: () => void;
  title?: string;
  content?: string;
  nameBtnCancel?: string;
  nameBtnConfirm?: string;
};
const CustomModal = ({
  children,
  isModalVisible,
  toggleModal,
  onReject,
  onAccept,
  title,
  content,
  nameBtnCancel,
  nameBtnConfirm,
}: CustomModalProps) => {
  return (
    <Modal
      animationIn="bounceIn"
      animationOut={"bounceOut"}
      isVisible={isModalVisible}
      onBackdropPress={() => toggleModal?.()}
    >
      <Row direction="column" style={[styles.container]}>
        {title && (
          <View
            style={{
              marginBottom: 5,
            }}
          >
            <TextDefault
              style={{
                fontWeight: "700",
                fontSize: 16,
                paddingLeft: 10,
                textAlign: "center",
              }}
            >
              {title}
            </TextDefault>
          </View>
        )}
        {content && content}
        {children}
        {!nameBtnCancel && !nameBtnConfirm && (
          <Row full center colGap={20} style={{ paddingTop: 20 }}>
            {onReject && nameBtnCancel && (
              <TouchableOpacity
                onPress={onReject}
                style={styleGlobal.btnCancel}
              >
                <TextDefault
                  style={{
                    color: "red",
                  }}
                >
                  {nameBtnCancel}
                </TextDefault>
              </TouchableOpacity>
            )}
            {nameBtnConfirm && (
              <TouchableOpacity
                style={styleGlobal.btnAccept}
                onPress={onAccept}
              >
                <TextDefault
                  style={{
                    color: whiteColor,
                  }}
                >
                  {nameBtnConfirm}
                </TextDefault>
              </TouchableOpacity>
            )}
          </Row>
        )}
      </Row>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderRadius: 20,
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    color: "black",
  },
});
