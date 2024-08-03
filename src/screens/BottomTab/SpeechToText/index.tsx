import GifImage from "@components/Gif";
import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { dangerColor, mainBg, primaryColor } from "@constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import useTranslate from "@hooks/api/translate/useTranslate";
import { useVoiceRecognition } from "@hooks/voice";
import MainLayout from "@layout/MainLayout";
import { GIF_LINK } from "assets/Gif";
import React, { useEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-paper";
function TextToSpeakScreen() {
  const { startRecognizing, stopRecognizing, state } = useVoiceRecognition();
  const [textTranslate, setTextTranslate] = useState("");
  const { onTranslate, data, isLoading } = useTranslate();

  useEffect(() => {
    const handleTranslate = async () => {
      if (state.results[0]) {
        onTranslate({ text: state.results[0].toString() });
      }
    };

    handleTranslate();
  }, [state.results[0]]);

  return (
    <MainLayout isBack>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Row
          direction="column"
          full
          style={{ padding: 10, paddingTop: 60 }}
          rowGap={20}
        >
          <Row
            style={{ padding: 20, backgroundColor: mainBg, borderRadius: 20 }}
            full
          >
            <TextDefault style={{ fontSize: 22 }}>
              {state.results[0]}
            </TextDefault>
          </Row>
          <TextDefault bold style={{ fontSize: 14 }}>
            Translate to vietnamese:
          </TextDefault>
          <Row
            style={{ padding: 20, backgroundColor: mainBg, borderRadius: 20 }}
            full
          >
            <TextDefault style={{ fontSize: 22 }}>
              {data?.data.translations.translatedText ?? ""}
              {isLoading && <ActivityIndicator color={primaryColor} />}
            </TextDefault>
          </Row>
          <TouchableOpacity
            onPress={() => {
              if (state.isRecording) {
                stopRecognizing();
              } else {
                startRecognizing();
              }
            }}
            style={{
              backgroundColor: mainBg,
              padding: 20,
              borderRadius: 200,
            }}
          >
            <MaterialIcons
              name="keyboard-voice"
              size={200}
              color={state.isRecording ? dangerColor : primaryColor}
            />
          </TouchableOpacity>

          {state.isRecording && (
            <GifImage source={GIF_LINK.RECORDING} width={150} height={150} />
          )}
        </Row>
      </ScrollView>
    </MainLayout>
  );
}

export default TextToSpeakScreen;
