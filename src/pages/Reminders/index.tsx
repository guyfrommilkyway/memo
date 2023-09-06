// import packages below
import React, { Fragment } from 'react';

// import components below
const Head = React.lazy(() => import('@/common/components/Head'));

const Reminders: React.FC = () => {
  return (
    <Fragment>
      <Head title='Reminders' />
      <h1>Reminders</h1>
    </Fragment>
  );
};

export default Reminders;
