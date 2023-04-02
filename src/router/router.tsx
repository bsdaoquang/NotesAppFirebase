import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {HomeScreen, LoginScreen, SigninScreen} from '../screens';

const router = () => {
  const [uid, setUid] = useState('');

  const user = auth().currentUser;

  return user ? <HomeScreen /> : <LoginScreen />;
};

export default router;
