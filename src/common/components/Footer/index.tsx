// import packages below
import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <footer className='main__footer'>
      <Flex direction='column' justify='center' alignItems='center' gap={0} h='100%'>
        <Text textAlign='center' fontSize={14}>
          Copyright &copy; Almer Tampus 2023
        </Text>
        <Text textAlign='center' fontSize={14}>
          All rights reserved
        </Text>
      </Flex>
    </footer>
  );
};

export default Footer;
