import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import { useAuth } from "@context/authContext";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import MainLayout from "@layout/MainLayout";
import { navigate } from "@navigation/NavigationService";
import { APP_ROUTE } from "@navigation/route";
import SearchIcon from "assets/svg/search-icon";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import useLocationPagination from "src/services/hooks/location/useLocationPagination";
import BestDestination from "./BestDestination";
import Categories from "./Categories";
import Header from "./Header";
import LoginHelper from "./LoginHelper";
function HomeScreen() {
  const { theme } = useTheme();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { data } = useLocationPagination({});
  const [dataLocation, setDataLocation] = React.useState(data);
  const refreshSimulationHandler = () => {
    console.log("refresh");
    setDataLocation([]);
    setIsLoading(true);
    setTimeout(async () => {
      setDataLocation(data);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <MainLayout>
      <Animatable.View
        animation="fadeIn"
        delay={100}
        duration={400}
        easing="ease-in-out"
      >
        {user && <Header />}
        {!user && <LoginHelper />}
      </Animatable.View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, zIndex: 1 }}
      >
        <Separator height={20} />
        <Animatable.View
          animation="fadeIn"
          delay={200}
          duration={400}
          easing="ease-in-out"
        >
          <Row
            full
            direction="column"
            start
            style={{ paddingHorizontal: normalize(10) }}
          >
            <TextDefault
              style={{
                fontFamily: "Main",
              }}
              size={normalize(26)}
              color={theme.textSecond}
            >
              Explore the{" "}
            </TextDefault>
            <TextDefault
              style={{
                fontFamily: "Main",
              }}
            >
              <TextDefault size={normalize(26)} color={theme.text}>
                Beautiful
              </TextDefault>

              <TextDefault size={normalize(26)} color={theme.primary}>
                world!
              </TextDefault>
            </TextDefault>
          </Row>
          <Separator height={20} />
        </Animatable.View>

        <Animatable.View
          animation="fadeIn"
          delay={250}
          duration={400}
          easing="ease-in-out"
        >
          <TouchableOpacity onPress={() => navigate(APP_ROUTE.SEARCH_SCREEN)}>
            <Row
              between
              style={{
                marginHorizontal: normalize(10),
                padding: normalize(15),
                backgroundColor: theme.inputBackground,
                borderRadius: normalize(10),
              }}
            >
              <SearchIcon color={theme.textSecond} />
            </Row>
          </TouchableOpacity>
        </Animatable.View>

        <Animatable.View
          animation="fadeIn"
          delay={300}
          duration={400}
          easing="ease-in-out"
        >
          <View
            style={{
              padding: normalize(10),
            }}
          >
            <Categories />
          </View>
        </Animatable.View>
        <Animatable.View
          animation="fadeIn"
          delay={350}
          duration={400}
          easing="ease-in-out"
        >
          <BestDestination data={data} />
        </Animatable.View>

        <Separator height={100} />
      </ScrollView>
    </MainLayout>
  );
}

export default HomeScreen;
