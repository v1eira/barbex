/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { withNavigationFocus } from 'react-navigation';
import api from '~/services/api';

import Background from '~/components/Background';
import Barbershop from '~/components/Barbershop';

import { Container, Title, List } from './styles';

function SelectBarbershop({ isFocused, navigation }) {
  const [barbershops, setBarbershops] = useState([]);

  async function loadBarbershops() {
    const response = await api.get('barbershops');

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
        <Title>Barbearias</Title>

        <List
          data={barbershops}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Barbershop data={item} navigation={navigation} />
          )}
        />
      </Container>
    </Background>
  );
}

export default withNavigationFocus(SelectBarbershop);
