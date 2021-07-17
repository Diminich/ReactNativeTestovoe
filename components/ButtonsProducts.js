import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { nameButtonAC } from '../redux/quadcopter-reducer';
import { buttonsProductsStyles, styleButtonActive, styleButtonInactive, styleTextButtonActive, styleTextButtonInactive } from '../styles/buttonsProductsStyles';

const ButtonsProducts = () => {
    const dispatch = useDispatch();
    const buttonsName = useSelector(state => state.quadcopterPage.buttonsName);
    const activeNameButton = useSelector(state => state.quadcopterPage.activeNameButton)

    const sortButtonsName = (name) => {
        dispatch(nameButtonAC(buttonsName.filter(el => el === name)))
    }

    return (
        <View style={buttonsProductsStyles.wrapper}>
            {buttonsName.map(nameButton => {
                return (
                    <TouchableOpacity style={activeNameButton == nameButton ? styleButtonActive : styleButtonInactive}
                        onPress={() => sortButtonsName(nameButton)}>
                        <Text style={activeNameButton == nameButton ? styleTextButtonActive : styleTextButtonInactive}>
                            {nameButton}
                        </Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    );
}

export default ButtonsProducts;