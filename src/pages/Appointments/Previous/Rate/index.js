/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';

import { Container, Grade, LabelText, Comment, SubmitButton } from './styles';

export default function Rate({ navigation }) {
  const appointmentId = navigation.getParam('appointmentId');

  const [comment, setComment] = useState('');
  const [grade, setGrade] = useState(1);
  const [isFocused, setIsFocused] = useState(false);

  function RatingGrade() {
    const arr = [...Array(5).keys()];
    return arr.map(i => {
      return i <= parseInt(grade) - 1 ? (
        <TouchableOpacity onPress={() => setGrade(i + 1)}>
          <Icon name="star" key={i} size={30} color="#ffbf00" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setGrade(i + 1)}>
          <Icon name="star-border" key={i} size={30} color="#ffbf00" />
        </TouchableOpacity>
      );
    });
  }

  async function handleSubmit() {
    await api.post('ratings', {
      appointment_id: appointmentId,
      grade,
      comment,
    });

    Alert.alert(
      'Atendimento avaliado com sucesso!',
      'Obrigado por avaliar o atendimento de nossos parceiros.',
      [
        {
          text: 'Voltar',
          onPress: () => navigation.navigate('Past'),
        },
      ]
    );
  }

  return (
    <Background>
      <Container>
        <Grade>
          <RatingGrade />
        </Grade>
        <LabelText>Quer deixar um comentário?</LabelText>
        <Comment
          multiline
          numberOfLines={5}
          onChangeText={text => {
            setComment(text);
          }}
          value={comment}
          focus={isFocused}
          onFocus={() => setIsFocused(!isFocused)}
          onBlur={() => setIsFocused(!isFocused)}
        />
        <SubmitButton onPress={handleSubmit}>Avaliar</SubmitButton>
      </Container>
    </Background>
  );
}

Rate.navigationOptions = ({ navigation }) => ({
  title: 'Avaliação do atendimento',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Past');
      }}
    >
      <Icon name="chevron-left" size={30} color="#FFF" />
    </TouchableOpacity>
  ),
});
