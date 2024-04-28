// packages
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    whiten: {
      100: '#FFFFFF',
      200: '#CCCCCC',
      300: '#B4B4B4',
      400: '#9C9C9C',
      500: '#848484',
    },
    darken: {
      100: '#575757',
      200: '#414141',
      300: '#2A2A2A',
      400: '#141414',
      500: '#000000',
    },
    brand: {
      100: '#FFFCF2',
      200: '#CCC5B9',
      300: '#403D39',
      400: '#252422',
      500: '#EB5E28',
    },
  },
  space: {
    'none': '0rem',
    'xs': '0.25rem',
    'sm': '0.5rem',
    'md': '1rem',
    'lg': '1.5rem',
    'xl': '2rem',
    '2xl': '2.5rem',
    '3xl': '3rem',
  },
  styles: {
    global: {
      body: {
        bg: 'brand.100',
      },
    },
  },
});

export default theme;
