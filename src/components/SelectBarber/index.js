/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { Subtitle, BarbersList, Barber, Avatar, Name } from './styles';

export default function SelectBarber({ barbershop, selected, setBarbershop }) {
  const [barbers, setBarbers] = useState([]);

  useEffect(() => {
    async function loadBarbers() {
      const response = await api.get(`barbershops/${barbershop.id}/barbers`);
      setBarbers(response.data);
    }

    loadBarbers();
  }, [barbershop.id]);

  return (
    <>
    <Subtitle>Selecione o barbeiro</Subtitle>
    <BarbersList
      horizontal
      data={barbers}
      keyExtractor={barber => String(barber.id)}
      renderItem={({ item: barber }) => (
        <Barber
          barberIsSelected={selected.id}
          id={barber.id}
          onPress={() => setBarbershop(selected.id === barber.id ? { id: -1 } : barber)}
        >
          <Avatar
            source={{
              uri: barber.user.avatar
                ? barber.user.avatar.url
                : `https://pbs.twimg.com/profile_images/1236710786061524994/JcWN0IOE_400x400.jpg`,
            }}
          />
          <Name>{barber.user.name}</Name>
        </Barber>
      )}
    />
    </>
  );
}
