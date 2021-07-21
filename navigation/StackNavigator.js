import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons'; 

import ProductDescription from '../screen/homeScreen/components/ProductDescription';
import HomeScreen from '../screen/homeScreen/HomeScreen';
import { Text } from 'react-native';

const Stack = createStackNavigator();

const StackNavigator = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen
            name='Quadrojoy'
            component={HomeScreen}
        />
        <Stack.Screen
            name='ProductDescription'
            component={ProductDescription}
            initialParams={{
                item: null
              }}
              options={{
                headerLeft: () => (
                    <AntDesign name="left" size={24} color="black" onPress={() => navigation.goBack()}/>
                ),
                headerTitle: '',
                headerStyle: {
                    backgroundColor: '#F8F8F8',
                    shadowColor: 'transparent',
                    elevation: 0
                },
                headerLeftContainerStyle: {marginLeft: '4%'}
              }}
        />
    </Stack.Navigator>
)

export default StackNavigator;