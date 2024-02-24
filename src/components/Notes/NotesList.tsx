// packages
import React from 'react';
import { Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const NotesList: React.FC<NotesListProps> = props => {
  const { children } = props;

  return (
    <Flex wrap='wrap' gap='24px' my='32px' p='16px'>
      {children}
    </Flex>
  );
};

export default NotesList;

NotesList.propTypes = {
  children: PropTypes.any,
};
