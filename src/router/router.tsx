import auth from '@react-native-firebase/auth';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addUser, userSelector} from '../redux/reducers/userReducer';
import {HomeScreen, LoginScreen} from '../screens';

const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = auth().currentUser;

    if (user) {
      dispatch(
        addUser({
          uid: user.uid,
          fcmtoken: '',
        }),
      );
    }
  }, []);

  const userData = useSelector(userSelector);
  return userData.uid ? <HomeScreen /> : <LoginScreen />;
};

export default Router;
