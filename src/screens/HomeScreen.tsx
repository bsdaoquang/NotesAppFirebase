import React, {useEffect} from 'react';
import {ContainerComponent, TextComponent} from '../components';
import database from '@react-native-firebase/database';

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

  return (
    <ContainerComponent>
      <TextComponent text="HomeScreen" />
    </ContainerComponent>
  );
};

export default HomeScreen;
