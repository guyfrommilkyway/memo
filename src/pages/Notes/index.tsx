// packages
import React, { Fragment } from 'react';

// components
import Head from '@/components/Head';
import Notes from '@/components/Notes';

const NotesPage: React.FC = () => {
  return (
    <Fragment>
      <Head title='React Notes' />
      <Notes />
    </Fragment>
  );
};

export default NotesPage;
