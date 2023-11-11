// packages
import React, { Fragment } from 'react';

// components
import Head from '@/components/Head';
import Trash from '@/components/Trash';

const TrashPage: React.FC = () => {
  return (
    <Fragment>
      <Head title='Trash' />
      <Trash />
    </Fragment>
  );
};

export default TrashPage;
