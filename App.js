import React from 'react';
import { View } from 'react-native';
import BottomPanel from './components/BottomPanel';
import Header from './components/Header';
import ButtonsProducts from './components/ButtonsProducts';
import ViewProducts from './components/ViewProducts';
import Footer from './components/Footer';

import { appStyles } from './styles/appStyles';

import { Provider } from 'react-redux';
import store from './redux/redux-store';


const App = () => {
  return (
    <Provider store={store}>
      <View style={appStyles.wrapper}>
        <Header />
        <BottomPanel />
        <ButtonsProducts />
        <ViewProducts />
        <Footer />
      </View>
    </Provider>
  );
}

export default App;