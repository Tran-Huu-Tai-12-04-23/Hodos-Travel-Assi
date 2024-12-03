import * as Font from "expo-font";
import { useEffect, useState } from "react";

const useFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        AbhayaLibre: require("../../../assets/fonts/font-main.ttf"),
        Main: require("../../../assets/fonts/AbrilFatface-Regular.ttf"),
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  return fontsLoaded;
};

export default useFonts;
