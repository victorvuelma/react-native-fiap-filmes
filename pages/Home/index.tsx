import React, { useEffect, useState } from "react";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import axios from "axios";

import { Filme } from "../../model/Filme";

import {
  Container,
  Header,
  PosterHeader,
  TituloDestaque,
  BotaoDestaque,
  LabelBotao,
  TituloSecao,
  SecaoFilmes,
  CardFilme,
  Poster,
  Avaliacao,
  Icon,
  Nota,
  ListaHorizontal,
} from "./style";

interface NavigationProps {
  navigation: NativeStackNavigationProp<any>;
}

interface Response {
  results: Filme[];
}

export default function Home({ navigation }: NavigationProps) {
  const [filmes, setFilmes] = useState<Filme[]>([]);

  useEffect(() => {
    async function carregarDados() {
      const resposta = await axios.get<Response>(
        "https://api.themoviedb.org/3/trending/tv/week?api_key=1e922667481ab207d642450b0efb461e"
      );
      setFilmes(resposta.data.results);
    }
    carregarDados();
  });

  function handleDetail(filme: Filme) {
    navigation.navigate("Details", { filme });
  }

  return (
    <Container>
      <Header>
        <PosterHeader
          source={{
            uri: "https://www.themoviedb.org/t/p/w500/uAWB8qOs7L6zGTwxAbeT97AsJk6.jpg",
          }}
        />
        <TituloDestaque>Fundação</TituloDestaque>
        <BotaoDestaque>
          <LabelBotao>detalhes</LabelBotao>
        </BotaoDestaque>
      </Header>

      <TituloSecao>Filmes em Alta</TituloSecao>

      <SecaoFilmes>
        <ListaHorizontal
          data={filmes}
          renderItem={({ item }) => (
            <CardFilme onPress={() => handleDetail(item)}>
              <Poster
                source={{
                  uri: "https://image.tmdb.org/t/p/w200/" + item.poster_path,
                }}
              />
              <Avaliacao>
                <Icon name="star" />
                <Nota>{item.vote_average}</Nota>
              </Avaliacao>
            </CardFilme>
          )}
        />
      </SecaoFilmes>
    </Container>
  );
}
