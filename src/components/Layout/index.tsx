// import packages below
import React from 'react';
import { Outlet } from 'react-router-dom';

// import components below
import Content from '@/components/Content';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Layout: React.FC = () => {
  return (
    <main className='main'>
      <Header />
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </main>
  );
};

export default Layout;
