import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import Background from '~/components/Background';
import Barbershop from '~/components/Barbershop';

import { Container, Title, List } from './styles';

export default function Home() {
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
          renderItem={({ item }) => <Barbershop data={item} />}
        />
      </Container>
    </Background>
  );
}

Home.navigationOptions = {
  tabBarLabel: 'Início',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="home" size={20} color={tintColor} />
  ),
};
