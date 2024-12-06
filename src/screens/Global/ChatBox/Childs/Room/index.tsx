import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { useTheme } from "@context/themContext";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { normalize } from "@helper/helpers";
import { deviceWidth } from "@helper/utils";
import MainLayout from "@layout/MainLayout";
import React, { useEffect, useRef } from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { KeyboardStickyView } from "react-native-keyboard-controller";
import { styleGlobal } from "src/styles";
import Header from "./Header";

const chatData = [
  {
    message: "Send a pun-filled happy birthday message to my friend Malik",
    isChatBox: false,
  },
  {
    message:
      "Hey Malik! Hoping your birthday is pun-believably awesome! Have a puntastic",
    isChatBox: true,
  },
  {
    message: "Make it perfect!",
    isChatBox: false,
  },
  {
    message:
      "Hey Malik! Guess what day it is? It's the day we celebrate the one and only Malik! Time to break out the confetti, cue the music, and unleash the puns! On your special day, let's raise a toast to the guy who's always got a 'punny' comeback and a smile that lights up the room brighter than birthday!",
    isChatBox: true,
  },
  {
    message: "Send a pun-filled happy birthday message to my friend Malik",
    isChatBox: false,
  },
  {
    message:
      "Hey Malik! Hoping your birthday is pun-believably awesome! Have a puntastic",
    isChatBox: true,
  },
  {
    message: "Make it perfect!",
    isChatBox: false,
  },
  {
    message:
      "Hey Malik! Guess what day it is? It's the day we celebrate the one and only Malik! Time to break out the confetti, cue the music, and unleash the puns! On your special day, let's raise a toast to the guy who's always got a 'punny' comeback and a smile that lights up the room brighter than birthday!",
    isChatBox: true,
  },
];
const offset = { closed: 0, opened: 0 };
function RoomChatScreen() {
  const { theme } = useTheme();

  const inputRef = useRef<any>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputRef]);
  return (
    <MainLayout>
      <Header />
      <KeyboardStickyView offset={offset} style={styles.container}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <Animatable.View
            animation="fadeIn"
            delay={200}
            duration={400}
            easing="ease-in-out"
          >
            {chatData.map((item, index) => (
              <Row
                key={index}
                full
                style={{
                  padding: normalize(10),
                  justifyContent: !item.isChatBox ? "flex-end" : "flex-start",
                }}
              >
                <View
                  style={[
                    styles.messageContainer,
                    {
                      backgroundColor: item.isChatBox
                        ? theme.primary
                        : theme.background,
                      borderColor: theme.border,
                    },
                  ]}
                >
                  <TextDefault
                    size={normalize(14)}
                    color={item?.isChatBox ? "white" : theme.text}
                  >
                    {item.message}
                  </TextDefault>
                </View>
              </Row>
            ))}
          </Animatable.View>
        </ScrollView>
        <Animatable.View
          animation="fadeIn"
          delay={300}
          duration={400}
          easing="ease-in-out"
          style={styles.inputContainerWrapper}
        >
          <Row
            between
            full
            style={[
              styles.inputContainer,
              {
                borderColor: theme.border,
                backgroundColor: theme.inputBackground,
              },
            ]}
          >
            <TouchableOpacity>
              <Ionicons name="add" size={24} color={theme.primary} />
            </TouchableOpacity>
            <TextInput
              ref={inputRef}
              placeholderTextColor={theme.textSecond}
              placeholder="Ask anything"
              style={styles.textInput}
            />
            <TouchableOpacity>
              <MaterialCommunityIcons
                name="send"
                size={24}
                color={theme.primary}
              />
            </TouchableOpacity>
          </Row>
        </Animatable.View>
      </KeyboardStickyView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    padding: normalize(10),
    borderRadius: normalize(10),
    ...styleGlobal.shadow,
    ...styleGlobal.border,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 16,
    flex: 1,
  },
  content: {
    paddingTop: 50,
  },
  scrollViewContent: {
    paddingBottom: 100,
  },
  inputContainerWrapper: {
    bottom: 10,
    left: 10,
    right: 10,
    width: deviceWidth - normalize(40),
  },
  inputContainer: {
    borderRadius: normalize(10),
    padding: normalize(10),
    ...styleGlobal.shadow,
    ...styleGlobal.border,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default RoomChatScreen;
