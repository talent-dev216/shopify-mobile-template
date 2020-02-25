import { RouteProp as RoutePropBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CategoryItem, Product, OrderRecord, AddressItem, Cart } from './types';

export type StackNavProp<T extends keyof StackParamList> = StackNavigationProp<
  StackParamList,
  T
>;

export type TabNavProp<T extends keyof TabParamList> = BottomTabNavigationProp<
  TabParamList,
  T
>;

export type StackRouteProp<T extends keyof StackParamList> = RoutePropBase<
  StackParamList,
  T
>;

export type TabRouteProp<T extends keyof TabParamList> = RoutePropBase<
  TabParamList,
  T
>;

export type StackParamList = {
  Home: undefined;
  OrderHistory: { customerAccessToken: string };
  OrderDetails: { order: OrderRecord };
  AddressManagement: { customerAccessToken: string };
  AddEditAddress: {
    address?: AddressItem;
    rootScene: keyof StackParamList;
  };
  Wishlist: undefined;
  Profile: undefined;
  ProductCollection: {
    collection: CategoryItem;
  };
  SearchResults: {
    searchKeyword: string;
  };
  Register: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  Checkout: { cartData: Cart };
  ProductDetails: { product: Product };
  ShoppingCart: undefined;
  EditProfile: { customerAccessToken: string };
  Payment: undefined;
  Auth: { initialRouteKey: string };
};

export type TabParamList = {
  HomeTab: undefined;
  WishlistTab: undefined;
  ProfileTab: undefined;
};

export type StackRouteName = keyof StackParamList;
export type TabRouteName = keyof TabParamList;
