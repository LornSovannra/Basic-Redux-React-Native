import React from 'react';
import {View, Text} from 'react-native';
import Home from './src/components/home/index';
import {Provider} from 'react-redux';
import {store} from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
