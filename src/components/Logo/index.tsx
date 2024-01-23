// packages
import React from 'react';
import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to='/'>
      <Text
        as='span'
        color='#EEF0F2'
        fontSize='2xl'
        userSelect='none'
        letterSpacing='2px'
      >
        Memo
      </Text>
    </Link>
  );
};

export default Logo;
