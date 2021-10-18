import styled from "styled-components/native";

import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View``;

export const PosterHeader = styled.Image`
  width: 500px;
  height: 250px;
  opacity: 0.7;
`;

export const TituloDestaque = styled.Text`
  color: #fff;
  font-size: 35px;
`;

export const BotaoDestaque = styled.Button``;

export const LabelBotao = styled.Text``;

export const Header = styled.View``;

export const TituloSecao = styled.Text``;

export const SecaoFilmes = styled.View`
  margin-left: 16px;
`;

export const ListaHorizontal = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const CardFilme = styled.View`
  width: 100px;
  margin: 8px;
`;

export const Poster = styled.Image`
  height: 150px;
  border-radius: 5px;
`;

export const Avaliacao = styled.Text`
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
`;

export const Icon = styled(MaterialIcons)``;

export const Nota = styled.Text``;
