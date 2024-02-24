// packages
import React from 'react';
import { Box, Flex, HStack } from '@chakra-ui/react';

// components
// import Logo from '@/components/Logo';
// import LogoutButton from './LogoutButton';

// assets
import {
  MdMenu,
  MdOutlineRestartAlt,
  MdOutlineSettings,
  MdPerson,
} from 'react-icons/md';

const Header: React.FC = () => {
  return (
    <Flex
      as='header'
      pos='sticky'
      top='32px'
      justify='space-between'
      align='center'
      h='80px'
      bg='#EFEBCE'
    >
      <Box cursor='pointer' userSelect='none'>
        <MdMenu fill='#232323' size={28} />
      </Box>
      <HStack gap='16px'>
        <Box cursor='pointer' userSelect='none'>
          <MdOutlineRestartAlt fill='#232323' size={28} />
        </Box>
        <Box cursor='pointer' userSelect='none'>
          <MdOutlineSettings fill='#232323' size={28} />
        </Box>
        <Box cursor='pointer' userSelect='none'>
          <MdPerson fill='#232323' size={28} />
        </Box>
      </HStack>
    </Flex>
  );
};

export default Header;
