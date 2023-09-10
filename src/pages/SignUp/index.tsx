// import packages below
import React, { Fragment } from 'react';

// import components below
const Head = React.lazy(() => import('@/components/Head'));

const SignUp: React.FC = () => {
  return (
    <Fragment>
      <Head title='Archive' />
      <h1>Sign Up Page</h1>
    </Fragment>
  );
};

export default SignUp;
