import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from 'react-native';
import { Text } from 'exoflex';

import { DiscountBadge } from '../core-ui';
import { FONT_SIZE } from '../constants/fonts';
import { COLORS } from '../constants/colors';
import { priceAfterDiscount } from '../helpers/priceAfterDiscount';
import formatCurrency from '../helpers/formatCurrency';
import { Product } from '../types/types';

type Props = {
  product: Product;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
};

export default function ProductItem(props: Props) {
  let { product, onPress, containerStyle, imageStyle } = props;
  let { name, image, price, discount } = product;
  let afterDiscount = priceAfterDiscount(price, discount || 0);

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      <View style={styles.imageContainer}>
        <Image style={[styles.image, imageStyle]} source={{ uri: image }} />
      </View>
      {discount && (
        <DiscountBadge value={discount} containerStyle={styles.discountBox} />
      )}
      <Text numberOfLines={1} style={styles.nameText}>
        {name}
      </Text>
      <View style={styles.priceContainer}>
        <Text style={styles.priceText} weight="bold">
          {discount ? formatCurrency(afterDiscount) : formatCurrency(price)}
        </Text>
        {discount && (
          <Text style={styles.discountedPrice}>{formatCurrency(price)}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  image: {
    width: '100%',
    aspectRatio: 0.85,
  },
  imageContainer: {
    marginBottom: 12,
  },
  discountBox: {
    position: 'absolute',
    top: 14,
    right: 12,
  },
  nameText: {
    fontSize: FONT_SIZE.small,
    marginBottom: 6,
  },
  priceText: {
    marginRight: 8,
    fontSize: FONT_SIZE.medium,
    color: COLORS.primaryColor,
  },
  discountedPrice: {
    fontSize: FONT_SIZE.medium,
    color: COLORS.priceGrey,
    textDecorationLine: 'line-through',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
