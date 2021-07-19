import { StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
    wrapper: {
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },

    headerText: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 32,
        marginLeft: 20
    }
});