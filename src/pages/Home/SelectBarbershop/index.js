/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import api from '~/services/api';

import Background from '~/components/Background';
import Barbershop from '~/components/Barbershop';

import { Container, Title, List } from './styles';

export default function Home({ navigation }) {
  const [barbershops, setBarbershops] = useState([]);

  useEffect(() => {
    async function loadBarbershops() {
      const response = await api.get('barbershops');

      setBarbershops(response.data);
    }

    loadBarbershops();
  }, []);

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
