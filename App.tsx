import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Router from './src/router/router';
import {HomeScreen} from './src/screens';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <Router />
      </Provider>
    </SafeAreaView>
  );
}

export default App;
