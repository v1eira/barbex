/* eslint-disable react/prop-types */
import React from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  Center,
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
} from './styles';

export default function Appointment({ data }) {
  console.tron.log(data);

  const dateFormatted = format(parseISO(data.date), "dd 'de' MMMM 'de' yyyy", {
    locale: pt,
  });

  return (
    <Container>
      <Center>
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
      </Center>

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
    </Container>
  );
}
