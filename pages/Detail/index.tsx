import React from "react";

import { useRoute } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import dayjs from "dayjs";

import { Movie } from "../../model/Movie";
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
  navigation: NativeStackNavigationProp<any>;
}

export function Detail({ navigation }: NavigationProps) {
  const route = useRoute();
  const movie: Movie = route.params!["movie"];

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Poster
        source={{
          uri:
            "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/" +
            movie.backdrop_path,
        }}
      />

      <Title>{movie.title ?? movie.name}</Title>

      <RatingBox>
        <RatingIcon name="star" />
        <RatingText>
          {movie.vote_average.toLocaleString("pt-BR", {
            minimumFractionDigits: 1,
          })}
        </RatingText>
      </RatingBox>

      <Description>{movie.overview}</Description>

      <ReleaseDate>
        Data de lançamento: {dayjs(movie.release_date).format("DD/MM/YYYY")}
      </ReleaseDate>

      <BackButton onPress={() => handleBack()}>
        <LabelButton>Voltar</LabelButton>
      </BackButton>
    </Container>
  );
}
