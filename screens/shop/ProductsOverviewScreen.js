import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const ProductsOverviewScreen = (props) => {
  const availableProducts = useSelector(state => state.products.availableProducts);

  const renderProduct = (itemData) => {
    return <Text>{itemData.item.title}</Text>
  }

  return (
    <View style={styles.screen}>
      <FlatList data={availableProducts} renderItem={renderProduct}>

      </FlatList>
    </View>
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
