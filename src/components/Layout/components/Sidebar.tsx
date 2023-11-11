// packages
import React from 'react';
import { Box } from '@chakra-ui/react';

// components
import Navbar from './Navbar';

const Sidebar: React.FC = () => {
  return (
    <Box
      as='section'
      pos='sticky'
      top='64px'
      w='100%'
      h='calc(100vh - 64px)'
      maxW='15%'
      py={4}
      bg='#C6C7C4'
    >
      <Navbar />
    </Box>
  );
};

export default Sidebar;
