import { FlatList } from "react-native";

import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import { Film } from "../../model/Filme";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.background};
`;

export const PosterHeader = styled.Image`
  width: 500px;
  height: 250px;
  opacity: 0.7;
`;

export const TitleHeader = styled.Text`
  color: #fff;
  font-size: 36px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 4px;
  top: -50px;
`;

export const ButtonHeader = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 5px;
  padding: 8px 32px;
  top: -40px;
`;

export const LabelButton = styled.Text`
  color: ${({ theme }) => theme.color.text};
  font-size: 18px;
  font-family: ${({ theme }) => theme.font.regular};
`;

export const Header = styled.View`
  align-items: center;
`;

export const SectionTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  border-color: ${({ theme }) => theme.color.primary};
  border-left-width: 4px;
  padding-left: 8px;
  margin-left: 8px;
`;

export const Section = styled.View`
  margin-top: 4px;
  margin-bottom: 24px;
`;

export const HorizontalList = styled(
  FlatList as new () => FlatList<Film>
).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const CardFilm = styled(RectButton)`
  width: 100px;
  margin: 8px;
`;

export const Poster = styled.Image`
  height: 150px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const FilmRating = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 2px;
`;

export const RatingIcon = styled(MaterialIcons)`
  color: gold;
  font-size: 16px;
`;

export const Rating = styled.Text`
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 18px;
  margin-left: 4px;
`;
