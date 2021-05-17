/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { Subtitle, ServicesList, Service, Name, Price } from './styles';

export default function SelectService({ barbershop, selected, setService }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function loadServices() {
      const response = await api.get(`barbershops/${barbershop.id}/services`);
      setServices(response.data);
    }

    loadServices();
  }, [barbershop.id]);

  return (
    <>
      <Subtitle>Selecione o serviço</Subtitle>
      <ServicesList
        horizontal
        data={services}
        keyExtractor={service => String(service.id)}
        renderItem={({ item: service }) => (
          <Service
            serviceIsSelected={selected.id}
            id={service.id}
            onPress={() => setService(selected.id === service.id ? { id: -1 } : service)}
          >
            <Name>{service.Service.name}</Name>
            <Price>R$: {service.price.toFixed(2)}</Price>
          </Service>
        )}
      />
    </>
  );
}
