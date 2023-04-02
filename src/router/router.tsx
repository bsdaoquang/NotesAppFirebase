import {View, Text} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {HomeScreen, LoginScreen} from '../screens';

const router = () => {
  const [uid, setUid] = useState('');

  const user = auth().currentUser;

  return user ? <HomeScreen /> : <LoginScreen />;
};

export default router;
