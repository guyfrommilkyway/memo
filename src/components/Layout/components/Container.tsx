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
      w='calc(100% - 128px)'
      maxW='calc(1920px - 128px)'
      h='100%'
      minH='100vh'
      mx='auto'
    >
      {children}
    </Flex>
  );
};

export default Container;
