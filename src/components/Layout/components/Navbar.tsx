// packages
import React from 'react';
import { VStack, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

// assets
import { NAVBAR } from '@/data/navbar';

const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <VStack alignItems='flex-start' gap={0}>
      {NAVBAR.map((item, index) => {
        const isActive = pathname === item.link;

        return (
          <Link
            as={RouterLink}
            to={item.link}
            key={index}
            w='100%'
            p={4}
            color={isActive ? 'white' : 'black'}
            fontWeight={isActive ? 'bold' : 'normal'}
            bg={isActive ? '#846A6A' : 'transparent'}
            transition='all ease-in 0.3s'
            _hover={{
              background: pathname !== item.link && '#A2999E',
            }}
          >
            <Text as='span'>{item.name}</Text>
          </Link>
        );
      })}
    </VStack>
  );
};

export default Navbar;
