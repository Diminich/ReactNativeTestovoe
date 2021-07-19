import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/redux-store';

import NavigationProvider from './navigation/index'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationProvider />
    </Provider>
  );
}

export default App;