import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProductDescription from '../screen/homeScreen/components/ProductDescription';
import HomeScreen from '../screen/homeScreen/HomeScreen';

const Stack = createStackNavigator();

const StackNavigator = () => (
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
        />
    </Stack.Navigator>
)

export default StackNavigator;