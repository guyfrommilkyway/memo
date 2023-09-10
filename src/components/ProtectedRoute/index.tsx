// import packages below
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const isAuthenticated = true;

const ProtectedRoute: React.FC = () => {
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
}

export default ProtectedRoute;