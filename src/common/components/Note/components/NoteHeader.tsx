// import packages below
import React, { memo } from 'react';
import { Box, Button } from '@chakra-ui/react'

// import utils below
import { NoteHeaderProps } from '@/common/utils/note-types';

const NoteHeader: React.FC<NoteHeaderProps> = memo((props) => {
  const { onOpen } = props;

  return (
    <Box w='100%' maxW={620} mx='auto' border='1px solid red'>
      <Button onClick={onOpen}>Open</Button>
    </Box>
  )
})

export default NoteHeader;