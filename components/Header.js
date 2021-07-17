import React from 'react';
import { Text, View } from 'react-native';
import { headerStyles } from '../styles/headerStyles';

const Header = () => {
    return (
        <View style={headerStyles.wrapper}>
            <Text style={headerStyles.headerText}>Quadrojoy</Text>
            <View style={headerStyles.wrapperBurgerMenu}>
                <Text style={headerStyles.burgerMenuText}>───</Text>
                <Text style={headerStyles.burgerMenuText}>──</Text>
                <Text style={headerStyles.burgerMenuText}>─</Text>
            </View>
        </View>
    );
}

export default Header;