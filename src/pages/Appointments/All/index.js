/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import { Container, List } from '../styles';

function All({ navigation, isFocused }) {
  const [appointments, setAppointments] = useState([]);

  async function loadAppointments() {
    const response = await api.get('appointments');

    setAppointments(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadAppointments();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map(appointment =>
        appointment.id === id
          ? {
              ...appointment,
              canceled_at: new Date(),
            }
          : appointment
      )
    );
  }

  function showAlert(id) {
    Alert.alert(
      'Cancelar agendamento',
      'Tem certeza que deseja cancelar este agendamento?\n\nEsta ação não pode ser revertida',
      [
        {
          text: 'Não',
        },
        {
          text: 'Sim',
          onPress: () => handleCancel(id),
          style: 'cancel',
        },
      ]
    );
  }

  return (
    <Background>
      <Container>
        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment
              onCancel={() => showAlert(item.id)}
              data={item}
              navigation={navigation}
            />
          )}
        />
      </Container>
    </Background>
  );
}

All.navigationOptions = {
  tabBarLabel: 'Todos',
};

export default withNavigationFocus(All);
