import { FlatList } from "react-native";

import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import { Filme } from "../../model/Filme";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.background};
`;

export const PosterHeader = styled.Image`
  width: 500px;
  height: 250px;
  opacity: 0.7;
`;

export const TituloDestaque = styled.Text`
  color: #fff;
  font-size: 35px;
  text-align: center;
  text-transform: uppercase;
  top: -50px;
`;

export const BotaoDestaque = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 5px;
  width: 250px;
  padding: 8px;
  top: -40px;
`;

export const LabelBotao = styled.Text`
  color: ${({ theme }) => theme.color.text};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonte.regular};
`;

export const Header = styled.View`
  align-items: center;
`;

export const TituloSecao = styled.Text`
  color: #fff;
  font-size: 16px;
  border-color: ${({ theme }) => theme.color.primary};
  border-left-width: 5px;
  padding-left: 8px;
`;

export const SecaoFilmes = styled.View`
  margin-left: 16px;
`;

export const ListaHorizontal = styled(
  FlatList as new () => FlatList<Filme>
).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const CardFilme = styled(RectButton)`
  width: 100px;
  margin: 8px;
`;

export const Poster = styled.Image`
  height: 150px;
  border-radius: 5px;
`;

export const Avaliacao = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  flex-direction: row;
`;

export const Icon = styled(MaterialIcons)`
  color: gold;
  font-size: 24px;
`;

export const Nota = styled.Text`
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 18px;
  margin-left: 8px;
`;
