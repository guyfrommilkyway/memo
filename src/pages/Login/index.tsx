// import packages below
import React, { Fragment } from 'react';

// import components below
const Head = React.lazy(() => import('@/components/Head'));

const Login: React.FC = () => {
  return (
    <Fragment>
      <Head title='Archive' />
      <h1>Login Page</h1>
    </Fragment>
  );
};

export default Login;
