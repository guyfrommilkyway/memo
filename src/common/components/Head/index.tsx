// import packages below
import React from 'react';
import { Helmet } from "react-helmet";

// import utils below
import { MetaProps } from '@/common/utils/interfaces/meta-props';

const Head: React.FC<MetaProps> = (props) => {
  const { title, author, description, keywords } = props;

  return (
    <Helmet>
      <meta name='charset' content='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='author' content={author} />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <title>{title}</title>
    </Helmet>
  )
}

export default Head;