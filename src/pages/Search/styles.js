import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
`;

export const SearchBar = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 30px 15px 0;
  border-radius: 6px;
  background: ${props => (props.focus ? '#222' : '#111')};
  justify-content: space-between;
`;

export const SearchField = styled.TextInput`
  flex: 1;
  padding: 12px;
  border-radius: 6px;
  font-size: 14px;
  color: #fff;
`;

export const EraseButton = styled.TouchableOpacity`
  width: 45px;
  padding: 12px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 15 },
})``;

export const EmptyText = styled.Text`
  font-size: 18px;
  color: #666;
  position: absolute;
  top: 50%;

  align-self: center;
`;
