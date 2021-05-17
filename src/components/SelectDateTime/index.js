/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import DateInput from '~/components/DateInput';

import { Container, Subtitle, HourList, Hour, Title, EmptyList } from './styles';

export default function SelectDateTime({ barbershop, barber, selected, setTime }) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  useEffect(() => {
    async function loadAvailable() {
      try {
        if (barber.id !== -1) {
          const response = await api.get(
            `barbershops/${barbershop.id}/barbers/${barber.id}/available`,
            {
              params: {
                date: date.getTime(),
              },
            }
          );

          setHours(response.data);
        } else {
          setHours([]);
        }
      } catch (error) {
        setHours([]);
      }
    }

    loadAvailable();
  }, [barber.id, barbershop.id, date]);

  return (
    <Container>
      <Subtitle>Selecione o horário</Subtitle>
      <DateInput date={date} onChange={setDate} />

      <HourList
        horizontal
        data={hours}
        keyExtractor={item => item.time}
        renderItem={({ item }) => (
          item.available &&
          <Hour
            id={item.value}
            timeIsSelected={selected.value}
            onPress={() => setTime(selected.value === item.value ? { value: -1 } : item)}
            enabled={item.available}
          >
            <Title>{item.time}</Title>
          </Hour>
        )}
      />
      {hours.length === 0 && (<EmptyList>O barbeiro selecionado não possui horário disponível para esta data.</EmptyList>)}

    </Container>
  );
}
