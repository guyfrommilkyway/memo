// packages
import React from 'react';
import { HStack, VStack, Link, Text, Icon } from '@chakra-ui/react';
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
            p='16px'
            color='#FFFFFF'
            fontWeight={isActive ? 'bold' : 'normal'}
            borderTopRightRadius='full'
            borderBottomRightRadius='full'
            bg={isActive ? 'brand.200' : 'transparent'}
            transition='all ease-in-out 0.3s'
            _hover={{
              fontWeight: 'bold',
              backgroundColor: !isActive && 'brand.200',
            }}
          >
            <HStack gap='12px'>
              <Icon fontSize='28px' as={item.icon} />
              <Text as='span'>{item.name}</Text>
            </HStack>
          </Link>
        );
      })}
    </VStack>
  );
};

export default Navbar;
