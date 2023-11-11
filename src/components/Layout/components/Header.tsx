// packages
import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

// components
import Logo from '@/components/Logo';
import LogoutButton from './LogoutButton';

const Header: React.FC = () => {
  return (
    <Box as='header' pos='sticky' top='0' h='fit-content'>
      <Flex
        justify='space-between'
        alignItems='center'
        w='full'
        h='full'
        p={4}
        bg='#353B3C'
      >
        <Logo />
        <LogoutButton />
      </Flex>
    </Box>
  );
};

export default Header;
