/* eslint-disable react/prop-types */
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

export default function Barbershop({ data, navigation, previousPage = 'SelectBarbershop' }) {
  const barbershop = data;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('BarbershopDetails', { barbershop, previousPage })}
    >
      <Container>
        <Left>
          <Avatar
            source={{
              uri: data.avatar
                ? data.avatar.url
                : `https://api.adorable.io/avatar/50/${data.name}.png`,
            }}
          />

          <Info>
            <Name>{data.name}</Name>
            <Address>
              {`${data.address.street}, ${data.address.number}`}
            </Address>
          </Info>
        </Left>

        <Star>
          {data.grade ? (
            <>
              <Icon name="star" size={20} color="#ffbf00" />
              <Grade>{data.grade.toFixed(1)}</Grade>
            </>
          ) : (
            <>
              <Icon name="star-border" size={20} color="#ffbf00" />
              <Grade>{data.grade}</Grade>
            </>
          )}
        </Star>
      </Container>
    </TouchableOpacity>
  );
}
