import TextDefault from "@components/TextDefault";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { deviceWidth } from "@helper/utils";
import MainLayout from "@layout/MainLayout";
import { navigate } from "@navigation/NavigationService";
import { APP_ROUTE } from "@navigation/route";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import useLocationPagination from "src/services/hooks/location/useLocationPagination";
import { styleGlobal } from "src/styles";
import Header from "./Header";
export const posts = [
  {
    title: "The best way to learn React",
    img: "https://tructhang.vn/wp-content/uploads/2022/08/Vinh-Ha-Long.jpg",
    heart: 100,
    comment: 20,
    id: "4567189023-o1i2jb.....",
  },
  {
    title: "Hôm nay đá bóng mệt quá",
    img: "https://danviet.mediacdn.vn/thumb_w/650/2020/11/12/2-16051664513571216282575.jpg",
    heart: 2,
    comment: 20,
    id: "asdasdnnasasdasd21231237909876543dasd.....",
  },
  {
    title: "The best way to learn React",
    img: "https://tructhang.vn/wp-content/uploads/2022/08/Vinh-Ha-Long.jpg",
    heart: 100,
    comment: 20,
    id: "asdasdnnasdasd.....",
  },
  {
    title: "Hôm nay đá bóng mệt quá",
    img: "https://danviet.mediacdn.vn/thumb_w/650/2020/11/12/2-16051664513571216282575.jpg",
    heart: 2,
    comment: 20,
    id: "asdasd6666123123",
  },
  {
    title: "The best way to learn React",
    img: "https://tructhang.vn/wp-content/uploads/2022/08/Vinh-Ha-Long.jpg",
    heart: 100,
    comment: 20,
    id: "asdasd999kakdkasd",
  },
  {
    title: "Hôm nay đá bóng mệt quá",
    img: "https://danviet.mediacdn.vn/thumb_w/650/2020/11/12/2-16051664513571216282575.jpg",
    heart: 2,
    comment: 20,
    id: "8888asdjaskdjb",
  },
  {
    title: "The best way to learn React",
    img: "https://tructhang.vn/wp-content/uploads/2022/08/Vinh-Ha-Long.jpg",
    heart: 100,
    comment: 20,
    id: "asdlllasdasd12312",
  },
  {
    title: "Hôm nay đá bóng mệt quá",
    img: "https://danviet.mediacdn.vn/thumb_w/650/2020/11/12/2-16051664513571216282575.jpg",
    heart: 2,
    comment: 20,
    id: "123asdas77777asd123sd123123",
  },
  {
    title: "The best way to learn React",
    img: "https://tructhang.vn/wp-content/uploads/2022/08/Vinh-Ha-Long.jpg",
    heart: 100,
    comment: 20,
    id: "123asdasdasdasdasd123sd123123",
  },
  {
    title: "Hôm nay đá bóng mệt quá",
    img: "https://danviet.mediacdn.vn/thumb_w/650/2020/11/12/2-16051664513571216282575.jpg",
    heart: 2,
    comment: 20,
    id: "123asdasd123123",
  },
  {
    title: "The best way to learn React",
    img: "https://tructhang.vn/wp-content/uploads/2022/08/Vinh-Ha-Long.jpg",
    heart: 100,
    comment: 20,
    id: "12312312312312",
  },
  {
    title: "Hôm nay đá bóng mệt quá",
    img: "https://danviet.mediacdn.vn/thumb_w/650/2020/11/12/2-16051664513571216282575.jpg",
    heart: 2,
    comment: 20,
    id: "asdasdasdasdasdasd",
  },
];

const PostItem = ({ item }: any) => {
  const { theme } = useTheme();
  return (
    <View style={[styles.postContainer, { backgroundColor: theme.background }]}>
      <SharedElement id={`post.${item.id}.image`}>
        <Image source={{ uri: item.img }} style={styles.postImage} />
      </SharedElement>
      <View
        style={{
          position: "absolute",
          bottom: 10,
        }}
      >
        <TextDefault style={[styles.postTitle, { color: "white" }]}>
          {item.title}
        </TextDefault>
        <View style={styles.postStats}>
          <TextDefault style={[styles.postStat, { color: "white" }]}>
            ❤️ {item.heart}
          </TextDefault>
          <TextDefault style={[styles.postStat, { color: "white" }]}>
            💬 {item.comment}
          </TextDefault>
        </View>
      </View>
    </View>
  );
};

function ExploreScreen() {
  const { data, isLoading } = useLocationPagination({});
  const { theme } = useTheme();

  return (
    <MainLayout>
      <Header />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
        }}
      >
        {isLoading ? (
          <Text style={{ color: theme.text }}>Loading...</Text>
        ) : (
          <FlashList
            showsVerticalScrollIndicator={false}
            data={posts}
            ListHeaderComponent={() => <View style={{ height: 20 }} />}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  navigate(APP_ROUTE.POST_DETAIL, {
                    data: item,
                  });
                }}
              >
                <PostItem item={item} />
              </TouchableOpacity>
            )}
            estimatedItemSize={200}
            ListFooterComponent={() => <View style={{ height: 120 }} />}
          />
        )}
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    borderRadius: normalize(10),
    overflow: "hidden",
    ...styleGlobal.shadow,
  },
  postImage: {
    width: "100%",
    height: deviceWidth,
  },
  postTitle: {
    fontSize: normalize(16),
    fontWeight: "bold",
    margin: normalize(10),
  },
  postStats: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: normalize(10),
    marginBottom: normalize(10),
    columnGap: 20,
  },
  postStat: {
    fontSize: normalize(14),
  },
});

export default ExploreScreen;
