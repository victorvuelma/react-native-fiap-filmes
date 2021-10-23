import React, { useEffect, useState } from "react";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import axios from "axios";

import { Film } from "../../model/Filme";

import {
  Container,
  Header,
  PosterHeader,
  TitleHeader,
  ButtonHeader,
  LabelButton,
  SectionTitle,
  Section,
  CardFilm,
  Poster,
  FilmRating,
  RatingIcon,
  Rating,
  HorizontalList,
} from "./style";
import { ScrollView } from "react-native-gesture-handler";

interface NavigationProps {
  navigation: NativeStackNavigationProp<any>;
}

interface Response {
  results: Film[];
}

export default function HomePage({ navigation }: NavigationProps) {
  const [films, setFilms] = useState<Film[]>([]);
  const [series, setSeries] = useState<Film[]>([]);

  useEffect(() => {
    async function loadFilms() {
      const response = await axios.get<Response>(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=c3c2b0c5bc1a998367f9ed02a2156799"
      );
      setFilms(response.data.results);
    }
    loadFilms();

    async function loadSeries() {
      const response = await axios.get<Response>(
        "https://api.themoviedb.org/3/trending/tv/week?api_key=c3c2b0c5bc1a998367f9ed02a2156799"
      );
      setSeries(response.data.results);
    }
    loadSeries();
  });

  function handleDetail(film: Film) {
    navigation.navigate("DetailPage", { film });
  }

  return (
    <ScrollView>
      <Container>
        <Header>
          <PosterHeader
            source={{
              uri: "https://www.themoviedb.org/t/p/w500/uAWB8qOs7L6zGTwxAbeT97AsJk6.jpg",
            }}
          />
          <TitleHeader>Fundação</TitleHeader>
          <ButtonHeader>
            <LabelButton>detalhes</LabelButton>
          </ButtonHeader>
        </Header>

        <SectionTitle>Filmes em Alta</SectionTitle>
        <Section>
          <HorizontalList
            data={films}
            renderItem={({ item }) => (
              <CardFilm onPress={() => handleDetail(item)}>
                <Poster
                  source={{
                    uri: "https://image.tmdb.org/t/p/w200/" + item.poster_path,
                  }}
                />
                <FilmRating>
                  <RatingIcon name="star" />
                  <Rating>
                    {item.vote_average.toLocaleString("pt-BR", {
                      minimumFractionDigits: 1,
                    })}
                  </Rating>
                </FilmRating>
              </CardFilm>
            )}
          />
        </Section>

        <SectionTitle>Séries em Alta</SectionTitle>
        <Section>
          <HorizontalList
            data={series}
            renderItem={({ item }) => (
              <CardFilm onPress={() => handleDetail(item)}>
                <Poster
                  source={{
                    uri: "https://image.tmdb.org/t/p/w200/" + item.poster_path,
                  }}
                />
                <FilmRating>
                  <RatingIcon name="star" />
                  <Rating>
                    {item.vote_average.toLocaleString("pt-BR", {
                      minimumFractionDigits: 1,
                    })}
                  </Rating>
                </FilmRating>
              </CardFilm>
            )}
          />
        </Section>
      </Container>
    </ScrollView>
  );
}
