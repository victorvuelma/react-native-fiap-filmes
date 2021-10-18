import axios from "axios";
import React, { useEffect } from "react";

import {
  Avaliacao,
  BotaoDestaque,
  CardFilme,
  Container,
  Header,
  Icon,
  ListaHorizontal,
  Nota,
  Poster,
  PosterHeader,
  SecaoFilmes,
  TituloDestaque,
  TituloSecao,
} from "./style";

const dados = [
  {
    id: 1,
    poster:
      "https://www.themoviedb.org/t/p/original/iLyyWblY58WUMmPkCau89hLq6uK.jpg",
    nota: "8.7",
  },
  {
    id: 2,
    poster:
      "https://www.themoviedb.org/t/p/w200/6IxMW3939dOCjzenwzkWEjgICVq.jpg",
    nota: "9.8",
  },
  {
    id: 3,
    poster:
      "https://www.themoviedb.org/t/p/w200/pDvLg7Sii89Sp35aNPZ9BqTV5iK.jpg",
    nota: "7.7",
  },
  {
    id: 4,
    poster:
      "https://www.themoviedb.org/t/p/w200/Ao1sxO43OIViBWJYxFSLykquE8l.jpg",
    nota: "5.5",
  },
  {
    id: 5,
    poster:
      "https://www.themoviedb.org/t/p/w200/kU0NbsUVoUMcYxoISmBCxFmgWYC.jpg",
    nota: "9.6",
  },
];

export default function Home() {
  // Buscar os filmes da API
  useEffect(() => {
    async function carregarFilmes() {
      const resposta = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e"
      );
      console.log(resposta);
    }
    carregarFilmes();
  });

  return (
    <Container>
      <Header>
        <PosterHeader
          source={{
            uri: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg",
          }}
        ></PosterHeader>
        <TituloDestaque>Fundação</TituloDestaque>
        <BotaoDestaque title={"Destaque"} onPress={() => {}}></BotaoDestaque>
      </Header>

      <TituloSecao>Filmes em Alta</TituloSecao>

      <SecaoFilmes>
        <ListaHorizontal
          data={dados}
          renderItem={({ item }) => (
            <CardFilme>
              <Poster
                source={{
                  uri: item.poster,
                }}
              ></Poster>

              <Avaliacao>
                <Icon name="star"></Icon>
                <Nota>{item.nota}</Nota>
              </Avaliacao>
            </CardFilme>
          )}
        />
      </SecaoFilmes>
    </Container>
  );
}
