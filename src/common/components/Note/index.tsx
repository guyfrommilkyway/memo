// import packages below
import React, { Fragment, useCallback } from 'react';
import { Box } from '@chakra-ui/react';

// import components below
import NotesList from './components/NotesList';
import NoteItem from './components/NoteItem';
import NoteForm from './components/NoteForm';
import CustomModal from '../Modal';

// import helpers below
import { useAppDispatch, useAppSelector } from '@/common/hooks/redux';
import { remove } from '@/features/note-slice';

// import utils below
import useModal from '@/common/hooks/useModal';
import NoteHeader from './components/NoteHeader';

const Note: React.FC = () => {
  const { isOpen, onOpen, onClose } = useModal();

  // store
  const { notes } = useAppSelector(state => state.notes);
  const dispatch = useAppDispatch();

  const removeNoteHandler = useCallback((id: number) => {
    dispatch(remove(id));
  }, [dispatch])

  const closeModalHandler = useCallback(() => {
    onClose();
  }, [onClose])

  return (
    <Fragment>
      <Box className='note'>
        <NoteHeader onOpen={onOpen} />
        <NotesList
          render={notes.map((note) => {
            return <NoteItem key={note.id} note={note} onRemove={removeNoteHandler} />
          })} />
      </Box>
      <CustomModal
        isOpen={isOpen}
        onClose={closeModalHandler}
        body={<NoteForm onClose={closeModalHandler} />}
      />
    </Fragment>
  )
}

export default Note;