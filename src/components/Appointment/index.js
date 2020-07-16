/* eslint-disable react/prop-types */
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
  Container,
  First,
  Date,
  CancelButton,
  Canceled,
  Avatar,
  BarbershopName,
  Address,
  Separator,
  Section,
  Info,
  Name,
  Service,
  Price,
} from './styles';

export default function Appointment({ data, onCancel }) {
  const dateFormatted = format(
    parseISO(data.date),
    "dd 'de' MMMM 'de' yyyy', às' HH':'mm",
    {
      locale: pt,
    }
  );

  return (
    <Container isPast={data.past} isCanceled={data.canceled_at}>
      <First>
        <Date>{dateFormatted}</Date>
        {data.cancelable && !data.canceled_at && (
          <CancelButton onPress={onCancel}>
            <Icon name="event-busy" size={20} color="#f22" />
          </CancelButton>
        )}
        {data.canceled_at && (
          <Canceled>
            <Icon name="cancel" size={20} color="#f22" />
          </Canceled>
        )}
      </First>

      <Section>
        <Avatar
          source={{
            uri: data.barbershop.avatar
              ? data.barbershop.avatar.url
              : `https://api.adorable.io/avatar/50/${data.barbershop.name}.png`,
          }}
        />
        <Info>
          <BarbershopName>{data.barbershop.name}</BarbershopName>
          <Address>{`${data.barbershop.address.street}, ${data.barbershop.address.number}`}</Address>
        </Info>
      </Section>

      <Separator />

      <Section>
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
        </Info>
      </Section>
    </Container>
  );
}
