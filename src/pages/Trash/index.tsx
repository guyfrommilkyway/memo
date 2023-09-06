// import packages below
import React, { Fragment } from 'react';

// import components below
const Head = React.lazy(() => import('@/common/components/Head'));

const Trash: React.FC = () => {
  return (
    <Fragment>
      <Head title='Trash' />
      <h1>Trash</h1>
    </Fragment>
  );
};

export default Trash;
