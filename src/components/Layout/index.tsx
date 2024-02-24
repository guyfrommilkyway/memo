// packages
import React, { useState, useLayoutEffect, useCallback } from 'react';
import { Flex, useDisclosure } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

// components
import Container from './components/Container';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import DrawerSidebar from './components/DrawerSidebar';
import Header from './components/Header';
import useToggle from '@/hooks/useToggle';

const Layout: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggle, toggleHandler } = useToggle();
  const [screenWidth, setScreenWidth] = useState<number>(1920);

  useLayoutEffect(() => {
    const handleResize = () => {
      const width = document.documentElement.clientWidth;
      setScreenWidth(width);

      if (width > 995) onClose();
    };

    window.addEventListener('resize', handleResize);

    // clean up function
    return () => window.removeEventListener('resize', handleResize);
  }, [onClose]);

  const onToggle = useCallback(
    () => (screenWidth > 998 ? onOpen() : toggleHandler()),
    [screenWidth, toggleHandler, onOpen],
  );

  return (
    <Container>
      {toggle && <Sidebar />}
      <DrawerSidebar isOpen={isOpen} onClose={onClose} />
      <Flex as='section' flexDirection='column' w='full' h='100%' minH='100vh'>
        <Header onToggle={onToggle} />
        <Content>
          <Outlet />
        </Content>
      </Flex>
    </Container>
  );
};

export default Layout;
