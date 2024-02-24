// packages
import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

// components
import Container from './components/Container';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const Layout: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <Flex
        as='section'
        flexDirection='column'
        w='full'
        h='100%'
        minH='100vh'
        pl='24px'
      >
        <Header />
        <Content>
          <Outlet />
        </Content>
      </Flex>
    </Container>
  );
};

export default Layout;
