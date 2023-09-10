// import packages below
import React from 'react';
import { Outlet } from 'react-router-dom';

// import components below
import Content from '@/common/components/Content';
import Sidebar from '@/common/components/Sidebar';
import Header from '@/common/components/Header';
import Footer from '@/common/components/Footer';

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
