// import packages below
import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';

const isAuthenticated = false;

const PublicRoute: React.FC = () => {
  return isAuthenticated ? <Navigate to='/' /> : <Outlet />;
}

export default PublicRoute;