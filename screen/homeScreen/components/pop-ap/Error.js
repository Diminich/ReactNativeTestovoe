import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { errorStyles } from './styles/errorStyles';
import { BlurView } from 'expo-blur';

const Error = ({ setError }) => {
    return (
        <BlurView intensity={70} tint="dark" style={errorStyles.wrapper}>
            <View style={errorStyles.wrapperContent}>
                <Text style={{ color: '#939399' }}>Введите имя и телефон!</Text>
                <TouchableOpacity style={errorStyles.buttoСustomer} onPress={() => setError(false)}>
                    <Text style={{ color: '#FFFFFF' }}>Ок</Text>
                </TouchableOpacity>
            </View>
        </BlurView>
    );
}

export default Error;