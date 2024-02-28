// packages
import React from 'react';
import { Heading } from '@chakra-ui/react';

const NoteHeading: React.FC<NoteHeading> = props => {
  const { text } = props;

  return (
    <Heading
      as='h6'
      w='100%'
      mb='16px'
      px='16px'
      color='#FFFFFF'
      fontSize='sm'
      textTransform='uppercase'
    >
      {text}
    </Heading>
  );
};

export default NoteHeading;
