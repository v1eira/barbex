import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Left,
  Avatar,
  Info,
  Name,
  Address,
  Star,
  Grade,
} from './styles';

export default function Barbershop() {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Container>
        <Left>
          <Avatar
            source={{ uri: 'https://api.adorable.io/avatar/50/barbex.png' }}
          />

          <Info>
            <Name>Maltadas Barbershop</Name>
            <Address>Avenida São Paulo, 2202</Address>
          </Info>
        </Left>

        <Star>
          <Icon name="star" size={20} color="#ffbf00" />
          <Grade>4,7</Grade>
        </Star>
      </Container>
    </TouchableOpacity>
  );
}
