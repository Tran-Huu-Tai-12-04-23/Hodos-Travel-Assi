import { ButtonOutlined, ButtonPrimary } from "@components/@core/Button";
import Row from "@components/@core/Row";
import Separator from "@components/@core/Separator";
import BottomSheetSwitchTheme, {
  BottomSheetMethods,
} from "@components/@core/SwitchTheme/BottomSheetSwitchTheme";
import TextDefault from "@components/@core/TextDefault";
import { useAuth } from "@context/authContext";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import MainLayout from "@layout/MainLayout";
import AppIcon from "assets/svg/app-icon";
import React, { useRef } from "react";
import { ScrollView, StyleSheet } from "react-native";
import AboutInfo from "./Components/About";
import Header from "./Components/Header";
import OfficeStudy from "./Components/OfficeStudy";
import PersonalInfo from "./Components/PersonalInfo";
import Preferences from "./Components/Preferences";

function SettingScreen() {
  const { theme } = useTheme();
  const { logout } = useAuth();

  const bottomSheetRef = useRef<BottomSheetMethods>(null);

  return (
    <MainLayout>
      <Separator height={normalize(40)} />
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <ButtonPrimary onPress={logout} title={"Logout"} /> */}
        <Row direction="column" rowGap={30} center style={[styles.wrapper]}>
          <PersonalInfo />
          <OfficeStudy />
          <Preferences
            onSettingTheme={() => bottomSheetRef.current?.expand()}
          />
          <AboutInfo />
        </Row>

        <Row direction="column" full style={[styles.wrapper]} rowGap={10}>
          <ButtonPrimary minWidth={"100%"} title="Logout" onPress={logout} />
          <ButtonOutlined
            minWidth={"100%"}
            title="Block account"
            onPress={function (): void {}}
          />

          <AppIcon />
          <TextDefault>v1.0.0</TextDefault>
        </Row>
        <Separator height={normalize(20)} />
      </ScrollView>
      <BottomSheetSwitchTheme ref={bottomSheetRef} />
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  avatar: {
    position: "absolute",
    top: -normalize(50),
  },
  wrapper: {
    padding: normalize(20),
  },
});

export default SettingScreen;
