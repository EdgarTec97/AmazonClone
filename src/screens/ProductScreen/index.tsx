import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState<string>(
    product.options ? product.options[0] : '',
  );
  const [quantity, setQuantity] = useState<number>(5);

  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>
      {/* Image Carousel */}
      <ImageCarousel images={product.images} />
      {/* Option Selector */}
      <View style={styles.pickerCap}>
        <Picker
          selectedValue={selectedOption}
          onValueChange={itemValue => setSelectedOption(itemValue)}
          style={styles.picker}>
          {product.options.map((item, index) => (
            <Picker.Item key={index} label={item} value={item} />
          ))}
        </Picker>
      </View>
      {/* Price */}
      <Text style={styles.price}>
        from ${product.price}{' '}
        {product.oldPrice && (
          <Text style={styles.oldPrice}>${product.oldPrice}</Text>
        )}
      </Text>
      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>
      {/* Quantity Selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      {/* Buttons */}
      <Button
        text={'Add to Cart'}
        onPress={() => console.log('Add to cart')}
        containerStyles={{backgroundColor: '#e3c905'}}
      />
      <Button
        containerStyles={styles.auxButton}
        text={'Buy Now'}
        onPress={() => console.log('Buy Now')}
      />
    </ScrollView>
  );
};

export default ProductScreen;
