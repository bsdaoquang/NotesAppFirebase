import React from 'react';
import {SafeAreaView} from 'react-native';
import {HomeScreen} from './src/screens';
import {globalStyle} from './src/styles/global';

function App(): JSX.Element {
  return (
    <SafeAreaView style={[globalStyle.container]}>
      <HomeScreen />
    </SafeAreaView>
  );
}

export default App;
