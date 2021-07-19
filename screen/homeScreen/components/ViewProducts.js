import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

import { useSelector } from 'react-redux';
import { StarSvgIcon, viewProductsStyles } from '../styles/viewProductsStyles';

const ViewProducts = ({ navigation }) => {
    const nameButton = useSelector(state => state.quadcopterPage.activeNameButton);
    const sortProducts = useSelector(state => state.quadcopterPage.sortProducts);

    return (
        <View style={viewProductsStyles.wrapper}>
            <Text style={viewProductsStyles.textHeaderProduct}>{nameButton} Quadcopters</Text>
            <View style={viewProductsStyles.wrapperProducts}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {sortProducts.map(({ id, img, nameProduct, priceProduct, ratingProduct }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate("StackNavigator", {
                                    params: {
                                        item: {id, img, nameProduct, priceProduct, ratingProduct}
                                    },
                                    screen: "ProductDescription",
                                })}>
                                <View style={viewProductsStyles.contentProduct} key={id}>
                                    <Image style={viewProductsStyles.imgQuadcopter} source={img} />
                                    <Text style={viewProductsStyles.nameProduct}>{nameProduct}</Text>
                                    <View style={viewProductsStyles.wrapperPriceRatingProduct}>
                                        <Text style={viewProductsStyles.priceProduct}>{priceProduct} $</Text>
                                        <Text style={viewProductsStyles.ratingProduct}><StarSvgIcon /> {ratingProduct}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    );
}

export default ViewProducts;