// packages
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    whiten: {
      100: '#E4E4E4',
    },
    darken: {
      100: '#232323',
    },
    brand: {
      100: '#1F1A38',
      200: '#7B506F',
      300: '#EAD7D1',
      400: '#DBCDC6',
      500: '#CCCCCC',
    },
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
