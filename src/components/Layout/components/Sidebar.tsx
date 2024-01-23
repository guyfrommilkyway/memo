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
      top='68px'
      w='100%'
      h='calc(100vh - 68px)'
      maxW='15%'
      py={4}
      bg='#D8E1E9'
    >
      <Navbar />
    </Box>
  );
};

export default Sidebar;
