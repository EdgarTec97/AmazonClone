import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import {useRoute} from '@react-navigation/core';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

interface ProductItem {
  id: string;
  title: string;
  description: string;
  image: string;
  images: string[];
  options: string[];
  avgRating: number;
  ratings: number;
  price: number;
  oldPrice?: number;
}

const ProductScreen = (props: any) => {
  const {params} = useRoute();
  const product = params as ProductItem;
  const [selectedOption, setSelectedOption] = useState<string>(
    product.options ? product.options[0] : '',
  );
  const [quantity, setQuantity] = useState<number>(1);

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
          {product.options.map((item: any, index: any) => (
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
