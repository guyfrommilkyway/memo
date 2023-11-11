// packages
import React, { Fragment } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

// components
import LoaderScreen from '@/components/LoaderScreen';

// types
interface Props {
  isAuthenticated: boolean;
  isLoading: boolean;
}

const ProtectedRoute: React.FC<Props> = props => {
  const { isAuthenticated, isLoading } = props;

  return (
    <Fragment>
      {isLoading && <LoaderScreen />}
      {!isLoading && isAuthenticated && <Outlet />}
      {!isLoading && !isAuthenticated && <Navigate to='/login' />}
    </Fragment>
  );
};

export default ProtectedRoute;
