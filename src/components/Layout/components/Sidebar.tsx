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
      top='32px'
      flexDir='column'
      justify='space-between'
      w='full'
      maxW='339px'
      h='full'
      minH='calc(100vh - 64px)'
      py={4}
      borderRadius='48px'
      bg='#232323'
      overflow='hidden'
    >
      <Flex flexDir='column' gap='32px' w='full'>
        <Logo />
        <Navbar />
      </Flex>
      <Box>
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
