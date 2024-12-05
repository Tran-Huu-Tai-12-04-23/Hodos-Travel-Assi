import { ButtonPrimary } from "@components/Button";
import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import MainLayout from "@layout/MainLayout";
import { navigate } from "@navigation/NavigationService";
import { APP_ROUTE } from "@navigation/route";
import ChatBoxIcon from "assets/svg/chat-box-icon";
import PlanIcon from "assets/svg/planIcon";
import SearchBtnIcon from "assets/svg/searchBtnIcon";
import SuggestIcon from "assets/svg/suggest-icon";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { styleGlobal } from "src/styles";
import Header from "./Header";
const cate = [
  {
    name: "Planning",
    icon: <PlanIcon />,
  },
  {
    name: "Local",
    icon: <SearchBtnIcon />,
  },
  {
    name: "Suggest",
    icon: <SuggestIcon />,
  },
];
function ChatBoxScreen() {
  const { theme } = useTheme();
  return (
    <MainLayout>
      <Header />
      <Animatable.View
        animation="fadeIn"
        delay={200}
        duration={400}
        easing="ease-in-out"
      >
        <View
          style={{
            padding: normalize(20),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ChatBoxIcon />
        </View>
      </Animatable.View>
      <Animatable.View
        animation="fadeIn"
        delay={250}
        duration={400}
        easing="ease-in-out"
      >
        <Row full around>
          {cate.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                width: "25%",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.04)",
                padding: 10,
                borderRadius: normalize(10),
                ...styleGlobal.border,
                borderColor: theme.border,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  rowGap: 5,
                }}
              >
                {item.icon}
                <TextDefault>{item.name}</TextDefault>
              </View>
            </TouchableOpacity>
          ))}
        </Row>
      </Animatable.View>

      <View
        style={{
          padding: normalize(20),
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Animatable.View
          animation="fadeIn"
          delay={300}
          duration={400}
          easing="ease-in-out"
        >
          <ButtonPrimary
            title="Ask me everything"
            onPress={() => navigate(APP_ROUTE.ROOM_CHAT)}
          />
        </Animatable.View>
      </View>
    </MainLayout>
  );
}

export default ChatBoxScreen;
