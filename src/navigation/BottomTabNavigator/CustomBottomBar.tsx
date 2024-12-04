import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import { APP_ROUTE, BOTTOM_TAB_ROUTE } from "@navigation/route";
import AccountIcon from "assets/svg/account-icon";
import HomeIcon from "assets/svg/home-icon";
import SearchIcon from "assets/svg/search-icon";
import { BlurView } from "expo-blur";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

function CustomBottomBar({ state, descriptors, navigation }: any) {
  const { theme } = useTheme();

  const bottomBarRoutes = [
    {
      name: BOTTOM_TAB_ROUTE.HOME,
      key: BOTTOM_TAB_ROUTE.HOME,
      iconDefault: <HomeIcon color={theme.icon} />,
      iconActive: <HomeIcon color={theme.primary} />,
    },
    // {
    //   name: BOTTOM_TAB_ROUTE.CALENDER,
    //   key: BOTTOM_TAB_ROUTE.CALENDER,
    //   iconDefault: <CalenderIcon color={theme.icon} />,
    //   iconActive: <CalenderIcon color={theme.primary} />,
    // },
    {
      name: BOTTOM_TAB_ROUTE.SEARCH,
      key: BOTTOM_TAB_ROUTE.SEARCH,
      iconDefault: <SearchIcon color={"white"} />,
      iconActive: <SearchIcon color={"white"} />,
      isCreate: true,
    },
    // {
    //   name: BOTTOM_TAB_ROUTE.MESSAGE,
    //   key: BOTTOM_TAB_ROUTE.MESSAGE,
    //   iconDefault: <MessageIcon color={theme.icon} />,
    //   iconActive: <MessageIcon color={theme.primary} />,
    // },
    {
      name: BOTTOM_TAB_ROUTE.PROFILE,
      key: BOTTOM_TAB_ROUTE.PROFILE,
      iconDefault: <AccountIcon color={theme.icon} />,
      iconActive: <AccountIcon color={theme.primary} />,
    },
  ];

  return (
    <BlurView
      intensity={40}
      tint="light"
      style={[
        {
          position: "absolute",
          bottom: 0,
          zIndex: 100,
          backgroundColor: "rgba(255,255,255,0.2)",
          left: 0,
          right: 0,
          borderTopLeftRadius: normalize(20),
          borderTopRightRadius: normalize(20),
        },
      ]}
    >
      <View style={[styles.container]}>
        {bottomBarRoutes.map((route, index) => {
          if (route.isCreate) {
            return (
              <View
                key={route.name}
                style={{
                  height: normalize(50),
                  width: normalize(50),
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: normalize(1000),
                  paddingHorizontal: normalize(20),
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(APP_ROUTE.LOCATION_MAP_SEARCH_SCREEN)
                  }
                  style={[
                    styles.tab,
                    {
                      backgroundColor: theme.primary,
                      borderRadius: normalize(1000),
                      height: normalize(55),
                      width: normalize(55),
                    },
                  ]}
                >
                  {route.iconActive}
                </TouchableOpacity>
              </View>
            );
          }

          const options = descriptors[state.routes[index]?.key]?.options;

          if (!options) return;
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: state.routes[index]?.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: state.routes[index]?.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tab}
            >
              {isFocused ? route.iconActive : route.iconDefault}
            </TouchableOpacity>
          );
        })}
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: normalize(10),
    paddingBottom: normalize(20),
    backgroundColor: "transparent",
    justifyContent: "center",
    borderTopLeftRadius: normalize(20),
    borderTopRightRadius: normalize(20),
  },
  tab: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    width: "50%",
  },
});

export default CustomBottomBar;
