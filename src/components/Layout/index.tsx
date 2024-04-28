// packages
import React, { useState, useLayoutEffect, useCallback } from 'react';
import { Flex, useDisclosure } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Container from './components/Container';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import DrawerSidebar from './components/DrawerSidebar';
import Topbar from './components/Topbar';
import useSidebar from '@/hooks/useSidebar';

const Layout: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggle, toggleHandler } = useSidebar();
  const [screenWidth, setScreenWidth] = useState<number>(
    document.documentElement.clientWidth,
  );

  useLayoutEffect(() => {
    const handleResize = () => {
      const width = document.documentElement.clientWidth;
      setScreenWidth(width);

      if (width > 995) {
        onClose();
        toggleHandler(true);
      }
    };

    window.addEventListener('resize', handleResize);

    // clean up function
    return () => window.removeEventListener('resize', handleResize);
  }, [onClose, toggleHandler]);

  const onToggle = useCallback(
    () => (screenWidth > 998 ? toggleHandler() : onOpen()),
    [screenWidth, toggleHandler, onOpen],
  );

  return (
    <Container>
      {toggle && <Sidebar />}
      <DrawerSidebar isOpen={isOpen} onClose={onClose} />
      <Flex as='section' flexDirection='column' w='full' h='100%' minH='100vh'>
        <Topbar onToggle={onToggle} />
        <Content>
          <Outlet />
        </Content>
      </Flex>
    </Container>
  );
};

export default Layout;
