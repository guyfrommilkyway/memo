//theme.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: '#EFEBCE',
      },
    }),
  },
});

export default theme;
