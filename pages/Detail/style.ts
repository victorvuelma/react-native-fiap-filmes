import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.background};
`;

export const Poster = styled.Image`
  width: 480px;
  height: 300px;
  opacity: 0.8;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 28px;
  text-align: center;
  font-weight: 700;
  margin: 16px 0;
`;

export const RatingBox = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const RatingIcon = styled(MaterialIcons)`
  color: gold;
  font-size: 24px;
`;

export const RatingText = styled.Text`
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
  margin-left: 4px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.color.text};
  font-size: 20px;
  margin: 8px 16px;
`;

export const ReleaseDate = styled.Text`
  color: ${({ theme }) => theme.color.text};
  font-size: 16px;
  margin: 8px 16px;
`;

export const BackButton = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 8px;
  padding: 8px 32px;
  margin: 32px 16px;
`;

export const LabelButton = styled.Text`
  color: ${({ theme }) => theme.color.text};
  font-size: 18px;
  font-family: ${({ theme }) => theme.font.regular};
`;
