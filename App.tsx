import {
  Roboto_100Thin,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React from "react";

import Home from "./pages/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading></AppLoading>;
  }

  return <Home></Home>;
}
