// import packages below
import React, { Fragment, useCallback } from 'react';
import { Box } from '@chakra-ui/react';

// import components below
import NotesList from '@/components/Notes/components/NotesList';
import NoteItem from '@/components/Notes/components/NoteItem';
const NoteForm = React.lazy(() => import('@/components/Notes/components/NoteForm'));
const CustomModal = React.lazy(() => import('@/components/Modal'));

// import helpers below
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { unarchive, move } from '@/features/notes/notes-slice';

// import utils below
import useModal from '@/hooks/useModal';
import useSelect from '@/hooks/useSelect';
import { Note } from '@/types/note-types';
import { toastSuccess } from '@/utils/notifications';

const Archive: React.FC = () => {
  const { isOpen, onOpen, onClose } = useModal();
  const { selected, selectHandler, clearSelectHandler } = useSelect();

  // store
  const { archive } = useAppSelector(state => state.notes);
  const dispatch = useAppDispatch();

  // archive handler
  const unarchiveHandler = useCallback(
    (data: Note) => {
      dispatch(unarchive({ from: 'ARCHIVE', data }));
      toastSuccess('Moved to notes');
    },
    [dispatch],
  );

  // remove handler
  const removeHandler = useCallback(
    (data: Note) => {
      dispatch(move({ from: 'ARCHIVE', data }));
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
        {archive.length > 0 && (
          <NotesList
            render={archive.map(note => {
              return (
                <NoteItem
                  key={note.id}
                  note={note}
                  onOpen={onOpen}
                  onUnarchive={() => unarchiveHandler(note)}
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

export default Archive;
