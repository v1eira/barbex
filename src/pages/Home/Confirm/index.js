/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';

import { Container, Avatar, Name, Time, SubmitButton } from './styles';

export default function Confirm({ navigation }) {
  const barbershop = navigation.getParam('barbershop');
  const service = navigation.getParam('service');
  const barber = navigation.getParam('barber');
  const time = navigation.getParam('time');

  const dateFormatted = useMemo(
    () => formatRelative(parseISO(time.value), new Date(), { locale: pt }),
    [time.value]
  );

  async function handleAddAppointment() {
    await api.post('appointments', {
      barber_id: barber.id,
      barbershop_service_id: service.id,
      barbershop_id: barbershop.id,
      date: time.value,
    });

    navigation.navigate('SelectBarbershop');
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: barber.user.avatar
              ? barber.user.avatar.url
              : `https://pbs.twimg.com/profile_images/1236710786061524994/JcWN0IOE_400x400.jpg`,
          }}
        />

        <Name>{barber.user.name}</Name>

        <Time>{dateFormatted}</Time>

        <SubmitButton onPress={() => handleAddAppointment()}>Confirmar</SubmitButton>
      </Container>
    </Background>
  );
}

Confirm.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar agendamento',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('BarbershopDetails');
      }}
    >
      <Icon name="chevron-left" size={30} color="#FFF" />
    </TouchableOpacity>
  ),
});
