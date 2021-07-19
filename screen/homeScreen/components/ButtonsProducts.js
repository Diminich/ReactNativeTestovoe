import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { nameButtonAC, sortProductsAC } from '../../../redux/quadcopter-reducer';
import { buttonsProductsStyles, styleButtonActive, styleButtonInactive, styleTextButtonActive, styleTextButtonInactive } from '../styles/buttonsProductsStyles';

const ButtonsProducts = () => {
    const dispatch = useDispatch();
    const buttonsName = useSelector(state => state.quadcopterPage.buttonsName);
    const activeNameButton = useSelector(state => state.quadcopterPage.activeNameButton);
    const products = useSelector(state => state.quadcopterPage.products)

    const sortButtonsName = (name) => {
        dispatch(nameButtonAC(buttonsName.filter(el => el === name)))
        if (name == 'All') {
            dispatch(sortProductsAC(products))
        } else if (name == 'Cheap') {
            let minPrice = Math.min(...products.map(({ priceProduct }) => priceProduct))
            dispatch(sortProductsAC(products.filter(({priceProduct}) => priceProduct == minPrice)))
        } else if (name == 'Best') {
            dispatch(sortProductsAC(products.filter(({ratingProduct}) => ratingProduct >= 4)))
        } else if (name == 'Fast') {
            let maxPrice = Math.max(...products.map(({ priceProduct }) => priceProduct))
            dispatch(sortProductsAC(products.filter(({priceProduct}) => priceProduct == maxPrice)))
        }
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