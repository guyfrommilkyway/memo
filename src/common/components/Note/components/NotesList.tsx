// import packages below
import React, { memo } from 'react';
import { Flex } from '@chakra-ui/react';

// import utils below
import { NotesListProps } from '@/common/utils/note-types';

const NotesList: React.FC<NotesListProps> = memo((props) => {
  const { render } = props;

  return (
    <Flex wrap='wrap' gap={4} my={8}>
      {render}
    </Flex>
  )
})

export default NotesList;