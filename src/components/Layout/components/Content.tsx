// packages
import React, { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

const Content: React.FC<Props> = ({ children }) => {
  return (
    <Box as='section' w='full' my='32px'>
      {children}
    </Box>
  );
};

export default Content;
