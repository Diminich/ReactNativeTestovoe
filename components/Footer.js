import React from 'react';
import { View } from 'react-native';
import { footerStyles, HomeSvgIcon, HeartSvgIcon, LoupeSvgIcon, ShoppingCartSvgIcon } from '../styles/footerStyles';

const Footer = () => {
  return (
    <View style={footerStyles.wrapper}>
      <HomeSvgIcon />
      <HeartSvgIcon />
      <LoupeSvgIcon />
      <ShoppingCartSvgIcon />
    </View>
  );
}

export default Footer;