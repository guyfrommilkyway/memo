// packages
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Head: React.FC<MetaProps> = props => {
  const { title } = props;

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default Head;
