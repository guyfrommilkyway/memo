// packages
import React from 'react';
import { Box } from '@chakra-ui/react';

const Content: React.FC<ChildrenProps> = props => {
  const { children } = props;

  return (
    <Box as='section' w='full' p={8}>
      {children}
    </Box>
  );
};

export default Content;
