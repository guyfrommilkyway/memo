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

const Header: React.FC<HeaderProps> = props => {
  const { onToggle } = props;

  return (
    <Flex
      as='header'
      pos='sticky'
      top='0'
      justify='space-between'
      align='center'
      w='full'
      h='80px'
      mb='16px'
      px='16px'
      bg='#1F1A38'
    >
      <Flex
        align='center'
        cursor='pointer'
        userSelect='none'
        onClick={onToggle}
      >
        <MdMenu fill='#FFFFFF' size={28} />
      </Flex>
      <HStack gap='16px'>
        <Box cursor='pointer' userSelect='none'>
          <MdOutlineRestartAlt fill='#FFFFFF' size={28} />
        </Box>
        <Box cursor='pointer' userSelect='none'>
          <MdOutlineSettings fill='#FFFFFF' size={28} />
        </Box>
        <Box cursor='pointer' userSelect='none'>
          <MdPerson fill='#FFFFFF' size={28} />
        </Box>
      </HStack>
    </Flex>
  );
};

export default Header;
