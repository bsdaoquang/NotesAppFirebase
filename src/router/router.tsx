import auth from '@react-native-firebase/auth';
import React, {useState} from 'react';
import {HomeScreen, SigninScreen} from '../screens';

const router = () => {
  const [uid, setUid] = useState('');

  const user = auth().currentUser;

  return user ? <HomeScreen /> : <SigninScreen />;
};

export default router;
