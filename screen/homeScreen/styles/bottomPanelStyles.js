import { StyleSheet } from 'react-native';

export const bottomPanelStyles = StyleSheet.create({
    wrapper: {
        height: '35%',
        width: '90%',
        justifyContent: 'flex-end',
        backgroundColor: '#317AE8',
        borderRadius: 20
    },

    wrapperDescriptionText: {
        justifyContent: 'flex-end',
        marginLeft: 15,
        marginBottom: 15
    },

    headingText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 17,
        color: '#FFFFFF'
    },

    productText: {
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 24,
        lineHeight: 32,
        color: '#FFFFFF'
    },

    productPrice: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 24,
        color: '#FFFFFF'
    },

    img: {
        height: '95%',
        width: '90%',
        position: 'relative',
        top: 52,
        left: 75
    }
});