// packages
import React from 'react';
import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

// components
import Container from './components/Container';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Box as='section' display='flex' flexWrap='nowrap' w='full'>
        <Sidebar />
        <Box
          as='section'
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          alignItems='space-between'
          w='full'
        >
          <Content>
            <Outlet />
          </Content>
          <Footer />
        </Box>
      </Box>
    </Container>
  );
};

export default Layout;
