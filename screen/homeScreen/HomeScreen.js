import React from 'react';
import { View } from 'react-native';
import BottomPanel from './components/BottomPanel';
import ButtonsProducts from './components/ButtonsProducts';
import Header from './components/Header';
import ViewProducts from './components/ViewProducts';

import { homeStyles } from './styles/homeStyles';

const HomeScreen = ({ navigation, route }) => {
    return (
        <View style={homeStyles.wrapper}>
          {/* <Header /> */}
          <BottomPanel />
          <ButtonsProducts />
          <ViewProducts navigation={navigation} />
        </View>
    );
  }
  
  export default HomeScreen;