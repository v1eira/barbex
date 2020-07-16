/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { Container, ServicesList, Service, Name, Price } from './styles';

import Background from '~/components/Background';

export default function SelectService({ navigation }) {
  const barbershop = navigation.getParam('barbershop');

  const [services, setServices] = useState([]);

  useEffect(() => {
    async function loadServices() {
      const response = await api.get(`barbershops/${barbershop.id}/services`);

      setServices(response.data);
    }

    loadServices();
  }, [barbershop.id]);

  return (
    <Background>
      <Container>
        <ServicesList
          data={services}
          keyExtractor={service => String(service.id)}
          renderItem={({ item: service }) => (
            <Service
              onPress={() =>
                navigation.navigate('SelectBarber', { barbershop, service })
              }
            >
              <Name>{service.Service.name}</Name>
              <Price>R$: {service.price.toFixed(2)}</Price>
            </Service>
          )}
        />
      </Container>
    </Background>
  );
}

SelectService.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o serviço',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('SelectBarbershop');
      }}
    >
      <Icon name="chevron-left" size={30} color="#FFF" />
    </TouchableOpacity>
  ),
});
