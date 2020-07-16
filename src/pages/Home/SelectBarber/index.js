/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { Container, BarbersList, Barber, Avatar, Name } from './styles';

import Background from '~/components/Background';

export default function SelectBarber({ navigation }) {
  const barbershop = navigation.getParam('barbershop');
  const service = navigation.getParam('service');

  const [barbers, setBarbers] = useState([]);

  useEffect(() => {
    async function loadBarbers() {
      const response = await api.get(`barbershops/${barbershop.id}/barbers`);

      setBarbers(response.data);
    }

    loadBarbers();
  }, [barbershop.id]);

  return (
    <Background>
      <Container>
        <BarbersList
          data={barbers}
          keyExtractor={barber => String(barber.user.id)}
          renderItem={({ item: barber }) => (
            <Barber
              onPress={() =>
                navigation.navigate('SelectDateTime', {
                  barbershop,
                  service,
                  barber,
                })
              }
            >
              <Avatar
                source={{
                  uri: barber.user.avatar
                    ? barber.user.avatar.url
                    : `https://api.adorable.io/avatar/50/${barber.user.name}.png`,
                }}
              />
              <Name>{barber.user.name}</Name>
            </Barber>
          )}
        />
      </Container>
    </Background>
  );
}

SelectBarber.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o barbeiro',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('SelectService');
      }}
    >
      <Icon name="chevron-left" size={30} color="#FFF" />
    </TouchableOpacity>
  ),
});
