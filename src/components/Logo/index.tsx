// packages
import React from 'react';
import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to='/'>
      <Text
        color='#EEF0F2'
        fontSize='3xl'
        fontWeight='bold'
        textTransform='uppercase'
        textAlign='center'
        userSelect='none'
      >
        Memo
      </Text>
    </Link>
  );
};

export default Logo;
