/* eslint-disable react/prop-types */
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  BarbershopAvatar,
  BarbershopInfo,
  BarbershopName,
  Address,
  Separator,
  Left,
  Avatar,
  Info,
  Name,
  Service,
  Price,
  Date,
  CancelButton,
} from './styles';

export default function Appointment({ data, onCancel }) {
  const dateFormatted = format(
    parseISO(data.date),
    "dd 'de' MMMM 'de' yyyy', às' HH':'mm",
    {
      locale: pt,
    }
  );

  console.tron.log(data);

  return (
    <Container isPast={data.past} isCanceled={data.canceled_at}>
      <Left>
        <BarbershopAvatar
          source={{
            uri: data.barbershop.avatar
              ? data.barbershop.avatar.url
              : `https://api.adorable.io/avatar/50/${data.barbershop.name}.png`,
          }}
        />
        <BarbershopInfo>
          <BarbershopName>{data.barbershop.name}</BarbershopName>
          <Address>{`${data.barbershop.address.street}, ${data.barbershop.address.number}`}</Address>
        </BarbershopInfo>
      </Left>

      <Separator />

      <Left>
        <Avatar
          source={{
            uri: data.barber.user.avatar
              ? data.barber.user.avatar.url
              : `https://api.adorable.io/avatar/50/${data.barber.user.name}.png`,
          }}
        />

        <Info>
          <Name>Barbeiro: {data.barber.user.name}</Name>
          <Service>Serviço: {data.service}</Service>
          <Price>R$: {data.price.toFixed(2)}</Price>
          <Date>{dateFormatted}</Date>
        </Info>
      </Left>

      {data.cancelable && !data.canceled_at && (
        <>
          <Separator />

          <CancelButton onPress={onCancel}>
            <Icon name="event-busy" size={30} color="#f22" />
          </CancelButton>
        </>
      )}
    </Container>
  );
}
