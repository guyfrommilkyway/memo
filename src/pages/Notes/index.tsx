// import packages below
import React, { Fragment } from 'react';

// import components below
import Head from '@/common/components/Head';
import Note from '@/common/components/Note';

const Notes: React.FC = () => {
  return (
    <Fragment>
      <Head title='React Notes' />
      <Note />
    </Fragment>
  )
}

export default Notes;