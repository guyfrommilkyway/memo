// import packages below
import React, { Fragment } from 'react';

// import components below
const Head = React.lazy(() => import('@/common/components/Head'));
const Trash = React.lazy(() => import('@/common/components/Trash'));

const TrashPage: React.FC = () => {
  return (
    <Fragment>
      <Head title='Trash' />
      <Trash />
    </Fragment>
  );
};

export default TrashPage;
