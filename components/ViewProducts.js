import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';


import { useSelector } from 'react-redux';
import { StarSvgIcon, viewProductsStyles } from '../styles/viewProductsStyles';

const ViewProducts = () => {
    const nameButton = useSelector(state => state.quadcopterPage.activeNameButton);
    const products = useSelector(state => state.quadcopterPage.products);

    return (
        <View style={viewProductsStyles.wrapper}>
            <Text style={viewProductsStyles.textHeaderProduct}>{nameButton} Quadcopters</Text>
            <View style={viewProductsStyles.wrapperProducts}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {products.map(({ id, img, nameProduct, priceProduct, ratingProduct }) => {
                        return (
                            <View style={viewProductsStyles.contentProduct} key={id}>
                                <Image style={viewProductsStyles.imgQuadcopter} source={img} />
                                <Text style={viewProductsStyles.nameProduct}>{nameProduct}</Text>
                                <View style={viewProductsStyles.wrapperPriceRatingProduct}>
                                    <Text style={viewProductsStyles.priceProduct}>{priceProduct} $</Text>
                                    <Text style={viewProductsStyles.ratingProduct}><StarSvgIcon /> {ratingProduct}</Text>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    );
}

export default ViewProducts;