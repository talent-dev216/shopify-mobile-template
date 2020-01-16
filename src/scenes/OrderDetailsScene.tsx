import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Text, Button } from 'exoflex';
import { Surface } from '../core-ui';
import { FONT_SIZE } from '../constants/fonts';
import { COLORS } from '../constants/colors';
import { OrderData2 } from '../fixtures/OrderItemData';
import formatDateTime from '../helpers/formatDateTime';
import { OrderItem } from '../components';
import { useDimensions, ScreenSize } from '../helpers/dimensions';
import { RouteProp } from '../types/Navigation';
import formatCurrency from '../helpers/formatCurrency';

const sampleData = {
  date: '2019-01-08T06:24:00.000Z',
  fullName: 'Anna Belle',
  shipmentAddress: '400 Concar Dr, San Mateo, CA 94402',
  phoneNumber: '650-555-1212',
  subtotal: 77,
  shippingCost: 0,
};

export default function OrderDetailsScene() {
  let route = useRoute<RouteProp<'OrderDetails'>>();
  let { orderID } = route.params;
  let dimensions = useDimensions();
  let data = sampleData;

  let containerStyle = () => {
    if (dimensions.screenSize === ScreenSize.Small) {
      return styles.container;
    } else {
      return [styles.container, { marginHorizontal: 36 }];
    }
  };
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContentContainer}
    >
      <View style={containerStyle()}>
        <View>
          <View style={styles.orderStatusSection}>
            <View style={styles.orderStatusContainer}>
              <Text style={[styles.greyText, styles.smallText]}>
                {t('Order Status')}
              </Text>
              <Text style={[styles.greyText, styles.smallText]}>{orderID}</Text>
            </View>
            <Surface containerStyle={styles.surfaceOrderContainer}>
              <Text weight="500" style={styles.mediumText}>
                {t('Order Time')}
              </Text>
              <Text style={styles.mediumText}>{formatDateTime(data.date)}</Text>
            </Surface>
          </View>
          <View>
            <View style={styles.productDetailsContainer}>
              <Text
                style={[styles.greyText, styles.smallText, { marginBottom: 2 }]}
              >
                {t('Product Details')}
              </Text>
              <View style={styles.orderItemContainer}>
                {OrderData2.map((item) => (
                  <OrderItem
                    orderItem={item}
                    containerStyle={styles.orderItem}
                    key={item.variantID}
                  />
                ))}
              </View>
            </View>
          </View>
          <View>
            <View style={styles.shippingAddressContainer}>
              <Text style={[styles.greyText, styles.smallText]}>
                {t('Shipping Address')}
              </Text>
              <Surface containerStyle={styles.surfaceShippingContainer}>
                <Text
                  weight="400"
                  style={[styles.mediumText, { marginBottom: 6 }]}
                >
                  {data.fullName}
                </Text>
                <Text style={[styles.greyText, styles.smallText]}>
                  {data.shipmentAddress}
                </Text>
                <Text style={[styles.greyText, styles.smallText]}>
                  {data.phoneNumber}
                </Text>
              </Surface>
            </View>
          </View>
          <View>
            <View style={styles.paymentDetailsContainer}>
              <Text style={[styles.greyText, styles.smallText]}>
                {t('Payment Details')}
              </Text>
              <Surface containerStyle={styles.surfacePaymentDetails}>
                <View style={styles.innerPaymentDetailsContainer}>
                  <Text
                    weight="400"
                    style={[styles.mediumText, { marginBottom: 6 }]}
                  >
                    {t('Total Purchase')}
                  </Text>
                  <Text style={styles.mediumText}>
                    {formatCurrency(data.subtotal)}
                  </Text>
                </View>
                <View style={styles.innerPaymentDetailsContainer}>
                  <Text
                    weight="400"
                    style={[styles.mediumText, { marginBottom: 6 }]}
                  >
                    {t('Shipping Cost')}
                  </Text>
                  <Text
                    style={[styles.mediumText, { textTransform: 'uppercase' }]}
                  >
                    {data.shippingCost === 0
                      ? t('Free')
                      : formatCurrency(data.shippingCost)}
                  </Text>
                </View>
                <View
                  style={[
                    styles.innerPaymentDetailsContainer,
                    {
                      borderTopWidth: 1,
                      borderColor: COLORS.lightGrey,
                    },
                  ]}
                >
                  <Text
                    weight="400"
                    style={[styles.mediumText, { marginBottom: 6 }]}
                  >
                    {t('Total')}
                  </Text>
                  <Text weight="bold" style={styles.mediumText}>
                    {formatCurrency(data.subtotal + data.shippingCost)}
                  </Text>
                </View>
              </Surface>
            </View>
          </View>
        </View>
        <View>
          <Button style={styles.trackOrderButton}>
            <Text weight="bold" style={styles.buttonText}>
              {t('Track Order')}
            </Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: COLORS.white,
  },
  scrollContentContainer: {
    flexGrow: 1,
  },
  container: {
    marginHorizontal: 24,
    justifyContent: 'space-between',
    flexGrow: 2,
  },
  orderStatusSection: {
    marginTop: 16,
  },
  orderStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shippingAddressContainer: {
    marginVertical: 2,
  },
  productDetailsContainer: {
    marginVertical: 2,
  },
  orderItemContainer: {
    marginVertical: 7,
  },
  paymentDetailsContainer: {
    marginVertical: 2,
  },
  innerPaymentDetailsContainer: {
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  surfaceOrderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginVertical: 12,
  },
  surfaceShippingContainer: {
    marginVertical: 12,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  surfacePaymentDetails: {
    marginTop: 12,
    paddingHorizontal: 15,
  },
  orderItem: {
    paddingVertical: 7,
  },
  greyText: {
    color: COLORS.grey,
  },
  smallText: {
    fontSize: FONT_SIZE.small,
  },
  mediumText: {
    fontSize: FONT_SIZE.medium,
  },
  trackOrderButton: {
    backgroundColor: COLORS.primaryColor,
    borderRadius: 0,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: FONT_SIZE.medium,
    textTransform: 'uppercase',
  },
});
