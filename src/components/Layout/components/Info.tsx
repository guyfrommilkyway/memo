// packages
import React, { memo } from 'react';
import { Box, Text } from '@chakra-ui/react';

const Info: React.FC = memo(() => {
  return (
    <Box p='md'>
      <Text
        textAlign='center'
        color='darken.300'
        fontSize={12}
        userSelect='none'
      >
        Built using Vite, React and Chakra UI.
      </Text>
      <Text
        textAlign='center'
        color='darken.300'
        fontSize={12}
        userSelect='none'
      >
        Made from Figma. Deployed with Netlify.
      </Text>
    </Box>
  );
});

export default Info;
