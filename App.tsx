import React from "react";
import { ThemeProvider } from "styled-components/native";

import {
  useFonts,
  Roboto_100Thin,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import temaDefault from "./global/themes/default";

import { Detail } from "./pages/Details";
import Home from "./pages/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  const [carregou] = useFonts({
    Roboto_100Thin,
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!carregou) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={temaDefault}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
