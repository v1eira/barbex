import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 12px;
  border-radius: 4px;
  background: #222;
  opacity: ${props => (props.isCanceled ? 0.7 : 1)};

  display: flex;
  flex-direction: column;
`;

export const First = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Date = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #ff7b00;
`;

export const CancelButton = styled(RectButton)`
  background: transparent;
  align-self: center;
  align-items: center;
`;

export const Canceled = styled.View`
  align-self: center;
  align-items: center;
  flex-direction: row;
`;

export const Section = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Info = styled.View`
  margin-left: 15px;
  width: 200px;
`;

export const BarbershopName = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #fff;
`;

export const Separator = styled.View`
  height: 1px;
  background: #ff7b00;
  margin: 12px 0;
  align-self: center;
  width: 90%;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
`;

export const Address = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 2px;
`;

export const Service = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #ff7b00;
  margin-top: 5px;
`;

export const Rate = styled.View`
  display: flex;
  flex-direction: row;
  align-self: center;
  margin-top: 15px;
`;

export const RateText = styled.Text`
  font-size: 14px;
  color: #ff7b00;
  margin-top: 10px;
  font-weight: normal;
`;
