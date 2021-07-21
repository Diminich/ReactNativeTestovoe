import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { productDescription } from '../styles/productDescriptionStyles';
import { MaskedTextInput } from "react-native-mask-text";

import { KeyboardAwareView } from 'react-native-keyboard-aware-view'
import ShowPopAp from './pop-ap/ShowPopAp';
import Error from './pop-ap/Error';

const ProductDescription = ({ route }) => {
  const { img, nameProduct, priceProduct, descriptionProduct } = route.params.item;
  const [visibleShowPopAp, setVisibleShowPopAp] = useState(false);
  const [error, setError] = useState(false);
  const [number, setNumber] = useState('');
  const [textName, setTextName] = useState('');

  const isShowPopAp = () => {
    if (!textName || number.length <= 12) {
      setError(true)
    } 
    else {
      setVisibleShowPopAp(true);
    }
  }

  return (
    <ScrollView contentContainerStyle={productDescription.containerScroll}>
      <KeyboardAwareView animated={true}>
        <View style={productDescription.container}>
          <Image style={productDescription.imgQuadcopter} source={img} />
          <View style={productDescription.wrapperDescriptionText}>
            <Text>Ordinary quadcopter</Text>
            <Text style={productDescription.nameProduct}>{nameProduct}</Text>
            <Text style={productDescription.priceProduct}>{priceProduct} $</Text>
            <Text style={{ color: '#939399' }}>{descriptionProduct}</Text>
          </View >
          <TextInput style={productDescription.textNameNumberСustomer} onChangeText={setTextName} placeholder='Имя' />
          <MaskedTextInput
            mask='+375 (99) 999-99-99'
            placeholder='+375 (__) ___-__-__'
            onChangeText={(text, rawText) => {
              setNumber(rawText);
            }}
            style={productDescription.textNameNumberСustomer}
            keyboardType="numeric"

          />
          <TouchableOpacity style={productDescription.buttoСustomer} onPress={isShowPopAp}>
            <Text style={{ color: '#FFFFFF' }}>Заказать</Text>
          </TouchableOpacity>
        </View>
        <Modal visible={visibleShowPopAp} transparent={true}>
          <ShowPopAp setVisibleShowPopAp={setVisibleShowPopAp} />
        </Modal>
        <Modal visible={error} transparent={true}>
            <Error setError={setError}/>
        </Modal>
      </KeyboardAwareView>
    </ScrollView>
  );
}

export default ProductDescription;