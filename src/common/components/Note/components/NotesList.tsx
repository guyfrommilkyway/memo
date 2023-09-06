// import packages below
import React, { memo } from 'react';
import { Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

// import utils below
import { NotesListProps } from '@/common/utils/note-types';

const NotesList: React.FC<NotesListProps> = memo(props => {
  const { render } = props;

  return (
    <Flex
      className='note__note-lists'
      wrap='wrap'
      alignContent='flex-start'
      alignItems='flex-start'
      alignSelf='flex-start'
      gap={4}
      my={8}
    >
      {render}
    </Flex>
  );
});

export default NotesList;

NotesList.propTypes = {
  render: PropTypes.any,
};
