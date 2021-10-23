import React from "react";

import { useRoute } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Film } from "../../model/Filme";
import { Container } from "./style";
import { ScrollView } from "react-native-gesture-handler";

interface NavigationProps {
  navigation: NativeStackNavigationProp<{
    film: Film;
  }>;
}

export default function DetailPage({ navigation }: NavigationProps) {
  const route = useRoute();
  const film: Film = route.params!["film"];

  function handleBack() {
    navigation.goBack();
  }

  return (
    <ScrollView>
      <Container></Container>
    </ScrollView>
  );
}
