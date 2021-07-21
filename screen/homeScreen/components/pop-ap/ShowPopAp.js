import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { showPopApStyles } from './styles/showPopApStyles';
import { FontAwesome5 } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';


const ShowPopAp = ({ setVisibleShowPopAp }) => {
    return (
        <BlurView intensity={70} tint="dark" style={showPopApStyles.wrapper}>
            <View style={showPopApStyles.wrapperContent}>
                <FontAwesome5 name="car-side" size={70} color="#317AE8" />
                <Text style={{ color: '#939399' }}>Ваш заказ принят</Text>
                <TouchableOpacity style={showPopApStyles.buttoСustomer} onPress={() => setVisibleShowPopAp(false)}>
                    <Text style={{ color: '#FFFFFF' }}>Ок</Text>
                </TouchableOpacity>
            </View>
        </BlurView>
    );
}

export default ShowPopAp;