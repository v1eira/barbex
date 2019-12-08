import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: #111;

  display: flex;
  flex-direction: column;
`;

export const Center = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const BarbershopAvatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const BarbershopInfo = styled.View`
  margin-left: 15px;
`;

export const BarbershopName = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #fff;
`;

export const Separator = styled.View`
  height: 1px;
  background: #ff7b00;
  margin: 10px;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
`;

export const Address = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 4px;
`;

export const Service = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
`;

export const Date = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #ff7b00;
  margin-top: 10px;
`;
