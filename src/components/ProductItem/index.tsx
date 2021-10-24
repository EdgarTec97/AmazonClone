import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

interface ProductItemProps {
  item: {
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
  };
}

const ProductItem = (props: ProductItemProps) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('ProductDetails', props.item);
  };
  return (
    <Pressable style={styles.root} onPress={onPress}>
      <Image
        style={styles.image}
        source={{
          uri: props.item.image,
        }}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {props.item.title}
        </Text>
        {/* Rating */}
        <View style={styles.ratingsContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <FontAwesome
              key={`${props.item.id}-${i}`}
              style={styles.star}
              name={i < Math.floor(props.item.avgRating) ? 'star' : 'star-o'}
              size={18}
              color={'#e47911'}
            />
          ))}
          <Text style={styles.text_star}>{props.item.ratings}</Text>
        </View>
        <Text style={styles.price}>
          from ${props.item.price}{' '}
          {props.item.oldPrice && (
            <Text style={styles.oldPrice}>${props.item.oldPrice}</Text>
          )}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductItem;
