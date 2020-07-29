import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 15 },
})``;

export const Empty = styled.Text`
  font-size: 16px;
  color: #999;
  align-self: center;
  margin: 30px auto;
  text-align: center;
  line-height: 25;
`;
