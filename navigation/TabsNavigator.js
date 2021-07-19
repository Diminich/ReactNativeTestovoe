import React from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screen/homeScreen/HomeScreen';
import HeartScreen from '../screen/heartScreen/HeartScreen';
import LoupeScreen from '../screen/loupeScreen/LoupeScreen';
import ShoppingCartScreen from '../screen/shoppingCartScreen/ShoppingCartScreen';
import { navigatorStyles } from './styles/navigatorStyles';

const Tab = createBottomTabNavigator();

const getIcon = (nameIcon) => ({
    tabBarLabel: () => { return null },
    tabBarIcon: ({ focused }) => (
      <View style={navigatorStyles.wrapperIcon}>
        <AntDesign name={nameIcon} size={35} color={focused ? '#317AE8' : '#939399'} />
      </View >
    )  
  })

const TabsNavigator = () => (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: '8%',
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }
      }}
    >
      <Tab.Screen name='home' component={HomeScreen} options={getIcon('home')} />
      <Tab.Screen name='heart' component={HeartScreen} options={getIcon('hearto')} />
      <Tab.Screen name='loupe' component={LoupeScreen} options={getIcon('search1')} />
      <Tab.Screen name='shoppingCart' component={ShoppingCartScreen} options={getIcon('shoppingcart')} />
    </Tab.Navigator>
  )

  export default TabsNavigator;