import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Barbershop from '~/components/Barbershop';

import { Container, Title, List } from './styles';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
  return (
    <Background>
      <Container>
        <Title>Barbearias</Title>

        <List
          data={data}
          keyExtractor={item => String(item)}
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
