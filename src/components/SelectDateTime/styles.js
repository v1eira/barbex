import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView``;

export const Subtitle = styled.Text`
  margin: 25px 0 10px;
  font-size: 18px;
  color: #999;
`;

export const HourList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false
})`
  margin-top: 10px;
`;

export const Hour = styled(RectButton)`
  background: ${props => props.timeIsSelected === props.id ? "#333" : "#111"};
  border-radius: 4px;
  width: 100px;
  height: 60px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

export const EmptyList = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #666
`;
