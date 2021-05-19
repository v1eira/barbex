import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-left: 20px;
  padding-right: 10px;

  flex-direction: column;
`;

export const ConfirmButton = styled(RectButton)`
  margin-top: 20px;
  background: ${props => (props.active ? '#ff7b00' : '#B35600')};;
  height: 50px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ConfirmText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;
