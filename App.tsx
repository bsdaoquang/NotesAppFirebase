import React from 'react';
import {SafeAreaView} from 'react-native';
import {HomeScreen} from './src/screens';
import {globalStyle} from './src/styles/global';
import Router from './src/router/router';

function App(): JSX.Element {
  return (
    <SafeAreaView style={[globalStyle.container]}>
      <Router />
    </SafeAreaView>
  );
}

export default App;
