import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Subtitle = styled.Text`
  margin: 70px 0 10px;
  font-size: 18px;
  color: #999;
`;

export const ServicesList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
`;

export const Service = styled(RectButton)`
  background: ${props => props.serviceIsSelected === props.id ? "#333" : "#111"};
  border-radius: 4px;
  padding: 15px;
  width: 100px;
  height: 100px;

  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-right: 10px;
`;

export const Name = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const Price = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #ff7b00;
  text-align: center;
`;
