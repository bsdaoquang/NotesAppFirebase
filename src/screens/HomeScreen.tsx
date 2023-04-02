import React, {useEffect} from 'react';
import {ContainerComponent, TextComponent} from '../components';
import database from '@react-native-firebase/database';
import {TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {addUser} from '../redux/reducers/userReducer';

const HomeScreen = () => {
  useEffect(() => {
    console.log('first');
    try {
      database()
        .ref('notes')
        .on('value', (snap: any) => {
          if (snap.val()) {
            snap.forEach((item: any) => {
              console.log(item.val());
            });
          } else {
            console.log('Can not connect to database');
          }
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const dispatch = useDispatch();

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        dispatch(
          addUser({
            uid: '',
            fcmtoken: '',
          }),
        );
      });
  };

  return (
    <ContainerComponent>
      <TextComponent text="HomeScreen" />
      <TouchableOpacity onPress={handleLogout}>
        <TextComponent text="Đăng xuất" />
      </TouchableOpacity>
    </ContainerComponent>
  );
};

export default HomeScreen;
