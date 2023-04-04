import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AddNewNote, HomeScreen, SearchNotes} from '../screens';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="HomeSrcreen" component={HomeScreen} />
      <HomeStack.Screen name="SearchNotes" component={SearchNotes} />
      <HomeStack.Screen name="AddNewNote" component={AddNewNote} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
