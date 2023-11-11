// packages
import React, { Fragment } from 'react';

// components
import Head from '@/components/Head';
import Archive from '@/components/Archive';

const ArchivePage: React.FC = () => {
  return (
    <Fragment>
      <Head title='Archive' />
      <Archive />
    </Fragment>
  );
};

export default ArchivePage;
