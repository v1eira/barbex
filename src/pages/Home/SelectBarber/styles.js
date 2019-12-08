import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const BarbersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 60px;
  padding: 0 20px;
`;

export const Barber = styled(RectButton)`
  background: #111;
  border-radius: 4px;
  padding: 15px;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;

  align-items: center;
  margin: 0 10px 20px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Name = styled.Text`
  margin-left: 20px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;
