import React from 'react';
import { Text, View } from 'react-native';
import { headerStyles } from '../styles/headerStyles';
import { FontAwesome } from '@expo/vector-icons'; 

const Header = () => {
    return (
        <View style={headerStyles.wrapper}>
            <Text style={headerStyles.headerText}>Quadrojoy</Text>
            <FontAwesome name="list-ol" size={24} color="black" style={{marginRight: 20}}/>
        </View>
    );
}

export default Header;