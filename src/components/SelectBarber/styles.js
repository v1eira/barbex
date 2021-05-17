import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Subtitle = styled.Text`
  margin: 25px 0 10px;
  font-size: 18px;
  color: #999;
`;

export const BarbersList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})``;

export const Barber = styled(RectButton)`
  background: ${props => props.barberIsSelected === props.id ? "#333" : "#111"};
  border-radius: 4px;
  padding: 15px 0 15px 15px;
  width: 210px;
  flex-direction: row;
  justify-content: flex-start;

  align-items: center;
  margin-right: 10px;
`;

export const Avatar = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 25px;
`;

export const Name = styled.Text`
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
