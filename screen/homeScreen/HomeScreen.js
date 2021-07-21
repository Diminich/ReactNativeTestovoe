import React, { useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import BottomPanel from './components/BottomPanel';
import ButtonsProducts from './components/ButtonsProducts';
import ViewProducts from './components/ViewProducts';

import { homeStyles } from './styles/homeStyles';

const HomeScreen = ({navigation}) => {
  const products = useSelector(state => state.quadcopterPage.products);
  const [sortProducts, setSortProducts] = useState(products)
  return (
    <View style={homeStyles.wrapper}>
      <BottomPanel />
      <ButtonsProducts setSortProducts={setSortProducts} />
      <ViewProducts navigation={navigation} sortProducts={sortProducts} />
    </View>
  );
}

export default HomeScreen;