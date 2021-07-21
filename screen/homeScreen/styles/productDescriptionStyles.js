import { StyleSheet } from 'react-native';

export const productDescription = StyleSheet.create({
  containerScroll: {
    flexGrow: 1,
    alignSelf: 'stretch'
  },

  wrapper: {
    flex: 1,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#F8F8F8'
  },

  imgQuadcopter: {
    height: '45%',
    width: '90%'
  },

  wrapperDescriptionText: {
    height: '25%',
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

  nameProduct: {
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 28,
    lineHeight: 36,
  },

  priceProduct: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
    color: '#317AE8'
  },

  textNameNumberСustomer: {
    width: '90%',
    borderBottomWidth: 1,
    borderColor: '#E7E7E7'
  },

  buttoСustomer: {
    height: '10%',
    width: '90%',
    backgroundColor: '#317AE8',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }
});