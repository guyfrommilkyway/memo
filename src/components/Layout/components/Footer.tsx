// packages
import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box as='footer' p={4}>
      <Flex direction='column' justify='center' alignItems='center' gap={0} h='100%'>
        <Text textAlign='center' fontSize={14}>
          Built using Vite, React and Chakra UI.
        </Text>
        <Text textAlign='center' fontSize={14}>
          Made from Figma. Deployed with Netlify.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
