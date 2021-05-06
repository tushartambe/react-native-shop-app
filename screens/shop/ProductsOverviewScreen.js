import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = (props) => {
  const availableProducts = useSelector(state => state.products.availableProducts);

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
          onAddToCart={() => { }}
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
