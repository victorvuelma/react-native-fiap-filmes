import React, { useEffect, useState, useCallback } from "react";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import axios from "axios";

import { Movie } from "../../model/Movie";

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

interface NavigationProps {
  navigation: NativeStackNavigationProp<any>;
}

interface Response {
  results: Movie[];
}

export default function Home({ navigation }: NavigationProps) {
  const [films, setFilms] = useState<Movie[]>([]);
  const [series, setSeries] = useState<Movie[]>([]);

  useEffect(() => {
    console.log("Load Films");
    async function loadFilms() {
      const filmsResponse = await axios.get<Response>(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=c3c2b0c5bc1a998367f9ed02a2156799"
      );
      setFilms(filmsResponse.data.results);
    }
    loadFilms();
  }, []);

  useEffect(() => {
    console.log("Load Series");
    async function loadSeries() {
      const seriesResponse = await axios.get<Response>(
        "https://api.themoviedb.org/3/trending/tv/week?api_key=c3c2b0c5bc1a998367f9ed02a2156799"
      );
      setSeries(seriesResponse.data.results);
    }
    loadSeries();
  }, []);

  const renderMovie = useCallback(
    ({ item }) => (
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
    ),
    []
  );

  function handleDetail(movie: Movie) {
    navigation.navigate("Detail", { movie });
  }

  return (
    <Container>
      <Header>
        <PosterHeader
          source={{
            uri: "https://www.themoviedb.org/t/p/w500/uAWB8qOs7L6zGTwxAbeT97AsJk6.jpg",
          }}
        />
        <TitleHeader>Fundação</TitleHeader>
        <ButtonHeader>
          <LabelButton>Detalhes</LabelButton>
        </ButtonHeader>
      </Header>

      <SectionTitle>Filmes em Alta</SectionTitle>
      <Section>
        <HorizontalList
          data={films}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderMovie}
        />
      </Section>

      <SectionTitle>Séries em Alta</SectionTitle>
      <Section>
        <HorizontalList
          data={series}
          keyExtractor={(item) => String(item.id)}
          renderItem={renderMovie}
        />
      </Section>
    </Container>
  );
}
