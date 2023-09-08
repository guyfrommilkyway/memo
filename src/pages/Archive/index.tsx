// import packages below
import React, { Fragment } from 'react';

// import components below
const Head = React.lazy(() => import('@/common/components/Head'));
const Archive = React.lazy(() => import('@/common/components/Archive'));

const ArchivePage: React.FC = () => {
  return (
    <Fragment>
      <Head title='Archive' />
      <Archive />
    </Fragment>
  );
};

export default ArchivePage;
