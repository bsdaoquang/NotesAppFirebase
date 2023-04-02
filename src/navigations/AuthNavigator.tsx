import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, SigninScreen} from '../screens';

const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="SignUp" component={SigninScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
