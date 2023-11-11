// packages
import React from 'react';
import { Box } from '@chakra-ui/react';

const Container: React.FC<ChildrenProps> = props => {
  const { children } = props;

  return (
    <Box
      as='main'
      className='main'
      display='flex'
      flexDirection='column'
      w='100%'
      maxW='1920px'
      h='100vh'
      mx='auto'
    >
      {children}
    </Box>
  );
};

export default Container;
