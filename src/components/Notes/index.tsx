// import packages below
import React, { Fragment, useCallback } from 'react';
import { Box } from '@chakra-ui/react';

// import components below
import NoteHeader from './components/NoteHeader';
import NotesList from './components/NotesList';
import NoteItem from './components/NoteItem';
const NoteForm = React.lazy(() => import('./components/NoteForm'));
const CustomModal = React.lazy(() => import('@/components/Modal'));

// import helpers below
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { move, archive } from '@/features/notes/notes-slice';

// import utils below
import useModal from '@/hooks/useModal';
import useSelect from '@/hooks/useSelect';
import { Note } from '@/types/note-types';
import { toastSuccess } from '@/utils/notifications';

const Notes: React.FC = () => {
  const { isOpen, onOpen, onClose } = useModal();
  const { selected, selectHandler, clearSelectHandler } = useSelect();

  // store
  const { notes } = useAppSelector(state => state.notes);
  const dispatch = useAppDispatch();

  // archive handler
  const archiveHandler = useCallback(
    (data: Note) => {
      dispatch(archive({ from: 'NOTES', data }));
      toastSuccess('Moved to archive');
    },
    [dispatch],
  );

  // remove handler
  const removeHandler = useCallback(
    (data: Note) => {
      dispatch(move({ from: 'NOTES', data }));
      toastSuccess('Moved to trash');
    },
    [dispatch],
  );

  // close modal handler
  const closeHandler = useCallback(() => {
    clearSelectHandler();
    onClose();
  }, [clearSelectHandler, onClose]);

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
                  onArchive={() => archiveHandler(note)}
                  onRemove={() => removeHandler(note)}
                  onSelect={selectHandler}
                />
              );
            })}
          />
        )}
      </Box>
      <CustomModal isOpen={isOpen} onClose={closeHandler} body={<NoteForm note={selected} onClose={closeHandler} />} />
    </Fragment>
  );
};

export default Notes;
