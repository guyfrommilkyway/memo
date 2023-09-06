// import packages below
import React, { Fragment } from 'react';

// import components below
const Head = React.lazy(() => import('@/common/components/Head'));

const Archive: React.FC = () => {
  return (
    <Fragment>
      <Head title='Archive' />
      <h1>Archive</h1>
    </Fragment>
  );
};

export default Archive;
