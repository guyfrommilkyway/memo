// packages
import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to='/'>
      <Flex align='center' h='80px' px='16px'>
        <Text
          color='#EEF0F2'
          fontSize='3xl'
          fontWeight='bold'
          userSelect='none'
        >
          Memo
        </Text>
      </Flex>
    </Link>
  );
};

export default Logo;
