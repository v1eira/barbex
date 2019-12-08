import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ServicesList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 60px;
  padding: 0 20px;
`;

export const Service = styled(RectButton)`
  background: #111;
  border-radius: 4px;
  padding: 15px;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  margin: 0 10px 20px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const Price = styled.Text`
  margin-left: 20px;
  font-size: 16px;
  color: #ff7b00;
  text-align: center;
`;
