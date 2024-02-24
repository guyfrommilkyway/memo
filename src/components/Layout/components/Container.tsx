// packages
import React from 'react';
import { Flex } from '@chakra-ui/react';

const Container: React.FC<ChildrenProps> = props => {
  const { children } = props;

  return (
    <Flex
      as='main'
      className='main'
      display='flex'
      flexDirection='row'
      w='100%'
      maxW='1920px'
      h='100%'
      minH='100vh'
      mx='auto'
    >
      {children}
    </Flex>
  );
};

export default Container;
