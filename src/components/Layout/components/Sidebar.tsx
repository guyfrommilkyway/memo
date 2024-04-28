// packages
import React from 'react';
import { Flex } from '@chakra-ui/react';

import Logo from '@/components/Logo';
import Navbar from './Navbar';
import Info from './Info';

const Sidebar: React.FC = () => {
  return (
    <Flex
      as='section'
      pos='sticky'
      top={0}
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
      <Flex flexDir='column' gap='none' w='full'>
        <Logo />
        <Navbar />
      </Flex>
      <Info />
    </Flex>
  );
};

export default Sidebar;
