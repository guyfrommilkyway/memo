// import packages below
import React, { Fragment, memo, useCallback } from 'react';
import { Box, Button, Heading } from '@chakra-ui/react'

// import components below
import CustomModal from '@/common/components/Modal';
import NoteForm from './NoteForm';

// import utils below
import { NoteItemProps } from '@/common/utils/note-types';
import useModal from '@/common/hooks/useModal';

const NoteItem: React.FC<NoteItemProps> = memo((props) => {
  const { note, onRemove } = props;

  const { isOpen, onOpen, onClose } = useModal();

  const closeModalHandler = useCallback(() => {
    onClose();
  }, [onClose])

  return (
    <Fragment>
      <Box
        className='note__note-item'
        flex='1 0 20%'
        maxW='calc(20% - 13px)'
        p={4}
        border='1px solid darkblue'
        borderRadius={8}
        cursor='pointer'
        onClick={onOpen}
      >
        <Heading as='h6' mb={4} fontSize='xl'>{note.title}</Heading>
        <Box mb={4}>
          <p>{note.body}</p>
        </Box>
        <Button size='sm' onClick={() => onRemove(note.id)}>Remove</Button>
      </Box>
      <CustomModal
        isOpen={isOpen}
        onClose={closeModalHandler}
        body={<NoteForm note={note} onClose={closeModalHandler} />}
      />
    </Fragment>
  )
})

export default NoteItem;