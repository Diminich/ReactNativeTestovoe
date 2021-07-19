import React from 'react';
import { View, Text } from 'react-native';

const ProductDescription = ({ route }) => {
    console.log('route', route);
    return (
        <View style={{flex: 1, backgroundColor: 'red'}}>
            <Text>111</Text>
            {/* <Text>{route.params.nameProduct}</Text> */}
        </View>
    );
}

export default ProductDescription;