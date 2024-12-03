import { normalize } from "@helper/helpers";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";

interface CarouselProps {
  pages: any[];
  style?: {};
  onChangeCurrentPage?: (page: number) => void;
}

function Carousel({ pages, style, onChangeCurrentPage }: CarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const slide = useRef<PagerView | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextPage = (currentPage + 1) % pages.length;
      setCurrentPage(nextPage);
      slide?.current?.setPage(nextPage);
      if (onChangeCurrentPage) {
        onChangeCurrentPage(nextPage);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [currentPage, pages.length, onChangeCurrentPage]);

  return (
    <>
      {pages?.length > 0 && (
        <PagerView
          onPageSelected={(e) => {
            const selectedPage = e.nativeEvent.position;
            setCurrentPage(selectedPage);
            if (onChangeCurrentPage) {
              onChangeCurrentPage(selectedPage);
            }
          }}
          ref={slide}
          style={[styles.container, style]}
          initialPage={0}
        >
          {pages.map((page, index) => (
            <View style={[styles.page]} key={index.toString()}>
              {page}
            </View>
          ))}
        </PagerView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  dot: {
    width: normalize(25),
    height: normalize(10),
    borderRadius: 10,
  },
  container: {},
  page: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontSize: 24,
    color: "#fff",
  },
  swipeText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default Carousel;
