// import packages below
import React, { Fragment } from 'react';

// import components below
const Head = React.lazy(() => import('@/common/components/Head'));

const EditLabels: React.FC = () => {
  return (
    <Fragment>
      <Head title='Edit Labels' />
      <h1>Edit Labels</h1>
    </Fragment>
  );
};

export default EditLabels;
