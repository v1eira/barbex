/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { withNavigationFocus } from 'react-navigation';
import api from '~/services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Barbershop from '~/components/Barbershop';

import { Container, SearchBar, SearchField, EraseButton, List, EmptyText } from './styles';
import { Alert } from 'react-native';

function Search({ isFocused, navigation }) {
  const [barbershops, setBarbershops] = useState([]);
  const [searchParam, setSearchParam] = useState('');
  const [inputIsFocused, setInputIsFocused] = useState(false);

  function search(text) {
    setSearchParam(text);
    if (text.length > 2) {
      loadBarbershops(text);
    }

    if (text === '') {
      setBarbershops([]);
    }
  }

  function cleanSearchParam() {
    setSearchParam('');
    setBarbershops([]);
  }

  async function loadBarbershops(text) {
    let response = { data: [] };
    if (text.length > 2) {
      response = await api.get('barbershops', {
        params: {
          page: 1,
          search: text
        }
      });
    }

    setBarbershops(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadBarbershops();
    }
  }, [isFocused]);

  return (
    <Background>
      <Container>
        <SearchBar focus={inputIsFocused}>
          <SearchField
            onChangeText={text => search(text)}
            value={searchParam}
            onFocus={() => setInputIsFocused(!inputIsFocused)}
            onBlur={() => setInputIsFocused(!inputIsFocused)}
            autoCorrect={true}
            placeholder="Pesquisar"
            placeholderTextColor="#777"
          />
          {searchParam.length !== 0 && (
            <EraseButton onPress={() => cleanSearchParam()}>
              <Icon name="close" size={20} color="#ff7b00" />
            </EraseButton>
          )}
        </SearchBar>

        <List
          data={barbershops}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Barbershop data={item} navigation={navigation} previousPage={navigation.state.routeName} />
          )}
        />

        {barbershops.length === 0 && searchParam.length > 2 && <EmptyText>Nenhuma barbearia encontrada</EmptyText>}
      </Container>
    </Background>
  );
}

export default withNavigationFocus(Search);
