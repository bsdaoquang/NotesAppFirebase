import {View, Text, TextInput, Touchable, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  ContainerComponent,
  InputComponent,
  TextComponent,
} from '../../components';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginWithEmail = () => {
    console.log(email);
  };

  return (
    <ContainerComponent isScroll>
      <InputComponent
        value={email}
        placeholder="Email"
        type="email-address"
        onChange={val => setEmail(val)}
      />

      <TouchableOpacity onPress={handleLoginWithEmail}>
        <TextComponent text="Login" />
      </TouchableOpacity>
    </ContainerComponent>
  );
};

export default LoginScreen;
