import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // BASE COLORS
  primary: '#F96D41',
  secondary: '#25282F',

  // colors
  black: '#1E1B26',
  white: '#FFFFFF',
  gray: '#2D3038',
  gray1: '#282C35',
  LightGray: '#64676D',
  LightGray2: '#EFEFF0',
  LightGray3: '#D4D5D6',
  LightGray4: '#7D7E84',
  darkRed: '#31262F',
  lightRed: '#C5505E',
  darkBlue: '#222738',
  lightBlue: '#424BAF',
  darkGreen: '#213432',
  lightGreen: '#31AD66',
};

// export default COLORS = {
//   primary,
//   secondary,
//   black,
//   white,
//   gray,
//   gray1,
//   gray2,
//   gray3,
//   gray4,
//   darkRed,
//   lightRed,
//   darkBlue,
//   lightBlue,
//   darkGreen,
//   lightGreen,
// };

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  padding2: 36,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  caption: 30,

  //   app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-regular',
    fontSize: SIZES.largeTitle,
    lineHeight: 40,
  },
  h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},
  body1: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Roboto-Regular', fontSize: SIZES.body4, lineHeight: 22},
};

const appTheme = {COLORS, SIZES, FONTS};
export default appTheme;
