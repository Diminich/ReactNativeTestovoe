import { StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
    wrapper: {
        height: '15%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 32,
        marginLeft: 20
    },

    wrapperBurgerMenu: {
        alignItems: 'flex-end'
    },

    burgerMenuText: {
        height: '11%',
        fontWeight: 'bold',
        fontStyle: 'normal',
        marginRight: 20,
    }
});