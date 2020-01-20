import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationState } from '@react-navigation/native';
import { IconButton, Text } from 'exoflex';

import { FONT_SIZE } from '../constants/fonts';
import { tabBarOptions } from '../constants/theme';
import { HomeStack, WishlistStack, ProfileStack } from './StackNavigator';
import { RootParamList, RouteProp } from '../types/Navigation';

const Tab = createBottomTabNavigator<RootParamList>();

type LabelProps = {
  focused: boolean;
  color: string;
  label: string;
};

type State = {
  state?: NavigationState;
};

type HomeRoute = RouteProp<'HomeTab'> & State;
type WishlistRoute = RouteProp<'WishlistTab'> & State;
type ProfileRoute = RouteProp<'ProfileTab'> & State;

function TabLabel(props: LabelProps) {
  let { focused, color, label } = props;
  return (
    <Text
      {...(focused && { weight: 'medium' })}
      style={{ color, fontSize: FONT_SIZE.extraSmall, marginTop: 10 }}
    >
      {label}
    </Text>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="HomeTab" tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={({ route }: { route: HomeRoute }) => {
          return {
            tabBarLabel: ({ focused, color }) => (
              <TabLabel focused={focused} color={color} label={t('Home')} />
            ),
            tabBarIcon: ({ color }) => <IconButton icon="home" color={color} />,
            tabBarVisible: route.state && route.state.index <= 0,
          };
        }}
      />
      <Tab.Screen
        name="WishlistTab"
        component={WishlistStack}
        options={({ route }: { route: WishlistRoute }) => {
          return {
            tabBarLabel: ({ focused, color }) => (
              <TabLabel focused={focused} color={color} label={t('Wishlist')} />
            ),
            tabBarIcon: ({ color }) => (
              <IconButton icon="heart" color={color} />
            ),
            tabBarVisible: route.state && route.state.index <= 0,
          };
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={({ route }: { route: ProfileRoute }) => {
          return {
            tabBarLabel: ({ focused, color }) => (
              <TabLabel
                focused={focused}
                color={color}
                label={t('My Profile')}
              />
            ),
            tabBarIcon: ({ color }) => (
              <IconButton icon="account" color={color} />
            ),
            tabBarVisible: route.state && route.state.index <= 0,
          };
        }}
      />
    </Tab.Navigator>
  );
}
