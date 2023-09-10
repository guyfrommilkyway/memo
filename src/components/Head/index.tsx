// import packages below
import React from 'react';
import { Helmet } from 'react-helmet-async';

// import utils below
import { MetaProps } from '@/common/types/prop-types';

const Head: React.FC<MetaProps> = props => {
  const { title } = props;

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default Head;
