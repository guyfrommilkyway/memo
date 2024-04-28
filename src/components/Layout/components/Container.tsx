// packages
import React, { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
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
