/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import { Container, HourList, Hour, Title } from './styles';

export default function SelectDateTime({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const barbershop = navigation.getParam('barbershop');
  const service = navigation.getParam('service');
  const barber = navigation.getParam('barber');

  useEffect(() => {
    async function loadAvailable() {
      try {
        const response = await api.get(
          `barbershops/${barbershop.id}/barbers/${barber.id}/available`,
          {
            params: {
              date: date.getTime(),
            },
          }
        );

        setHours(response.data);
      } catch (error) {
        setHours([]);
      }
    }

    loadAvailable();
  }, [barber.id, barbershop.id, date]);

  function handleSelectHour(time) {
    navigation.navigate('Confirm', {
      barbershop,
      service,
      barber,
      time,
    });
  }

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />

        <HourList
          data={hours}
          keyExtractor={item => item.time}
          renderItem={({ item }) => (
            <Hour
              onPress={() => handleSelectHour(item.value)}
              enabled={item.available}
            >
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o horário',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('SelectBarber');
      }}
    >
      <Icon name="chevron-left" size={30} color="#FFF" />
    </TouchableOpacity>
  ),
});
