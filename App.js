import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/redux-store';

import NavigationProvider from './navigation/index';

import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationProvider />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;