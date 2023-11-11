// packages
import React, { Fragment } from 'react';

// components
import Head from '@/components/Head';
import LoginButton from './components/LoginButton';

const LoginPage: React.FC = () => {
  return (
    <Fragment>
      <Head title='Login' />
      <h1>Login Page</h1>
      <LoginButton />
    </Fragment>
  );
};

export default LoginPage;
