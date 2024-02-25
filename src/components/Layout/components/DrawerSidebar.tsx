// packages
import React from 'react';
import {
  Box,
  Flex,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

// components
import Navbar from './Navbar';
import Logo from '@/components/Logo';

const DrawerSidebar: React.FC<DrawerSidebarProps> = props => {
  const { isOpen, onClose } = props;

  return (
    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton color='#FFFFFF' />
        <Flex
          as='section'
          flexDir='column'
          justify='space-between'
          w='full'
          h='full'
          py={4}
          bg='darken.100'
          overflow='hidden'
        >
          <Flex flexDir='column' gap='0' w='full'>
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
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerSidebar;
