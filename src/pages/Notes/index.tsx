// import packages below
import React, { Fragment } from 'react';

// import components below
const Head = React.lazy(() => import('@/common/components/Head'));
const Notes = React.lazy(() => import('@/common/components/Notes'));

const NotesPage: React.FC = () => {
  return (
    <Fragment>
      <Head title='React Notes' />
      <Notes />
    </Fragment>
  );
};

export default NotesPage;
