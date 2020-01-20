import { BottomTabBarOptions } from '@react-navigation/bottom-tabs';
import { DefaultTheme, Theme } from 'exoflex';
import { StackNavigationOptions } from '@react-navigation/stack';

import { COLORS } from './colors';
import { FONT_SIZE, FONT_FAMILY, FONT } from './fonts';

export const ColorTheme = {
  ...DefaultTheme.colors,
  primary: COLORS.primaryColor,
};

export const CustomTheme: Theme = {
  ...DefaultTheme,
  fonts: {
    ...DefaultTheme.fonts,
    default: {
      ...DefaultTheme.fonts.default,
      normal: {
        name: FONT_FAMILY.REGULAR,
        weight: 'normal',
        source: FONT.REGULAR,
      },
      medium: {
        name: FONT_FAMILY.MEDIUM,
        weight: '500',
        source: FONT.MEDIUM,
      },
      bold: {
        name: FONT_FAMILY.BOLD,
        weight: '700',
        source: FONT.BOLD,
      },
    },
    italic: {
      ...DefaultTheme.fonts.italic,
      normal: {
        name: FONT_FAMILY.ITALIC,
        weight: 'normal',
        source: FONT.ITALIC,
      },
    },
  },
  colors: ColorTheme,
  roundness: 2,
};
export const headerOptions: StackNavigationOptions = {
  cardStyle: {
    backgroundColor: COLORS.white,
  },
  headerTitleStyle: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: FONT_SIZE.large,
  },
  headerBackTitleVisible: false,
};

export const tabBarOptions: BottomTabBarOptions = {
  activeTintColor: COLORS.primaryColor,
  inactiveTintColor: COLORS.inactive,
  tabStyle: {
    paddingTop: 16,
    marginBottom: 5,
    height: 64,
  },
  style: {
    height: 90,
  },
  labelPosition: 'below-icon',
  labelStyle: {
    fontFamily: FONT_FAMILY.REGULAR,
  },
};
