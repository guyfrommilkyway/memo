// import packages below
import React from 'react';
import { Outlet } from 'react-router-dom';

// import components below
import Content from '../Content';
import Sidebar from '../Sidebar';
import Header from '../Header';
const Footer = React.lazy(() => import('../Footer'));

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
