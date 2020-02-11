import { ReactNode } from 'react';
import { GetAuthenticatedUser_authenticatedUser as AuthenticatedUser } from '../generated/client/GetAuthenticatedUser';
import { GetWishlist_wishlist as Wishlist } from '../generated/client/GetWishlist';
import { GetShoppingCart_shoppingCart as ShoppingCart } from '../generated/client/GetShoppingCart';
import { GetRecentSearch_recentSearch as RecentSearch } from '../generated/client/GetRecentSearch';

export type CarouselItem = {
  render: () => ReactNode;
  image: string;
  onItemPress?: () => void;
};

export type OrderItem = {
  variantID: string;
  itemName: string;
  quantity: number;
  itemPrice: number;
  priceAfterDiscount?: number;
  variant: string;
  imageURL: string;
  cardType: 'checkout' | 'order';
  onRemovePress?: (variantID: string) => void;
};

export type IndicatorItem = {
  label: string;
  timestamp?: string;
};

export type OrderRecord = {
  orderID: string;
  orderNumber: string;
  orderTime: string;
  totalPayment: number;
};

export type AddressItem = {
  id: string;
  name: string | null;
  address1: string | null;
  city: string | null;
  province: string | null;
  zip: string | null;
  country: string | null;
  phone: string | null;
  default: boolean;
};

export type Product = {
  id: string;
  image: string;
  title: string;
  handle: string;
  productType?: string;
  price: number;
  discount?: number;
};

// TODO: Rename Category to Collection
export type CategoryItem = {
  id: string;
  title: string;
  handle: string;
};

export type LocalData = {
  authenticatedUser: AuthenticatedUser;
  wishlist: Array<Wishlist>;
  shoppingCart: ShoppingCart;
  recentSearch: Array<RecentSearch>;
};

export type LocalCache = {
  data: LocalData;
};
export type VariantQueryData = {
  name: string;
  value: string;
};
