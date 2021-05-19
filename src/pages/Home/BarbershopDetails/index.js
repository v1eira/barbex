/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { Container, ConfirmButton, ConfirmText } from './styles';

import Background from '~/components/Background';
import SelectService from '../../../components/SelectService';
import SelectBarber from '../../../components/SelectBarber';
import SelectDateTime from '../../../components/SelectDateTime';
import { ScrollView } from 'react-native-gesture-handler';

export default function BarbershopDetails({ navigation }) {
  const barbershop = navigation.getParam('barbershop');
  const [selectedService, setSelectedService] = useState({ id: -1 });
  const [selectedBarber, setSelectedBarber] = useState( { id: -1 } );
  const [selectedTime, setSelectedTime] = useState({ value: -1 });
  const [formComplete, setFormComplete] = useState(false);

  function handleConfirm() {
    if (barbershop.id !== -1 && selectedService.id !== -1 && selectedBarber.id !== -1 && selectedTime.value !== -1) {
      navigation.navigate('Confirm', {
        barbershop,
        service: selectedService,
        barber: selectedBarber,
        time: selectedTime,
      });
    }
  }

  useEffect(() => {
    if (barbershop.id !== -1 && selectedService.id !== -1 && selectedBarber.id !== -1 && selectedTime.value !== -1) {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }
  }, [barbershop, selectedService, selectedBarber, selectedTime]);

  return (
    <Background>
      <Container>
        <ScrollView>
          <SelectService
            barbershop={barbershop}
            selected={selectedService}
            setService={setSelectedService}
          />
          <SelectBarber
            barbershop={barbershop}
            selected={selectedBarber}
            setBarbershop={setSelectedBarber}
          />
          <SelectDateTime
            barbershop={barbershop}
            barber={selectedBarber}
            selected={selectedTime}
            setTime={setSelectedTime}
          />
          <ConfirmButton active={formComplete} onPress={() => handleConfirm()}>
            <ConfirmText>Agendar</ConfirmText>
          </ConfirmButton>
        </ScrollView>
      </Container>
    </Background>
  );
}

BarbershopDetails.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('barbershop').name,
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => { navigation.navigate(navigation.getParam('previousPage')) }}
    >
      <Icon name="chevron-left" size={30} color="#FFF" />
    </TouchableOpacity>
  ),
});
