import ButtonCustom from "@components/ButtonCustom";
import { styles } from "@components/ButtonCustom/style";
import GifImage from "@components/Gif";
import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import {
  inputColor,
  labelColor,
  mainBg,
  primaryColor,
  whiteColor,
} from "@constants/Colors";
import { useModal } from "@context/ModalContext";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useVoiceRecognition } from "@hooks/voice";
import { navigate } from "@navigation/NavigationService";
import { ROUTE_KEY } from "@navigation/route";
import { GIF_LINK } from "assets/Gif";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { styleGlobal } from "src/styles";

const ModalVoiceSearch = () => {
  const { startRecognizing, state } = useVoiceRecognition();
  const { hideModal } = useModal();
  useEffect(() => {
    startRecognizing();
  }, []);

  return (
    <Row direction="column" full>
      <TouchableOpacity
        onPress={() => {
          startRecognizing();
        }}
        style={{
          backgroundColor: mainBg,
          padding: 20,
          borderRadius: 200,
        }}
      >
        <MaterialIcons name="keyboard-voice" size={200} color={primaryColor} />
      </TouchableOpacity>
      <GifImage source={GIF_LINK.RECORDING} width={150} height={150} />
      <TextDefault>{state.results[0]}</TextDefault>

      <Row full center colGap={20} style={{ paddingTop: 20 }}>
        <TouchableOpacity onPress={hideModal} style={styleGlobal.btnCancel}>
          <TextDefault
            style={{
              color: "red",
            }}
          >
            Close
          </TextDefault>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleGlobal.btnAccept}
          onPress={() => {
            navigate(ROUTE_KEY.SEARCH, { query: state.results[0] });
            hideModal();
          }}
        >
          <TextDefault
            style={{
              color: whiteColor,
            }}
          >
            Search
          </TextDefault>
        </TouchableOpacity>
      </Row>
    </Row>
  );
};
function Search() {
  const { openModal, hideModal } = useModal();

  const handleOpenModal = () => {
    openModal({
      content: <ModalVoiceSearch />,
      title: "",
      nameAcceptButton: "",
      nameCancelButton: "Close",
      onReject: hideModal,
      onAccept: () => {},
    });
  };
  return (
    <Row
      between
      wrap
      colGap={10}
      style={{
        backgroundColor: inputColor,
        borderRadius: 10,
        paddingLeft: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => navigate(ROUTE_KEY.SEARCH)}
        style={{ padding: 20, paddingLeft: 10, width: "80%" }}
      >
        <TextDefault style={{ color: labelColor }}>
          Where do you go?
        </TextDefault>
      </TouchableOpacity>
      <ButtonCustom
        minWidth={50}
        radius={10}
        primary
        style={{ padding: 16 }}
        startIcon={
          <Ionicons
            name="mic"
            size={22}
            color="white"
            style={{ marginTop: "auto", marginBottom: "auto" }}
          />
        }
        onPress={handleOpenModal}
        title={""}
      />
    </Row>
  );
}

export default Search;
