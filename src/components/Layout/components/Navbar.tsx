// packages
import React from 'react';
import { VStack } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

import NavItem from './NavItem';
import NAV_ITEMS from '@/constants/nav-items';

const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <VStack alignItems='flex-start' gap={0}>
      {NAV_ITEMS.map((item, index) => {
        return <NavItem key={index} active={pathname === item.link} {...item} />;
      })}
    </VStack>
  );
};

export default Navbar;
