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
  const [emptyMessage, setEmptyMessage] = useState('Selecione um barbeiro.');

  const makeMessage = (hourList) => {
    if (hourList.length === 0) {
      setEmptyMessage('O barbeiro selecionado não atende nesta data.');
    } else if (hourList.filter(h => { return h.available }).length === 0) {
      setEmptyMessage('O barbeiro não possui horários disponíveis nesta data.');
    }

    if (barber.id < 0) {
      setEmptyMessage('Selecione um barbeiro.');
    }

    if (barber.id > 0 && hourList.length > 0 && hourList.filter(h => { return h.available }).length > 0) {
      setEmptyMessage('');
    }
  }

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
          makeMessage(response.data);
        } else {
          setHours([]);
          makeMessage([]);
        }
      } catch (error) {
        setHours([]);
        makeMessage([]);
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
      {(hours.length === 0 || barber.id < 0 || hours.filter(h => { return h.available }).length === 0) && (<EmptyList>{emptyMessage}</EmptyList>)}

    </Container>
  );
}
