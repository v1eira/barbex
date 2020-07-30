import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  margin-top: 70px;
  align-items: center;
`;

export const Grade = styled.View`
  width: 100%;
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LabelText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  align-self: flex-start;
`;

export const Comment = styled.TextInput`
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  border-radius: 4px;
  background: #111;
  font-size: 14px;
  color: #999;
`;

export const SubmitButton = styled(Button)`
  align-self: stretch;
  margin-top: 20px;
`;
