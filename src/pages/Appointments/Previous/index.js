/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';

import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import { Container, List, Empty } from '../styles';

function Previous({ navigation, isFocused }) {
  const [appointments, setAppointments] = useState([]);

  async function loadAppointments() {
    const response = await api.get('appointments',
    {
      params: {
        page: 1,
        filter: 'past'
      }
    });

    setAppointments(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadAppointments();
    }
  }, [isFocused]);

  return (
    <Background>
      <Container>
        {appointments.length > 0
        ? (
          <List
            data={appointments}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Appointment data={item} navigation={navigation} />
            )}
          />
        )
        : (
          <Empty>Você ainda não fez um agendamento{"\n"}:(</Empty>
        )
        }
      </Container>
    </Background>
  );
}

Previous.navigationOptions = {
  tabBarLabel: 'Anteriores',
};

export default withNavigationFocus(Previous);
