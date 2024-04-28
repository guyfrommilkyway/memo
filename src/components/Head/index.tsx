// packages
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

interface Props {
  title: string;
  author?: string;
  description?: string;
  keywords?: string;
}

const Head: React.FC<Props> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default Head;

Head.defaultProps = {
  title: 'Memo',
  author: 'Almer Tampus',
  description: "A developer's take on the classic note-taking app. Inspired by Google Keep",
  keywords: 'React, Redux, TypeScript, Vite, Chakra UI, React Router',
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};
