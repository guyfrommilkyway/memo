// packages
import React from 'react';
import { Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';

interface Props {
  text: string;
}

const NoteHeading: React.FC<Props> = ({ text }) => {
  return (
    <Heading as='h6' w='full' mb='md' px='md' color='darken.100' fontSize='sm' textTransform='uppercase'>
      {text}
    </Heading>
  );
};

export default NoteHeading;

NoteHeading.propTypes = { text: PropTypes.string.isRequired };
