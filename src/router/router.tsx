import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AuthNavigator from '../navigations/AuthNavigator';
import HomeNavigator from '../navigations/HomeNavigator';
import {addUser, userSelector} from '../redux/reducers/userReducer';

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
  return (
    <NavigationContainer>
      {userData.uid ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Router;
