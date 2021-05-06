import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';

const ProductsOverviewScreen = (props) => {
  const availableProducts = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={availableProducts}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {
            props.navigation.navigate('ProductDetail', {
              productId: itemData.item.id,
              productTitle: itemData.item.title
            })
          }}
          onAddToCart={() => { dispatch(cartActions.addToCart(itemData.item)) }}
        />
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = () => {
  return {
    headerTitle: 'All Products'
  };
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});

export default ProductsOverviewScreen;
