// packages
import React from 'react';
import {
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

import Logo from '@/components/Logo';
import Navbar from './Navbar';
import Info from './Info';

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
          py='xs'
          bg='darken.100'
          overflow='hidden'
        >
          <Flex flexDir='column' gap='none' w='full'>
            <Logo />
            <Navbar />
          </Flex>
          <Info />
        </Flex>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerSidebar;
