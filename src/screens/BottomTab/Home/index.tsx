import Avatar from "@components/Avatar";
import ButtonCustom from "@components/ButtonCustom";
import FoodItem from "@components/FoodItem";
import LocationItem from "@components/LocationItem";
import Row from "@components/Row";
import Separator from "@components/Separator";
import TextDefault from "@components/TextDefault";
import { inputColor, labelColor, primaryColor } from "@constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import useLoadHomeData from "@hooks/api/home/useLoadHomeData";
import MainLayout from "@layout/MainLayout";
import { navigate, openDrawer } from "@navigation/NavigationService";
import { ROUTE_KEY } from "@navigation/route";
import { localImages } from "assets/localImage";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  RefreshControl,
  View,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { IFood } from "src/Models/food.model";
import { ILocation } from "src/Models/location.model";
import { styleGlobal } from "src/styles";
import { useUserLocation } from "@context/userLocationContext";
import { FadeIn } from "react-native-reanimated";
import HorizontalSkeleton from "@components/HorizontalSkeleton";
import { useAuth } from "@context/authContext";
import Search from "./Search";
function HomeScreen() {
  const { logout } = useAuth();
  const { data, isLoading, onLoadHomeData } = useLoadHomeData();
  const [refreshing, setRefreshing] = React.useState(false);
  const { userLocation } = useUserLocation();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    userLocation &&
      onLoadHomeData({
        location: [userLocation?.longitude, userLocation?.latitude],
      });
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    userLocation &&
      onLoadHomeData({
        location: [userLocation?.longitude, userLocation?.latitude],
      });
  }, [userLocation]);

  const _renderItem = ({ item, index }: { item: ILocation; index: number }) => (
    <LocationItem key={index} width={250} data={item} />
  );
  const _renderFoodItem = ({ item, index }: { item: IFood; index: number }) => (
    <FoodItem key={index} width={250} data={item} />
  );

  const _renderSkeleton = () => {
    return <HorizontalSkeleton />;
  };

  return (
    <MainLayout style={{ paddingBottom: 0 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Row
          between
          full
          colGap={20}
          style={{ alignItems: "flex-start", paddingTop: 10 }}
        >
          <Row start colGap={20}>
            <TouchableOpacity onPress={openDrawer}>
              <Avatar
                link={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTWcCiaYRwLtYTSP7wf3wgPCo-ExPN2OZtFu16Hbx8Qg&s",
                }}
              />
            </TouchableOpacity>
          </Row>

          <TouchableOpacity onPress={logout}>
            <Row style={styleGlobal.shadow}>
              <Image
                source={localImages().exitIcon}
                style={{ width: 35, height: 35 }}
                resizeMode="contain"
              />
            </Row>
          </TouchableOpacity>
        </Row>
        <Separator height={5} />
        <TextDefault bold style={{ fontSize: 32 }}>
          Welcome to{"\n"}
          <TextDefault bold style={{ fontSize: 32, color: primaryColor }}>
            Ho Chi Minh
          </TextDefault>
          {"\n"}
          City Find Your Stay
        </TextDefault>

        <Separator height={30} />
        <Search />
        {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Row start colGap={30}>
            {districts.map((dis, index) => (
              <Row direction="column" rowGap={4} center key={index}>
                <Avatar size={70} link={{ uri: dis.img }} />
                <TextDefault bold>{dis.name}</TextDefault>
              </Row>
            ))}
          </Row>
        </ScrollView> */}
        <Separator height={30} />
        <Row between full>
          <TextDefault
            entering={FadeIn.springify()}
            bold
            style={{ fontSize: 22 }}
          >
            Famous places near you
          </TextDefault>
        </Row>
        <View style={{ minHeight: 170 }}>
          {isLoading && _renderSkeleton()}
          {!isLoading && (
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              ItemSeparatorComponent={() => <View style={{ width: 30 }} />}
              contentContainerStyle={{ paddingBottom: 20 }}
              data={data?.locations}
              renderItem={_renderItem}
              keyExtractor={(item) => item?._id}
            />
          )}
        </View>
        <Separator height={30} />
        <Row between full>
          <TextDefault
            entering={FadeIn.springify()}
            bold
            style={{ fontSize: 22 }}
          >
            Famous foods near you
          </TextDefault>
        </Row>
        <View style={{ minHeight: 170 }}>
          {isLoading && _renderSkeleton()}
          {!isLoading && (
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              ListEmptyComponent={_renderSkeleton}
              ItemSeparatorComponent={() => <View style={{ width: 30 }} />}
              contentContainerStyle={{ paddingBottom: 20 }}
              data={data?.foods}
              renderItem={_renderFoodItem}
              keyExtractor={(item) => item?._id}
            />
          )}
        </View>

        <Separator height={100} />
      </ScrollView>
    </MainLayout>
  );
}

export default HomeScreen;
