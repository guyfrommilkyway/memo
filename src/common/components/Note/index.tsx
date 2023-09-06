// import packages below
import React, { Fragment, useCallback, useState } from 'react';
import { Box } from '@chakra-ui/react';

// import components below
const NotesList = React.lazy(() => {
  return Promise.all([import('./components/NotesList'), new Promise(resolve => setTimeout(resolve, 300))]).then(
    ([moduleExports]) => moduleExports,
  );
});
const NoteItem = React.lazy(() => {
  return Promise.all([import('./components/NoteItem'), new Promise(resolve => setTimeout(resolve, 300))]).then(
    ([moduleExports]) => moduleExports,
  );
});
const NoteForm = React.lazy(() => {
  return Promise.all([import('./components/NoteForm'), new Promise(resolve => setTimeout(resolve, 300))]).then(
    ([moduleExports]) => moduleExports,
  );
});
const CustomModal = React.lazy(() => {
  return Promise.all([import('../Modal'), new Promise(resolve => setTimeout(resolve, 300))]).then(
    ([moduleExports]) => moduleExports,
  );
});

// import helpers below
import { useAppDispatch, useAppSelector } from '@/common/hooks/redux';
import { remove } from '@/features/note-slice';

// import utils below
import useModal from '@/common/hooks/useModal';
import NoteHeader from './components/NoteHeader';
import { Note } from '@/common/utils/note-types';

const Notes: React.FC = () => {
  const { isOpen, onOpen, onClose } = useModal();

  // store
  const { notes } = useAppSelector(state => state.notes);
  const dispatch = useAppDispatch();

  // state
  const [selectedNote, setSelectedNote] = useState<Note>();

  const closeHandler = useCallback(() => {
    setSelectedNote(undefined);
    onClose();
  }, [onClose]);

  return (
    <Fragment>
      <Box className='note'>
        <NoteHeader onOpen={onOpen} />
        {notes.length > 0 && (
          <NotesList
            render={notes.map(note => {
              return (
                <NoteItem
                  key={note.id}
                  note={note}
                  onOpen={onOpen}
                  onRemove={(id: string) => dispatch(remove(id))}
                  onSelect={setSelectedNote}
                />
              );
            })}
          />
        )}
      </Box>
      <CustomModal
        isOpen={isOpen}
        onClose={closeHandler}
        body={<NoteForm note={selectedNote} onClose={closeHandler} />}
      />
    </Fragment>
  );
};

export default Notes;
