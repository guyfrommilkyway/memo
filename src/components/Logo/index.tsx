// packages
import React from 'react';
import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to='/'>
      <Text as='span' color='#EEF0F2' fontSize='xl' userSelect='none'>
        React Notes
      </Text>
    </Link>
  );
};

export default Logo;
