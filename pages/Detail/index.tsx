import React from "react";

import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { useRoute } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import dayjs from "dayjs";

import { Film } from "../../model/Filme";
import {
  BackButton,
  Container,
  Description,
  LabelButton,
  Poster,
  RatingBox,
  RatingIcon,
  RatingText,
  ReleaseDate,
  Title,
} from "./style";

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
      <Container>
        <SafeAreaView>
          <Poster
            source={{
              uri:
                "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/" +
                film.backdrop_path,
            }}
          />

          <Title>{film.title}</Title>

          <RatingBox>
            <RatingIcon name="star" />
            <RatingText>
              {film.vote_average.toLocaleString("pt-BR", {
                minimumFractionDigits: 1,
              })}
            </RatingText>
          </RatingBox>

          <Description>{film.overview}</Description>

          <ReleaseDate>
            Data de lançamento: {dayjs(film.release_date).format("DD/MM/YYYY")}
          </ReleaseDate>

          <BackButton onPress={() => handleBack()}>
            <LabelButton>Voltar</LabelButton>
          </BackButton>
        </SafeAreaView>
      </Container>
    </ScrollView>
  );
}
