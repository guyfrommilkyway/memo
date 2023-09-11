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
import { restore, remove } from '@/features/notes/notes-slice';

// import utils below
import useModal from '@/hooks/useModal';
import useSelect from '@/hooks/useSelect';
import { Note } from '@/types/note-types';
import { toastSuccess } from '@/utils/notifications';

const Trash: React.FC = () => {
  const { isOpen, onOpen, onClose } = useModal();
  const { selected, selectHandler, clearSelectHandler } = useSelect();

  // store
  const { trash } = useAppSelector(state => state.notes);
  const dispatch = useAppDispatch();

  // archive handler
  const restoreHandler = useCallback(
    (data: Note) => {
      dispatch(restore({ data }));
      toastSuccess('Moved to notes');
    },
    [dispatch],
  );

  // remove handler
  const removeHandler = useCallback(
    (id: string) => {
      dispatch(remove({ id }));
      toastSuccess('Deleted note');
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
        {trash.length > 0 && (
          <NotesList
            render={trash.map(note => {
              return (
                <NoteItem
                  key={note.id}
                  note={note}
                  onOpen={onOpen}
                  onRestore={() => restoreHandler(note)}
                  onRemove={() => removeHandler(note.id)}
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

export default Trash;
