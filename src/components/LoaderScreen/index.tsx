// packages
import React from 'react';
import { Flex, Spinner } from '@chakra-ui/react';

const LoaderScreen: React.FC = () => {
  return (
    <Flex
      justify='center'
      alignItems='center'
      w='100%'
      minH='100vh'
      backgroundColor='#EEF0F2'
    >
      <Spinner size='lg' />
    </Flex>
  );
};

export default LoaderScreen;
