// packages
import React from 'react';
import { Box, Flex, HStack } from '@chakra-ui/react';

import { MdMenu, MdRefresh, MdSettings, MdPerson } from 'react-icons/md';

interface Props {
  onToggle: () => void;
}

const Topbar: React.FC<Props> = ({ onToggle }) => {
  return (
    <Flex as='header' pos='sticky' top={0} justify='space-between' align='center' w='full' h='80px' mb='md' px='md'>
      <Flex align='center' cursor='pointer' userSelect='none' onClick={onToggle}>
        <MdMenu fill='#414141' size={24} />
      </Flex>
      <HStack gap='md'>
        <Box cursor='pointer' userSelect='none'>
          <MdRefresh fill='#414141' size={24} />
        </Box>
        <Box cursor='pointer' userSelect='none'>
          <MdSettings fill='#414141' size={24} />
        </Box>
        <Box cursor='pointer' userSelect='none'>
          <MdPerson fill='#414141' size={24} />
        </Box>
      </HStack>
    </Flex>
  );
};

export default Topbar;
