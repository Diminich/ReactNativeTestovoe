import { StyleSheet } from 'react-native';

export const buttonsProductsStyles = StyleSheet.create({
    wrapper: {
        height: '6%',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },

    buttonActive: {
        height: '100%',
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: '#317AE8'
    },

    textButtonActive: {
        color: '#FFFFFF'
    },

    inactive: {
        height: '100%',
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E7E7E7'
    },

    textButtonInactive: {
        color: '#1F1F1F'
    }
});

export const styleButtonActive = buttonsProductsStyles.buttonActive;
export const styleTextButtonActive = buttonsProductsStyles.textButtonActive;
export const styleButtonInactive = buttonsProductsStyles.inactive;
export const styleTextButtonInactive = buttonsProductsStyles.textButtonInactive;