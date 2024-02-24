// packages
import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

// components
import Navbar from './Navbar';
import Logo from '@/components/Logo';

const Sidebar: React.FC = () => {
  return (
    <Flex
      as='section'
      pos='sticky'
      top='0'
      display={{
        base: 'none',
        lg: 'flex',
      }}
      flexDir='column'
      justify='space-between'
      w='full'
      minW='300px'
      maxW='300px'
      h='full'
      minH='100vh'
    >
      <Flex flexDir='column' gap='0' w='full'>
        <Logo />
        <Navbar />
      </Flex>
      <Box p='16px'>
        <Text textAlign='center' color='#FFFFFF' fontSize={12}>
          Built using Vite, React and Chakra UI.
        </Text>
        <Text textAlign='center' color='#FFFFFF' fontSize={12}>
          Made from Figma. Deployed with Netlify.
        </Text>
      </Box>
    </Flex>
  );
};

export default Sidebar;
