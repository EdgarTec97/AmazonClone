import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import CheckBox from '@react-native-community/checkbox';
import CartProductItem from '../../components/CartProductItem';
import Button from '../../components/Button';
import products from '../../data/cart';

const ShoppingCartScreen = () => {
  const totalPrice = products.reduce(
    (summedPrice, product) =>
      summedPrice + product.item.price * product.quantity,
    0,
  );
  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <>
            <CartProductItem cartItem={item} />
          </>
        )}
        keyExtractor={({id}) => id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text style={{fontSize: 18}}>
              Subtotal ({products.length} items):{'  '}
              <Text style={{color: '#e47911', fontWeight: 'bold'}}>
                ${totalPrice.toFixed(2)}
              </Text>
            </Text>

            <Button
              text="Proceed to checkout"
              containerStyles={{
                backgroundColor: '#f7e300',
                borderColor: '#f7e300',
                height: 45,
              }}
              onPress={() => console.warn('go to checkout')}
            />
            <CheckBox disabled={false} value={false} />
            <Text style={styles.check}>
              <Icon name="gift" size={20} /> Add a gift receipt for easy returns
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  check: {
    fontSize: 16,
    marginTop: -27,
    marginLeft: 35,
  },
});

export default ShoppingCartScreen;
