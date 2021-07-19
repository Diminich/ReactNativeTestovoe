import React from 'react';
import { Text, View, Image } from 'react-native';
import { bottomPanelStyles } from '../styles/bottomPanelStyles';

const BottomPanel = () => {
    return (
        <View style={bottomPanelStyles.wrapper}>
            <Image style={bottomPanelStyles.img} source={require('./../../../imgs/1.png')} />
            <View style={bottomPanelStyles.wrapperDescriptionText}>
                <Text style={bottomPanelStyles.headingText}>Need for speed</Text>
                <Text style={bottomPanelStyles.productText}>UdoDron 3 Pro</Text>
                <Text style={bottomPanelStyles.productPrice}>1984$</Text>
            </View>
        </View>
    );
}

export default BottomPanel;